class Conf < ApplicationRecord
  validates :score, :tester_id, :card_id, presence: true
  validates :score, :inclusion => { :in => 0..5 }

  belongs_to :card

  belongs_to :tester,
  primary_key: :id,
  foreign_key: :tester_id,
  class_name: :User


  has_one :deck,
  through: :card,
  source: :deck
end
