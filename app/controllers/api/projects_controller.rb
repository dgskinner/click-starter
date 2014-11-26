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
  end
end