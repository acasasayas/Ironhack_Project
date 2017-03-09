class AddIdPlaceToClub < ActiveRecord::Migration[5.0]
  def change
    add_column :clubs, :id_place, :string
  end
end
