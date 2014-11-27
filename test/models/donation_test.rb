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

require 'test_helper'

class DonationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
