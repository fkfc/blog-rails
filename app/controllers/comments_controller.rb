# frozen_string_literal: true

# Controller class for comments
class CommentsController < ApplicationController
  before_action :authenticate_user!
  before_action :find_post
  before_action :find_comment, only: [:destroy, :edit, :update]
  before_action :verify_ownership, only: [:destroy, :edit, :update]

  def create
    @comment = @post.comments.create(params[:comment].permit(:content))
    @comment.user_id = current_user.id
    if @comment.save
      redirect_to post_path(@post), notice: 'The comment has been created!'
    else
      redirect_to post_path(@post), notice: 'Error creating comment'
    end
  end

  def destroy
    @comment.destroy
    redirect_to post_path(@post)
  end

  def edit
  end

  def update
    if @comment.update(comment_params)
      redirect_to @post, notice: 'Update successful'
    else
      render 'edit'
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:post_slug, :content)
  end

  def find_post
    @post = Post.find_by(slug: params[:post_slug])
  end

  def find_comment
    @comment = @post.comments.find(params[:id])
  end

  def verify_ownership
    is_not_owner = @comment.user.present? && @comment.user != current_user
    if is_not_owner
      redirect_to @post, notice: 'Error: the current user is not the author'
    end
  end

end
