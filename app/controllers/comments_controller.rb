# frozen_string_literal: true

# Controller class for comments
class CommentsController < ApplicationController
  def create
    find_post
    @comment = @post.comments.create(params[:comment].permit(:content))
    if @comment.save
      redirect_to post_path(@post), notice: 'The comment has been created!'
    else
      redirect_to post_path(@post), notice: 'Error creating comment'
    end
  end

  def destroy
    find_post
    find_comment
    @comment.destroy
    redirect_to post_path(@post)
  end

  def edit
    find_post
    find_comment
  end

  def update
    find_post
    find_comment
    if @comment.update(comment_params)
      redirect_to @post, notice: 'Update successful'
    else
      render 'edit'
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:post_id, :content)
  end

  def find_post
    @post = Post.find(params[:post_id])
  end

  def find_comment
    @comment = @post.comments.find(params[:id])
  end
end
