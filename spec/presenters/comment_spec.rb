require 'rails_helper'

RSpec.describe Comment, type: :presenter do
  it 'Presenter changes created_at field' do
    comment = create(:post).comments.create(content: 'post content')
    presentable_comment = CommentPresenter.new(comment)
    expect(comment.created_at).to_not be == presentable_comment.created_at
  end
  it 'Presenter changes json conversion' do
    comment = create(:post).comments.create(content: 'post content')
    presentable_comment = CommentPresenter.new(comment)
    expect(comment.as_json).to_not be == presentable_comment.as_json
  end
end
