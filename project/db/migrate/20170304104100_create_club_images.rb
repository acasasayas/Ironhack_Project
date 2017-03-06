class CreateClubImages < ActiveRecord::Migration[5.0]
  def change
    create_table :club_images do |t|
      t.references :club, foreign_key: true
      t.attachment :image
      t.string :image_type
      t.timestamps
    end
  end
end
