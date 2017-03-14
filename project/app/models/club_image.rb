class ClubImage < ApplicationRecord

  has_attached_file :image, styles: {
    :medium => "250x250>",
    :thumb => "85x85>" }

  validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/

  belongs_to :club
end
