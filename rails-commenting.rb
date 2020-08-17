# ASSESSMENT 6: Rails Commenting Challenge
# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# app/controller/blog_posts_controller.rb

# 1) The class BlogPostsController is inheriting from from ApplicationController
class BlogPostsController < ApplicationController
  def index
    # 2) An instance variable that holds all the information in the BlogPost model. Could be called upon in the views if there was a render.
    @posts = BlogPost.all
  end

  def show
    # 3) An instance variable that will show the posts that matchthe id's from the model BlogPost when called upon.
    @post = BlogPost.find(params[:id])
  end

  # 4) An empty method named new
  def new
  end

  def edit
  end

  def create
    # 5) An instance variable that uses the logic in the blog_post_params method to set the parameter for the creation of an addittion to the database. If the input is valid then add it to the database.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to @post
    else
      render action: :new
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # 6) If the requirements aren't met to delete a post based off of its id then this will redirect the user back to where they started
      redirect_to blog_post_path(@post)
    end
  end

  # 7) Private is the keyword that protects all methods below. The strong params are always listed below it.
  private
  def blog_post_params
    # 8) This will only allow conent in the :title and :content columns to be added to the database
    params.permit(:title, :content)
  end

end


# app/models/blog_post.rb

# 9) The class for the model BlogPost inherits from the class ApllicationRecord
class BlogPost < ApplicationRecord
  # 10) This is the association between the model BlogPost the model Comment. Comment will be holding the foriegn key in this situation. 
  has_many :comments
end
