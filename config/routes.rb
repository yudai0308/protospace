Rails.application.routes.draw do
  devise_for :users
  root 'prototypes#index'

  resources :prototypes do
    resources :likes, only: [:create, :destroy]
    resources :comments, only: [:index, :create, :update]
  end
  resources :users, only: [:show, :edit, :update]
end
