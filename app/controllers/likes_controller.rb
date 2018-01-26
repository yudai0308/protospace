class LikesController < ApplicationController
  def create
    like = Like.create(user_id: current_user.id, prototype_id: params[:prototype_id])

    @like = like.id
    @path = prototype_like_path(like.prototype, @like)
    @prototype = Prototype.find(params[:prototype_id])
    @like_count = @prototype.likes_count
    respond_to do |format|
      format.html { redirect_to controller: 'prototypes', action: 'show', id: params[:prototype_id] }
      format.json
    end
  end

  def destroy
    like = Like.find_by(user_id: current_user.id, prototype_id: params[:prototype_id])
    like.destroy
    @path = prototype_likes_path(like.prototype)
    @prototype = Prototype.find(params[:prototype_id])
    @like_count = @prototype.likes_count
    respond_to do |format|
      format.html { redirect_to controller: 'prototypes', action: 'show', id: params[:prototype_id] }
      format.json
    end
  end
end
