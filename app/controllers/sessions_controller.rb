class SessionsController < ApplicationController
  def new
  end
  
  def create
    user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    if user
      login(user)
      redirect_to api_projects_url
    else
      flash[:errors] = ["Invalid Username or Password"]
      render :new
    end
  end
  
  def destroy
    logout
    redirect_to api_projects_url
  end
end