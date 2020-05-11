module Types
  module Event
    class GameCrushedType < Types::BaseObject
      graphql_name "Event__GameCrushed"

      field :type, String, null: false

      def type
        self.class.graphql_name
      end
    end
  end
end
