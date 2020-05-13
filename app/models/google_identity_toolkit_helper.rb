module GoogleIdentityToolkitHelper
  class << self
    def get_account_info(ids:)
      request = Google::Apis::IdentitytoolkitV3::GetAccountInfoRequest.new(
        local_id: ids
      )
      service.get_account_info(request).users
    end

    private

    def service
      @service = Google::Apis::IdentitytoolkitV3::IdentityToolkitService.new.tap do |service|
        auth = Google::Auth::ServiceAccountCredentials.make_creds(
          json_key_io: StringIO.new(ENV['GOOGLE_CLOUD_CREDENTIALS']),
          scope: [
            'https://www.googleapis.com/auth/identitytoolkit',
          ].join(' ')
        )

        service.authorization = auth
      end
    end
  end
end
