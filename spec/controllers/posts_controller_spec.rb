require 'rails_helper'

RSpec.describe 'GET posts#index' do
  it 'should render the post titles index' do
    posts = create_list(:post, 5)
    visit posts_path
    posts.each do |post|
      expect(page).to have_content(post.title)
    end
  end
end

RSpec.describe 'GET posts#show' do
  before(:all) do
    @post = create(:post)
  end
  it 'should render the post title' do
    visit post_path(@post)
    Capybara.ignore_hidden_elements = false
    expect(page).to have_content(@post.title)
    Capybara.ignore_hidden_elements = true
  end
  it 'should render the post content' do
    visit post_path(@post)
    Capybara.ignore_hidden_elements = false
    expect(page).to have_content(@post.content)
    Capybara.ignore_hidden_elements = true
  end
end
