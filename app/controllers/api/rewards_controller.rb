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
      params[:reward].permit(:min_pledge, :description)
    end
  end
end
