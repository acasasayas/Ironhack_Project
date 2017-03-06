class Club < ApplicationRecord
  has_many :courts
  has_many :club_images, dependent: :destroy
end
