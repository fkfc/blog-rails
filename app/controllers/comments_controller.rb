class CommentsController < ApplicationController
  def create
    @post = Post.find(params[:post_id])
    @comment = @post.comments.create(params[:comment].permit(:content))
    if @comment.save
      redirect_to post_path(@post), notice: "The comment has been created!"
    else
      redirect_to post_path(@post), notice: "Error creating comment"
    end
  end

  def destroy
    @post = Post.find(params[:post_id])
    @comment = @post.comments.find(params[:id])
    @comment.destroy
    redirect_to post_path(@post)
  end

  def edit
    @post = Post.find(params[:post_id])
    @comment = @post.comments.find(params[:id])
  end

  def update
    @post = Post.find(params[:post_id])
    @comment = @post.comments.find(params[:id])
    if @comment.update(comment_params)
      redirect_to @post, notice: "Update successful"
    else
      render 'edit'
    end
  end


private
  def comment_params
    params.require(:comment).permit(:post_id, :content)
  end

end
