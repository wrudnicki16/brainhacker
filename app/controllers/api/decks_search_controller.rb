class Api::DecksSearchController < ApplicationController
  def index
    @decks = Deck.search_ten(deck_search_params[:query])
  end

  private

  def deck_search_params
    params.require(:search).permit(:query)
  end
end
