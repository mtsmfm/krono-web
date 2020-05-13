module Loaders
  class GoogleIdentityLoader < GraphQL::Batch::Loader
    def perform(ids)
      GoogleIdentityToolkitHelper.get_account_info(ids: ids).each do |user_info|
        fulfill(user_info.local_id, user_info)
      end

      ids.each { |id| fulfill(id, nil) unless fulfilled?(id) }
    end
  end
end
