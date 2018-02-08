class Deck < ApplicationRecord
  validates :title, presence: true
  validates :title, length: { minimum: 3, allow_nil: true }

  belongs_to :creator,
  primary_key: :id,
  foreign_key: :creator_id,
  class_name: :User

  has_many :cards

  has_many :confs,
  through: :cards,
  source: :confs

  # frontend to backend
  def self.get_user_score(deckId, current_user_id)
    Deck.find_by(id: deckId)
      .confs
      .where(tester_id: current_user_id)
  end

  # backend sent through jbuilder - first fetch of the mastery...
  # how does this interact with the frontend?
  def mastery_score(current_user_id)
    if self.cards.count > 0
      sum = self.get_user_score(current_user_id).sum(:score)
      max_score = self.cards.count * 5
      sum * 100 / max_score
    else
      0
    end
  end
end
