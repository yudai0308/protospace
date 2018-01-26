Rails.application.routes.draw do
  devise_for :users
  root 'prototypes#index'

  get 'newest', :controller => 'prototypes', :action => 'newest'
  get 'popular', :controller => 'prototypes', :action => 'popular'

  resources :prototypes do
    resources :likes, only: [:create, :destroy]
    resources :comments, only: [:index, :create, :update, :destroy]
  end
  resources :users, only: [:show, :edit, :update]
  resources :tags, only: [:index, :show]
end
