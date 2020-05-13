module Types
  class SeatType < Types::BaseObject
    field :id, ID, null: false
    field :user_sub, ID, null: false
    field :game, Types::GameType, null: true
    field :user_name, String, null: true

    def game
      Loaders::FirestoreRecordLoader.for(Game).load(object.game_id)
    end

    def user_name
      Loaders::GoogleIdentityLoader.for.load(object.user_sub).then do |user_info|
        user_info.display_name
      end
    end
  end
end
