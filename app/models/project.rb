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


class Project < ActiveRecord::Base
  validates :name, :description, :goal, :user_id, :deadline, presence: true
  
  belongs_to :user
  has_many :donations
  has_many(
    :backers,
    through: :donations,
    source: :user
  )
end
