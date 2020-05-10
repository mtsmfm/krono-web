module Types
  class SubscriptionType < Types::BaseObject
    extend GraphQL::Subscriptions::SubscriptionRoot

    field :game_event_triggered, Types::EventType, null: true

    def game_event_triggered
    end
  end
end
