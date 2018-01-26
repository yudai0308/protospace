class Tag < ActiveRecord::Base
  belongs_to :prototype
  def number
    @prototypes = []
    Prototype.all.each do |prototype|
      prototype.tags.each do |tag|
        if tag.name == self.name
          @prototypes << prototype
          break
        end
      end
    end
    return @prototypes.length
  end
end
