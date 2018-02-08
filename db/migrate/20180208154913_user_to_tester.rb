class UserToTester < ActiveRecord::Migration[5.1]
  def change
    remove_index :confs, :user_id
    remove_column :confs, :user_id
    add_column :confs, :tester_id, :integer
    add_index :confs, :tester_id
  end
end
