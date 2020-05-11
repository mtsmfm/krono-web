module Types
  module Event
    class GameEndedType < Types::BaseObject
      graphql_name "Event__GameEnded"

      field :type, String, null: false

      def type
        self.class.graphql_name
      end
    end
  end
end
