class Api::CardsController < ApplicationController
  before_action :require_login

  def create
    @card = Card.new(card_create_params)
    @card.deck_id = params[:deck_id]

    if @card.deck.creator_id == current_user.id
      if @card.save
        render :show
      else
        render json: @card.errors.full_messages, status: 422
      end
    else
      render json: ["Can't edit this deck"], status: 401
    end
  end

  def index
    @cards = Card.all.where("deck_id = #{params[:deck_id]}")
  end

  def show
    @card = Card.find_by(id: params[:id])

    if @card
      render :show
    else
      render json: ['Card not found'], status: 404
    end
  end

  def update
    @card = current_user.cards.find_by(id: params[:id])
    if @card
      if @card.update(card_update_params)
        render :show
      else
        render json: @card.errors.full_messages
      end
    else
      render json: ["Can't edit this deck"], status: 401
    end
  end

  def destroy
    @card = current_user.cards.find_by(id: params[:id])
    if @card
      @card.destroy
      render :show
    else
      render json: ["Can't edit this deck"], status: 401
    end
  end

  private

  def card_create_params
    # Need deck_id to filter based on the deck - for index and create actions.
    # Create needs to set up the association with a deck through this.
    # Can we maybe retrieve this through the url though?
    # No because all we get through the ajax call is a payload
    # We can certainly insert the deck id into the payload via the url,
    # specifically on create (and maybe index? Depends on how much info
    # we have on the frontend, not sure for now)
    params.require(:card).permit(:front, :back, :deck_id)
  end

  def card_update_params
    params.require(:card).permit(:front, :back)
  end
end
