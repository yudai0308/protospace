class Comment < ActiveRecord::Base
  belongs_to :prototype
  belongs_to :user

  validates :content, presence: true
end
