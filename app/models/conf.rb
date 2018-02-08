class Conf < ApplicationRecord
  validates :score, presence: true

  belongs_to :card

  belongs_to :user
end
