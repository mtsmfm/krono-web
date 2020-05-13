module Types
  class SeatType < Types::BaseObject
    field :id, ID, null: false
    field :user_sub, ID, null: false
    field :game, Types::GameType, null: true

    def game
      Loaders::FirestoreRecordLoader.for(Game).load(object.game_id)
    end
  end
end
