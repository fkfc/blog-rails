class Comment < ApplicationRecord
  belongs_to :post
  belongs_to :user
  validates :content, :post_id, presence: true
  validates_length_of :content, maximum: 250
end
