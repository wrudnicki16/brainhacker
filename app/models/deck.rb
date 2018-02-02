class Deck < ApplicationRecord
  validates :title, presence: true
  validates :title, length: { minimum: 3, allow_nil: true }

  belongs_to :creator,
  primary_key: :id,
  foreign_key: :creator_id,
  class_name: :User
end
