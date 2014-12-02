# == Schema Information
#
# Table name: projects
#
#  id          :integer          not null, primary key
#  name        :string(255)      not null
#  description :text             not null
#  goal        :integer          not null
#  user_id     :integer          not null
#  created_at  :datetime
#  updated_at  :datetime
#  deadline    :date
#  image_url   :string(255)
#  category    :string(255)
#

class Project < ActiveRecord::Base
  CATEGORIES = ["art", "food", "games", "music", "technology"]
  
  validates( 
    :name, 
    :description, 
    :goal, 
    :user_id, 
    :deadline, 
    :category,
    presence: true
  )
  validates :goal, numericality: { greater_than_or_equal_to: 1 }
  validates :category, inclusion: CATEGORIES
  
  belongs_to :user
  has_many :donations
  has_many :rewards
  has_many(
    :backers,
    through: :donations,
    source: :user
  )
end
