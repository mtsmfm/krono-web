module Types
  class GameType < Types::BaseObject
    field :id, ID, null: false
    field :seats, [Types::SeatType], null: false
  end
end
