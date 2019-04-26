# frozen_string_literal: true

# Controller class for the Post model
class PostsController < ApplicationController
  before_action :find_post, only: %i[show edit update destroy]
  before_action :authenticate_user!, except: [:index, :show]
  before_action :verify_ownership, only: [:edit, :update, :destroy]

  def index
    @posts = Post
             .paginate(page: params[:page], per_page: 5)
             .order(created_at: :desc)
  end

  def show
    # comment list ordered by creation date and reinstanced as CommentPresenter
    all_comments = @post.comments.order(created_at: :asc)
    @comments = all_comments.map { |comment| CommentPresenter.new(comment) }

    # new Comment instance for the 'add comment' section form
    @comment = @post.comments.build

    @react_post_props = {
      title: @post.title,
      content: @post.content,
      createdAt: @post.created_at,
      postPath: post_path(@post),
      comments: @comments,
      author: @post.user.present? ? @post.user.email : nil
    }
  end

  def new
    # @post = Post.new
    @post = current_user.posts.build
  end

  def create
    # @post = Post.new(post_params)
    @post = current_user.posts.build(post_params)
    if @post.save
      redirect_to @post, notice: 'The post has been created!'
    else
      render 'new'
    end
  end

  def edit; end

  def update
    if @post.update(post_params)
      redirect_to @post, notice: 'Update successful'
    else
      render 'edit'
    end
  end

  def destroy
    @post.destroy
    redirect_to root_path, notice: 'Post deleted'
  end

  private

  def post_params
    params.require(:post).permit(:title, :content)
  end

  def find_post
    @post = PostPresenter.new(Post.find_by(slug: params[:slug]))
  end

  def verify_ownership
    is_not_owner = @post.user.present? && @post.user != current_user
    if is_not_owner
      redirect_to @post, notice: 'Error: the current user is not the author'
    end
  end
end
