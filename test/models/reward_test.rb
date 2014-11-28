# == Schema Information
#
# Table name: rewards
#
#  id          :integer          not null, primary key
#  min_pledge  :integer          not null
#  description :text             not null
#  project_id  :integer          not null
#  created_at  :datetime
#  updated_at  :datetime
#

require 'test_helper'

class RewardTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
