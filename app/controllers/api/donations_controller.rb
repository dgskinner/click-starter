module Api
  class DonationsController < ApiController
    def create
      @donation = current_project.donations.new(donation_params)
      @donation.user_id = current_user.id
      if @donation.save
        render :json => @donation
      else
        render :json => @donation.errors.full_messages, :status => 422
      end
    end

    def index 
      @donations = Donation.all
      render :json => @donations
    end
  
    private
    def current_project
      @project = Project.find(params[:donation][:project_id])
    end
    
    def donation_params
      params[:donation].permit(:amount, :project_id)
    end
  end
end