require 'rails_helper'

short_content = 'content'
long_content = (0..250).map { 'a' }.join
valid_post = Post.create(title: 'title', content: 'content')

RSpec.describe Comment, type: :model do
  subject {
    valid_post.comments.create(content: short_content)
  }
  it 'is valid with valid attributes' do
    expect(subject).to be_valid
  end
  it 'is not valid without a content' do
    subject.content = nil
    expect(subject).to_not be_valid
  end
  it 'is not valid with the content longer than 250 characters' do
    subject.content = long_content
    expect(subject).to_not be_valid
  end
  it 'is not valid without an associated post' do
    comment = Comment.new(content: short_content)
    expect(comment).to_not be_valid
  end
end
