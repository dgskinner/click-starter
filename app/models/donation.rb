# == Schema Information
#
# Table name: donations
#
#  id         :integer          not null, primary key
#  amount     :integer          not null
#  user_id    :integer          not null
#  project_id :integer          not null
#  created_at :datetime
#  updated_at :datetime
#

class Donation < ActiveRecord::Base
  validates :amount, :user_id, :project_id, presence: true
  validates :amount, numericality: { greater_than_or_equal_to: 1 }
  
  belongs_to :user
  belongs_to :project
end
