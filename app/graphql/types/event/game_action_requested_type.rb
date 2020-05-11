module Types
  module Event
    class GameActionRequestedType < Types::BaseObject
      graphql_name "Event__GameActionRequested"

      field :type, String, null: false

      def type
        self.class.graphql_name
      end
    end
  end
end
