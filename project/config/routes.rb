Rails.application.routes.draw do
  devise_for :users
  resources :courts
  resources :clubs
  get '/' => 'application#index'
  get '/search' => 'application#search'   
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
