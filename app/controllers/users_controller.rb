class UsersController < ApplicationController
  def new
    @user = User.new
  end
  
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      redirect_to api_projects_url
    else
      flash[:errors] = @user.errors.full_messages
      render :new
    end
  end
  
  private
  
  def user_params
    params[:user].permit(:email, :password)
  end
end
