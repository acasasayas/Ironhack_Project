class ClubsController < ApplicationController
  before_action :find_club

  def new
    @club = Club.new
  end

  def index
    clubs = Club.all
    render json: clubs
  end

  def create
    debugger
    if club = Club.create(
      name: params[:club][:name],
      full_street_address: params[:club][:full_street_address],
      gym: params[:club][:gym],
      restaurant: params[:club][:restaurant],
      pool: params[:club][:restaurant],
      open: string_to_number(params[:club][:open]),
      close: string_to_number(params[:club][:close])
      )
      debugger
      if params[:club][:club_images]
        params[:club][:club_images].each do |image|
        club.club_images.create({image: image})
      end
      else
        club.club_images.create({image: image})
      end
    end
    render json: club
  end

  def show
    unless @club
      club_not_found
      return
    end

    render json: @club
  end

  def update
    unless @club
      club_not_found
      return
    end

    @club.update(club_params)
    render json: @club
  end

  def destroy
    unless @club
      club_not_found
      return
    end

    @club.destroy
    render json: @club
  end

  private

  def club_params
    params.require(:club).permit(:name, :full_street_address, :gym, :restaurant, :pool, :open, :close)
  end

  def find_club
    @club = Club.find_by(id: params[:id])
  end

  def club_not_found
    render json: {error: "club not found"}, status: 404
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
