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
      # flash.now[:alert] = "メッセージを入力してください。"
      redirect_to prototype_path(@prototype)
    end
  end

  def destroy
  end

  private

  def comment_params
    params.require(:comment).permit(:content).merge(prototype_id: params[:prototype_id], user_id: current_user.id)
  end

  def set_prototype
    @prototype = Prototype.find(params[:prototype_id])
  end

end