class AddLatitudeAndLingitudeToClubs < ActiveRecord::Migration[5.0]
  def change
    add_column :clubs, :latitude, :float
    add_column :clubs, :longitude, :float
  end
end
