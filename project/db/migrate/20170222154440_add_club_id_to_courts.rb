class AddClubIdToCourts < ActiveRecord::Migration[5.0]
  def change
    add_column :courts, :club_id, :reference
  end
end
