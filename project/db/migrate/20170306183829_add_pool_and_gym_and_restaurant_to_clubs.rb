class AddPoolAndGymAndRestaurantToClubs < ActiveRecord::Migration[5.0]
  def change
    add_column :clubs, :pool, :boolean, :default => false
    add_column :clubs, :gym, :boolean, :default => false
    add_column :clubs, :restaurant, :boolean, :default => false
  end
end
