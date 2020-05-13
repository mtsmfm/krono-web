module Types
  class QueryType < Types::BaseObject
    field :node, field: GraphQL::Relay::Node.field
  end
end
