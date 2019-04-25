require 'rails_helper'

short_title = 'title'
short_content = 'content'
long_title = (0..250).map { 'a' }.join
long_content = (0..500).map { 'a' }.join

RSpec.describe Post, type: :model do
  it 'is valid with valid attributes' do
    post = Post.new(title: short_title, content: short_content)
    expect(post).to be_valid
  end
  it 'is not valid without a title' do
    post = Post.new(title: nil, content: short_content)
    expect(post).to_not be_valid
  end
  it 'is not valid without a content' do
    post = Post.new(title: short_title, content: nil)
    expect(post).to_not be_valid
  end
  it 'is not valid with a title longer than 250 characters' do
    post = Post.new(title: long_title, content: short_content)
    expect(post).to_not be_valid
  end
  it 'is not valid with the content longer than 500 characters' do
    post = Post.new(title: short_title, content: long_content)
    expect(post).to_not be_valid
  end
end
