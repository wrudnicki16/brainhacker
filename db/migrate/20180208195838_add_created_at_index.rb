class AddCreatedAtIndex < ActiveRecord::Migration[5.1]
  def change
    add_index :confs, :created_at
  end
end
