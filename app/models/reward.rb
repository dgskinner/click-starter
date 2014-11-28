# == Schema Information
#
# Table name: rewards
#
#  id          :integer          not null, primary key
#  min_pledge  :integer          not null
#  description :text             not null
#  created_at  :datetime
#  updated_at  :datetime
#

class Reward < ActiveRecord::Base
  validates :min_pledge, :description, presence: true 
  validates :min_pledge, numericality: { greater_than_or_equal_to: 1 }
  
  belongs_to :project
end
