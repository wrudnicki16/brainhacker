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

  # Might need to index the created_at column
  def get_user_confs(current_user_id)
    if self.confs.where(tester_id: current_user_id).empty?
      Conf.none
    else
      self.cards.map do |card|
        card.confs.where(tester_id: current_user_id).order("created_at desc").limit(1)[0]
      end
    end
  end

  # helper
  def get_user_scores(confs)
    scores = []
    confs.each do |conf|
      scores.push(conf.score) unless conf.nil?
    end
    scores
  end

  def mastery_score(current_user_id)
    if self.cards.count > 0
      deck_confs = self.get_user_confs(current_user_id)
      deck_scores = get_user_scores(deck_confs)
      sum_scores = deck_scores.reduce(:+) ? deck_scores.reduce(:+) : 0
      max_score = self.cards.count * 5
      sum_scores * 100 / max_score
    else
      0
    end
  end

  def self.search_ten(query_param)
    query = "%#{query_param.downcase}%"
    if query_param != ""
      @decks = Deck.where("lower(title) LIKE ?", query).limit(10)
      @decks.select { |deck| deck.cards.length > 0 }
    end
  end

  def findCreatorName(id)
    user = User.find_by(id: id)
    user.username
  end
end
