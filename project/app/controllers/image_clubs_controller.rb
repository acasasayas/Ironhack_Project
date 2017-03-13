class ImageClubsController < ApplicationController
  def index
    @clubs = Club.all
  end
end
