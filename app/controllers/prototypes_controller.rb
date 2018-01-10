class PrototypesController < ApplicationController
  before_action :set_prototype, only: [:show, :edit, :update, :destroy]

  def index
    @prototypes = Prototype.all
  end

  def new
    @prototype = Prototype.new
    @prototype.captured_images.build
  end

  def create
    @prototype = Prototype.new(prototype_params)
    if @prototype.save
      redirect_to :root, notice: 'New prototype was successfully created'
    else
      render :new, alert: 'YNew prototype was unsuccessfully created'
     end
  end

  def show
  end

  def edit
    @prototype.captured_images.build
  end

  def update
    if @prototype.update(prototype_params)
      redirect_to :root, notice: 'New prototype was successfully created'
    else
      render :edit, alert: 'YNew prototype was unsuccessfully updated'
     end
  end

  def destroy
    @prototype.destroy
    redirect_to :root, notice: 'New prototype was successfully deleted'
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
      captured_images_attributes: [:content, :status]
    )
  end
end
