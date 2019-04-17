class Post < ApplicationRecord
  has_many :comments, dependent: :destroy
  validates :title, :content, presence: true
  validates_length_of :title, maximum: 50
  validates_length_of :content, maximum: 500
end
