class RemoveFrontBackConstraint < ActiveRecord::Migration[5.1]
  def change
    remove_column :cards, :front
    remove_column :cards, :back
    add_column :cards, :front, :text
    add_column :cards, :back, :text
  end
end
