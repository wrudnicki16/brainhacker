class Card < ApplicationRecord
  belongs_to :deck
  has_many :confs
end
