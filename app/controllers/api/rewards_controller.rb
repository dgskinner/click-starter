module Api
  class RewardsController < ApplicationController  
    def create 
      @reward = Reward.new(reward_params)
      if @reward.save
        render json: @reward
      else
        render json: @reward.errors.full_messages, status: 422
      end  
    end
  
    def index
      # @rewards = Reward.where(project_id: params[:project_id])
      @rewards = Reward.all
      render json: @rewards
    end
  
    private
    def reward_params
      # ideally would not have to permit :project_id
      params[:reward].permit(:min_pledge, :description, :project_id)
    end
  end
end
