class CommentsController < ApplicationController
  before_action :set_prototype

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      respond_to do |format|
        format.html { redirect_to prototype_path(@prototype) }
        format.json
      end
    else
      redirect_to prototype_path(@prototype)
    end
  end

  def update
    @comment = Comment.find(params[:id])
    @comment.update(comment_params) if @comment.user.id == current_user.id
    respond_to do |format|
      format.html { redirect_to prototype_path(@prototype) }
      format.json
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy if @comment.user.id == current_user.id
    respond_to do |format|
      format.json {render json: @comment}
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:content).merge(prototype_id: params[:prototype_id], user_id: current_user.id)
  end

  def set_prototype
    @prototype = Prototype.find(params[:prototype_id])
  end

end
