Rails.application.routes.draw do
  as :user do
    get '/users/sign_out', to: 'devise/sessions#destroy'
  end
  devise_for :users
  # resources :courts
  post '/courts', to: 'courts#create', as: 'create_court'
  resources :clubs do
    get 'show_modal', on: :collection, as: 'show_modal'
  end
  resources :club_images, only: [:index, :create]
  post '/clubs/new', to: 'clubs#create'
  get '/' => 'application#index'
  get '/search' => 'application#search'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/reservas' => 'courts#reservation'
  post '/reservas' => 'courts#create_reservation', as: 'reservations'

end
