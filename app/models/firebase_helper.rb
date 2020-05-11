module FirebaseHelper
  def self.extract_sub_from_jwt(token)
    payload, header = JWT.decode(token, nil, true, {
      algorithms: ['RS256'],
      verify_aud: true,
      verify_iss: true,
      verify_iat: true,
      aud: ENV['FIREBASE_PROJECT_ID'],
      iss: "https://securetoken.google.com/#{ENV['FIREBASE_PROJECT_ID']}",
    }) do |header|
      json = Rails.cache.fetch(:firebase_public_key_json, expires_in: 5.minutes) do
        url = URI('https://www.googleapis.com/robot/v1/metadata/x509/securetoken@system.gserviceaccount.com')
        JSON.parse(Net::HTTP.get(url))
      end
      OpenSSL::X509::Certificate.new(json[header['kid']]).public_key
    end

    if payload['auth_time'] < Time.zone.now.to_i && !payload['sub'].empty?
      payload['sub']
    end
  rescue JWT::DecodeError
    nil
  end
end
