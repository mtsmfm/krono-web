module Types
  class MutationType < Types::BaseObject
    field :create_seat, mutation: Mutations::CreateSeat
  end
end
