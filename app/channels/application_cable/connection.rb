module ApplicationCable
  class Connection < ActionCable::Connection::Base
    identified_by :current_user_sub

    def connect
      self.current_user_sub = find_verified_user_sub
    end

    private

    def find_verified_user_sub
      if sub = FirebaseHelper.extract_sub_from_jwt(request.params[:token])
        sub
      else
        reject_unauthorized_connection
      end
    end
  end
end
