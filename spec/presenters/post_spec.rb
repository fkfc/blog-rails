require 'rails_helper'

RSpec.describe Post, type: :presenter do
  it 'Presenter changes created_at field' do
    post = create(:post)
    presentable_post = PostPresenter.new(post)
    expect(post.created_at).to_not be == presentable_post.created_at
  end
  it 'Presenter changes json conversion' do
    post = create(:post)
    presentable_post = PostPresenter.new(post)
    expect(post.as_json).to_not be == presentable_post.as_json
  end
end
