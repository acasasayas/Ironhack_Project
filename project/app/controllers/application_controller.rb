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
    clubs = Club.all

    array_url = []
    array_clubs = []

    clubs.each do |item|
      item.club_images.each do |subItem|
        array_url << subItem.image.url(:medium)
      end
      array_clubs << array_url
      array_url = []
    end
    render json: array_clubs
    # @clubs.last.club_images[0].image.url
  end

  private

  def date_to_number(date)
    split = date.strftime("%H:%M").split(':')
    result = split[0].to_i*60 + split[1].to_int
  end

  def string_to_number(string)
    split = string.split(':')
    result = split[0].to_i*60 + split[1].to_i
  end

  def find_open_club(time_open,close)
    @clubs = Club.where("close >= ? <= open AND close >= ? <= open", string_to_number(time_open), string_to_number(close))

  end

  def find_free_courts(time_start,time_end)
    @available_courts = []
    @clubs.each do |club|

        club.courts.each do |court|
        @available_courts << court
        end
    end
  end

end
