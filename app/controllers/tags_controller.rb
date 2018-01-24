class TagsController < ApplicationController
  def index
    @tags = []
    Tag.order("name ASC").each do |tag|
      i = 0
      @tags.each do |t|
        if tag.name != t.name
          i += 1
        end
      end
      if i == @tags.length
        @tags << tag
      end
    end
  end

  def show
    @tag = Tag.find(params[:id])
    @prototypes = []
    Prototype.all.each do |prototype|
      prototype.tags.each do |tag|
        if tag.name == @tag.name
          @prototypes << prototype
          break
        end
      end
    end
  end
end
