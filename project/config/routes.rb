Rails.application.routes.draw do
  as :user do
    get '/users/sign_out', to: 'devise/sessions#destroy'
  end
  devise_for :users
  resources :courts
  resources :clubs
  post '/clubs/new', to: 'clubs#create'
  get '/' => 'application#index'
  get '/search' => 'application#search'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
