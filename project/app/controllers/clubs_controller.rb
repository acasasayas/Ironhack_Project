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
    if club = Club.create(club_params)
      # club.club_images.create({image: params[:club_images]})
      params[:club][:club_images].each do |image|
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
    params.require(:club).permit(:name, :ubication)
  end

  def find_club
    @club = Club.find_by(id: params[:id])
  end

  def club_not_found
    render json: {error: "club not found"}, status: 404
  end
end
