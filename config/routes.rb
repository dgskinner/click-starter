Rails.application.routes.draw do
  root to: 'static_pages#root'
  
  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]
  
  namespace :api, defaults: {format: :json} do
    resources :projects, except: [:edit, :update]
    resources :donations, only: [:new, :create, :index]
  end
end
