module Types
  module Event
    class GameStartedType < Types::BaseObject
      graphql_name "Event__GameStarted"

      field :type, String, null: false

      def type
        self.class.graphql_name
      end
    end
  end
end
