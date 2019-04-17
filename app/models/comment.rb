class Comment < ApplicationRecord
  belongs_to :post
  validates :content, :post_id, presence: true
end
