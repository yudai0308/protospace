class LikesController < ApplicationController
  def create
    @like = Like.create(user_id: current_user.id, prototype_id: params[:prototype_id])
    @likes = Like.where(prototype_id: params[:prototype_id])
    @prototypes = Prototype.all
    @prototype = Prototype.find(params[:prototype_id])
  end

  def destroy
    like = Like.find_by(user_id: current_user.id, prototype_id: params[:prototype_id])
    like.destroy
    # @prototypes = Prototype.all
    # @prototype = Prototype.find(params[:prototype_id])
    # @likes = Like.where(prototype_id: params[:prototype_id])
    redirect_to controller: 'prototypes', action: 'show', id: params[:prototype_id]
  end
end
