module Api
  class DonationsController < ApiController
    def new 
      @donation = Project.new
    end
    
    def create
      @donation = Project.new(params[:donation].permit(:amount))
      @donation.project_id = params[:id]
      @donation.user_id = current_user.id
      if @donation.save
        render :json => @donation
      else
        render :json => @donation.errors.full_messages, :status => 422
      end
    end
  end
end