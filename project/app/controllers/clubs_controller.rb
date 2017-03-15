class ClubsController < ApplicationController
  respond_to :json
  before_action :find_club

  def new
    @club = Club.new
  end

  def index

    minutes_start = date_to_number(params[:time_start].to_datetime)
    minutes_end = date_to_number(params[:time_end].to_datetime)

    if params[:center_lng] && params[:center_lat] && params[:corner_lat] && params[:corner_lng]
      distance = Geocoder::Calculations.distance_between([params[:center_lat],params[:center_lng]],[params[:corner_lat],params[:corner_lng]])
      debugger
      clubs = Club.near([params[:center_lat],params[:center_lng]],distance).includes(:courts).where("close >= ? AND ? >= open AND close >= ? AND ? >= open", minutes_start, minutes_start, minutes_end, minutes_end)

      reservations = Reservation.where("time_start <= ? AND time_end >= ?",params[:time_end].to_datetime,params[:time_start].to_datetime)
      reservations_by_court_id = {}
      reservations.each do |reservation|
        court_id = reservation.court_id
        unless reservations_by_court_id.has_key? court_id
          reservations_by_court_id[court_id] = []
        end
        reservations_by_court_id[court_id].push(reservation)
      end
      output = {}
      array_url = []
      array_clubs = []


      clubs.each do |club|
        club.courts.each do |court|
          court_reservations = reservations_by_court_id[court.id]
          free_slots = {}
          current_start_datetime = params[:time_start].to_datetime
          current_end_datetime = current_start_datetime.to_datetime + 1.hour
          while current_end_datetime <= params[:time_end].to_datetime
            free_slots[current_start_datetime] = {:court_id => court.id}
            current_start_datetime += 1.hour
            current_end_datetime += 1.hour
          end
          if court_reservations
            court_reservations.each do |court_r|
              free_slots.delete(court_r.time_start)
            end
          end
          unless free_slots.empty?
            unless output[club.id]
              output[club.id] = {:club => club}
            end
            unless output[club.id][court.sport]
              output[club.id][court.sport] = {}
            end
            free_slots.each do |key,value|
              output[club.id][court.sport][key] = court.id
            end
          end

        end
      end

    else

      output = {
        :error => "No hay parametros distancias NE SW"
      }
    end
    images = {}
    output.each do |key,value|
      club_images = []
      club = value[:club]
      club.club_images.each do |image|
        club_images << image.image.url(:medium)
      end
      images[club.id] = club_images
    end
    full_output = {
      :images => images,
      :clubs => output
    }







    respond_with(full_output.as_json)
  end

  def create
    if club = Club.create(
      name: params[:club][:name],
      full_street_address: params[:club][:full_street_address],
      gym: params[:club][:gym],
      restaurant: params[:club][:restaurant],
      pool: params[:club][:restaurant],
      open: string_to_number(params[:club][:open]),
      close: string_to_number(params[:club][:close]),
      id_place: params[:club][:id_place]
      )
      if params[:club][:club_images]
        params[:club][:club_images].each do |image|
        club.club_images.create({image: image})
        end
      else
        club.club_images.create({image: image})
      end
    end
    club_id = Club.last[:id]
    courts = params[:club][:courts].to_i
    for i in 1..courts
      court = Court.create(club_id: club_id, court_name: params[:court]["court#{i}"], sport: params[:court]["sport#{i}"])
      # create_slots(court[:id],club_id)
    end



    redirect_to '/'
    # return redirect_to url_for(:controller => :courts, :action => :create, :param => :court_params)

    # redirect_to create_court_path(court_params)
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

  # def create_slots(id,club_id)
  #   club = Club.find(club_id)
  #   from = club.open
  #   to = club.close
  #
  #
  #
  # end

  def club_params
    params.require(:club).permit(:name, :full_street_address, :gym, :restaurant, :pool, :open, :close )
  end

  def court_params
    params.permit!
  end

  def find_club
    @club = Club.find_by(id: params[:id])
  end

  def club_not_found
    render json: {error: "club not found"}, status: 404
  end

  def date_to_number(date)
    split = date.strftime("%H:%M").split(':')
    result = split[0].to_i*60 + split[1].to_i
  end

  def string_to_number(string)
    split = string.split(':')
    result = split[0].to_i*60 + split[1].to_i
  end


end
