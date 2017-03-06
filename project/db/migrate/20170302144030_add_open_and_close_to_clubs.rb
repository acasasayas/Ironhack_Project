class AddOpenAndCloseToClubs < ActiveRecord::Migration[5.0]
  def change
    add_column :clubs, :open, :integer
    add_column :clubs, :close, :integer
  end
end
