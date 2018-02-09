# == Schema Information
#
# Table name: confs
#
#  id         :integer          not null, primary key
#  card_id    :integer          not null
#  score      :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  tester_id  :integer          not null
#

require 'test_helper'

class ConfTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
