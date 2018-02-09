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
  # Get the most recent confs here.
  # Might need to index the created_at column
  def get_user_score(current_user_id)
    if self.confs.where(tester_id: current_user_id).empty?
      Conf.none
    else
      # this is wrong, not sure how to fix.
      self.confs
      .where(tester_id: current_user_id)
      .order("created_at")
      .group(:card_id)
      .last
    end
  end

  # backend sent through jbuilder - first fetch of the mastery...
  # how does this interact with the frontend?
  def mastery_score(current_user_id)
    if self.cards.count > 0
      deck_score = self.get_user_score(current_user_id)
      sum = deck_score.sum(:score)
      max_score = self.cards.count * 5
      sum * 100 / max_score
    else
      0
    end
  end
end
