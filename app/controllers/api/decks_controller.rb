class Api::DecksController < ApplicationController
  def create
    @deck = Deck.new(deck_params)

    if @deck.save
      
    else

    end
  end

  def index
    @decks = Deck.all
  end

  private

  def deck_params
    params.require(:deck).permit(:title)
  end

end
