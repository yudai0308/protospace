class LikesController < ApplicationController
  def create
    like = Like.create(user_id: current_user.id, prototype_id: params[:prototype_id])
    redirect_to controller: 'prototypes', action: 'show', id: params[:prototype_id]
  end

  def destroy
    like = Like.find_by(user_id: current_user.id, prototype_id: params[:prototype_id])
    like.destroy if current_user.id == like.user_id
    redirect_to controller: 'prototypes', action: 'show', id: params[:prototype_id]
  end
end
