class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session

  def index
    @club = Club.new
    render 'index'
  end

  def search
    @clubs = Club.all
    render 'search'
  end

  def images
    # clubs = Club.all
    #
    # array_url = []
    # array_clubs = []
    #
    # clubs.each do |item|
    #   item.club_images.each do |subItem|
    #     array_url << subItem.image.url(:medium)
    #   end
    #   array_clubs << array_url
    #   array_url = []
    # end
    # render json: array_clubs
  end


end
