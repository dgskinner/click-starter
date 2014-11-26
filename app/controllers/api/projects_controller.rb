module Api
  class ProjectsController < ApiController
    def index
      @projects = Project.all
      render json: @projects
    end
    
    def show
      @project = Project.find(params[:id])
      render json: @project
    end
    
    def new 
      @project = Project.new
    end
    
    def create
      @project = Project.new(project_params)
      @project.user_id = current_user.id
      if @project.save
        render :json => @project
      else
        render :json => @project.errors.full_messages, :status => 422
      end
    end
    
    private
    def project_params
      params[:project].permit(:name, :description, :goal)
    end
  end
end