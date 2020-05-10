module Types
  class EventType < Types::BaseUnion
    possible_types \
      Types::Event::GameActionRequestedType,
      Types::Event::GameCrushedType,
      Types::Event::GameEndedType,
      Types::Event::GameStartedType,
      Types::Event::GameUpdatedType
  end
end
