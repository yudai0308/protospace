class PrototypesController < ApplicationController
  before_action :set_prototype, only: [:show, :edit, :destroy, :update]

  def index
    @prototypes = Prototype.all.page(params[:page]).per(10)
  end

  def new
    @prototype = Prototype.new
    @prototype.captured_images.build
    @prototype.tags.build
  end

  def newest
    @prototypes = Prototype.order("created_at DESC").page(params[:page]).per(10)
    respond_to do |format|
      format.html { render action:'index' }
      format.json
    end
  end

  def popular
    @prototypes = Prototype.order("likes_count DESC").page(params[:page]).per(10)
    respond_to do |format|
      format.html { render action:'index' }
      format.json
    end
  end

  def create
    @prototype = Prototype.new(prototype_params)
    if @prototype.save
      redirect_to :root, notice: 'New prototype was successfully created'
    else
      redirect_to ({ action: :new }), alert: 'New prototype was unsuccessfully created'
     end
  end

  def destroy
    @prototype.destroy if current_user.id == @prototype.user_id
    redirect_to :root, notice: 'Already prototype was successfully deleted'
  end

  def show
    @likes = Like.where(prototype_id: params[:id])
    @comment = Comment.new
    @comments = @prototype.comments.includes(:user).order("created_at DESC")
    @tags = @prototype.tags
  end

  def edit
    @image = @prototype.captured_images
  end

  def update
    if @prototype.update(prototype_params)
      redirect_to :root, notice: 'New prototype was successfully edited'
    else
      redirect_to ({ action: :edit }), alert: 'New prototype was unsuccessfully edited'
     end


  end

  private

  def set_prototype
    @prototype = Prototype.find(params[:id])
  end

  def prototype_params
    params.require(:prototype).permit(
      :title,
      :catch_copy,
      :concept,
      :user_id,
      captured_images_attributes: [:id, :content, :status],
      tags_attributes: [:id, :name]
    )
  end
end
