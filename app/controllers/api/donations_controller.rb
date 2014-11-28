module Api
  class DonationsController < ApiController
    def create
      @donation = Donation.new(donation_params)
      
      # ideally would set project_id here
      # then could create the donation through the project's donations assoc
      # would have to nest donation routes inside of project routes?
      # @donation.project_id = params[:project_id]

      @donation.user_id = current_user.id
      if @donation.save
        render :json => @donation
      else
        render :json => @donation.errors.full_messages, :status => 422
      end
    end
  end
  
  private
  def donation_params
    params[:donation].permit(:amount, :project_id)
  end
end