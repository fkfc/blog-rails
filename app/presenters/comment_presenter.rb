# frozen_string_literal: true

# Presenter class for a comment, providing a formatted output for the view
class CommentPresenter < SimpleDelegator
  attr_reader :comment

  def initialize(comment)
    @comment = comment
    __setobj__(comment)
  end

  def eql?(other)
    other == self || comment.eql?(other)
  end

  def created_at
    comment.created_at.strftime('%b %e, %Y %H:%M')
  end

  def as_json(*)
    # overrides some attributes with the values provided
    # by the presenter methods
    overrides = {
      created_at: created_at
    }
    @comment.as_json.merge(overrides)
  end
end
