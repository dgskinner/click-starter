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
      # @project = Project.new(project_params)
      # @project.user_id = current_user.id
      @project = current_user.projects.new(project_params)
      if @project.save
        render :json => @project
      else
        render :json => @project.errors.full_messages, :status => 422
      end
    end
    
    def destroy
      @project = Project.find(params[:id])
      @project.destroy if @project
      render :json => {}
    end
    
    private
    def project_params
      params[:project].permit(:name, :description, :goal, :deadline, :image_url)
    end
  end
end