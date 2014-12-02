class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  
  helper_method :logged_in?, :current_user, :is_owner?
  
  private
  
  def current_user
    @current_user ||= User.find_by_session_token(session[:session_token])
  end
  
  def is_owner?(project)
    return true if project.user_id == current_user.id
    false
  end
  
  def logged_in?
    !!current_user
  end
  
  def login(user)
    @current_user = user
    current_user.reset_session_token!
    session[:session_token] = current_user.session_token
  end
  
  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
  end
  
  def require_logged_in
    redirect_to new_session_url unless logged_in?
  end
end
