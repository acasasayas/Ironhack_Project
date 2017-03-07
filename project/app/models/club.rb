class Club < ApplicationRecord
  has_many :courts
  has_many :club_images, dependent: :destroy
  geocoded_by :full_street_address   # can also be an IP address
  after_validation :geocode          # auto-fetch coordinates
end
