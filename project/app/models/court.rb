class Court < ApplicationRecord
  belongs_to :club
  acts_as_bookable time_type: :range
end
