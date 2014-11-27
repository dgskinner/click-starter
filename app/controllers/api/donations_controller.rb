module Api
  class DonationsController < ApiController
    def new 
      @donation = Donation.new
    end
    
    def create
      @donation = Donation.new(params[:donation].permit(:amount, :project_id))
      # could set project_id here if wanted to nest donation routes inside of project routes
      # @donation.project_id = params[:project_id]
      @donation.user_id = current_user.id
      if @donation.save
        render :json => @donation
      else
        render :json => @donation.errors.full_messages, :status => 422
      end
    end
    
    def index 
      @donations = Donation.all
    end
  end
end