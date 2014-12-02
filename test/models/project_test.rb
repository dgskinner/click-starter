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

require 'test_helper'

class ProjectTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
