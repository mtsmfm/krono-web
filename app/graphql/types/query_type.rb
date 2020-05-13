module Types
  class QueryType < Types::BaseObject
    field :node, field: GraphQL::Relay::Node.field
    field :seat, Types::SeatType, null: false do
      argument :id, ID, required: true
    end

    def seat(id:)
      Seat.find(id).tap do |s|
        raise "Not authorized" unless s.user_sub == context[:current_user_sub]
      end
    end
  end
end
