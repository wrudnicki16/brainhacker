class Api::DecksController < ApplicationController
  before_action :require_login

  def create
    @deck = Deck.new(deck_params)
    @deck.creator_id = current_user.id

    if @deck.save
      render :show
    else
      render json: @deck.errors.full_messages, status: 422
    end
  end

  def index
    @decks = Deck.all
  end

  def show
    @deck = Deck.find_by(id: params[:id])

    if @deck
      render :show
    else
      render json: ['Deck not found'], status: 404
    end
  end

  def destroy
    @deck = Deck.find_by(id: params[:id])
    @deck.destroy
    render :show

  end

  def mastery
    @deck = Deck.find_by(id: params[:id])
    if @deck
      render :mastery
    else
      render json: ['Deck not found'], status: 404
    end
  end

  private

  def deck_params
    params.require(:deck).permit(:title)
  end

end
