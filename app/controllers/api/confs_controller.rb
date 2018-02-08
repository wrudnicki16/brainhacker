class Api::ConfsController < ApplicationController
  def create
    @conf = Conf.new(conf_params)
    @conf.tester_id = current_user.id
    @conf.card_id = params[:card_id]

    if @conf.save
      # what should I be rendering here?
      # deck to re-render the mastery of the deck?
      render "/api/deck/show"
    else
      render json: @conf.errors.full_messages
    end
  end

  private

  def conf_params
    params.require(:conf).permit(:score)
  end
end
