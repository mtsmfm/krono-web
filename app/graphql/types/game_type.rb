module Types
  class GameType < Types::BaseObject
    field :id, ID, null: false
    field :seats, [Types::SeatType], null: false

    def seats
      Seat.from_query(Seat.col.where(:game_id, :==, object.id))
    end
  end
end
