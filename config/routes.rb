Rails.application.routes.draw do
  # get 'static_pages_controller/root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
  end

  root "static_pages#root"
end
