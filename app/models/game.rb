class Game < FirestoreRecord
  attribute :created_at, :time, default: -> { Time.zone.now }
  attribute :updated_at, :time, default: -> { Time.zone.now }

  validates :created_at, presence: true
  validates :updated_at, presence: true

  before_save do
    self.updated_at = Time.zone.now
  end
end
