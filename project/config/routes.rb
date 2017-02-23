Rails.application.routes.draw do
  resources :courts
  resources :clubs
  get '/' => 'application#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
