# frozen_string_literal: true

# Presenter class for a post, providing a formatted output for the view
class PostPresenter < SimpleDelegator
  attr_reader :post

  def initialize(post)
    @post = post
    __setobj__(post)
  end

  def eql?(other)
    other == self || post.eql?(other)
  end

  def created_at
    post.created_at.strftime('%b %e, %Y %H:%M')
  end

  def comment_count
    if post.comments.count.positive?
      helpers.pluralize(post.comments.count, 'comment')
    else
      'No comment'
    end
  end

  def as_json(*)
    # overrides some attributes with the values provided
    # by the presenter methods
    overrides = {
      created_at: created_at
    }
    @post.as_json.merge(overrides)
  end

  private

  def helpers
    ApplicationController.helpers
  end
end
