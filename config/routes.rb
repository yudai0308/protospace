Rails.application.routes.draw do
  devise_for :users
  root 'prototypes#index'

  resources :prototypes do
    resources :likes, only: [:create, :destroy]
    resources :comments, only: [:index, :create, :update, :delete]
  end
  resources :users, only: [:show, :edit, :update]
end
