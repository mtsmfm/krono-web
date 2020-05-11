module Types
  module Event
    class GameUpdatedType < Types::BaseObject
      graphql_name "Event__GameUpdated"

      field :type, String, null: false

      def type
        self.class.graphql_name
      end
    end
  end
end
