class Api::CardsController < ApplicationController
  before_action :require_login

  def create
    @card = Card.new
    @card.deck_id = params[:deck_id]

    if @card.save
      render :show
    else
      render json: @card.errors.full_messages, status: 422
    end
  end

  def index
    @cards = Card.all
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
    @card = Card.find_by(id: params[:id])

    if @card
      if @card.update
        render :show
      else
        render json: @card.errors.full_messages
      end
    else
      render json: ['Card not found'], status: 404
    end
  end

  def destroy
    @card = Card.find_by(id: params[:id])
    @card.destroy
    render :show
  end

  private

  def card_params
    params.require(:card).permit(:front, :back)
  end
end
