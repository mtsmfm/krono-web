module Mutations
  class CreateSeat < BaseMutation
    field :seat, Types::SeatType, null: false

    def resolve
      created_seat = Seat.transaction do
        Seat.new(user_sub: context[:current_user_sub]).tap do |seat|
          other_seats = Seat.from_query(Seat.col.where(:game_id, :==, nil).limit(3)).force

          if other_seats.count == 3
            game = Game.create!

            ([seat] + other_seats).each do |s|
              s.update!(game_id: game.id)
            end
          else
            seat.save!
          end
        end
      end

      {seat: created_seat}
    end
  end
end
