# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# User.create!(name: 'Alex Casasayas',email: 'carloscastilloibanez@gmail.com', password: '123456789', password_confirmation: '123456789')
# User.create!(name: 'Carlos Castillo',email: 'carloscastillo@gmail.com', password: '123456', password_confirmation: '123456')
#
# polo = Club.create!(name: 'Real Club de Polo de Barcelona', ubication: 'Av/ Doctor Marañón', open: 480, close: 1439)
# polo.courts.create(court_name: "Pista Central", sport: "Tenis")
# polo.courts.create(court_name: "Pista 1", sport: "Padel")
# polo.courts.create(court_name: "Pista 2", sport: "Padel")
#
# barcino = Club.create!(name: 'Real Club Barcino', ubication: 'Carrer Bertran', open: 510, close: 1439)
# barcino.courts.create(court_name: "Pista 1", sport: "Tenis")
# barcino.courts.create(court_name: "Pista 2", sport: "Padel")
# barcino.courts.create(court_name: "Pista 1", sport: "Padel")

club1 = Club.create!(
  name: 'Club de tenis Badalona',
  full_street_address: 'Carrer de Joan d Austria 08915 Badalona',
  open: 700,
  close: 1200,
  id_place: 'ChIJ7Tf2RKG7pBIR3wBIiL88sMA'
  )

club1.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/tenis_badalona1.jpeg'))
club1.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/tenis_badalona1.jpeg'))
club1.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/tenis_badalona2.jpeg'))
club1.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/tenis_badalona3.jpg'))

club1.courts.create!(court_name: "Pista Padel", sport: "Padel")
club1.courts.create!(court_name: "Pista Tenis", sport: "Tenis")
club1.courts.create!(court_name: "Pista Futbol", sport: "Futbol")

club2 = Club.create!(
  name: 'Real Club de Polo de Barcelona',
  full_street_address: 'Avenida Doctor Marañon 19-31 08028 Barcelona',
  open: 480,
  close: 1200,
  id_place: 'ChIJSanc1VeYpBIR_l7GhZlA57A'
  )

club2.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/polo_barcelona1.jpg'))
club2.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/polo_barcelona2.jpg'))
club2.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/polo_barcelona3.jpeg'))

club2.courts.create!(court_name: "Central", sport: "Padel")
club2.courts.create!(court_name: "Endesa", sport: "Padel")
club2.courts.create!(court_name: "Pista Alex", sport: "Futbol")
club2.courts.create!(court_name: "Pista Nadal", sport: "Tenis")


club3 = Club.create!(
  name: 'Indoor Padel Barcelona',
  full_street_address: 'Calle Venezuela 78-80 08019 Barcelona',
  open: 480,
  close: 1200,
  id_place: 'ChIJP7JWSk-jpBIRNUgktVcEFVI'
  )
club3.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/indoor_barcelona1.jpg'))

club3.courts.create!(court_name: "Pista 1", sport: "Padel")
club3.courts.create!(court_name: "Pista 2", sport: "Padel")
club3.courts.create!(court_name: "Pista Futbol", sport: "Futbol")

club4 = Club.create!(
  name: 'Valldaura Sport',
  full_street_address: 'Plaza Karl Max 08033 Barcelona',
  open: 480,
  close: 1200,
  id_place: 'ChIJTRdpM0C9pBIReY1prUOOuRk'
  )
club4.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/valldaura1.jpg'))
club4.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/valldaura2.jpg'))
club4.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/valldaura3.jpg'))

club4.courts.create!(court_name: "Pista F7", sport: "Futbol")
club4.courts.create!(court_name: "Pista principal", sport: "Padel")

club5 = Club.create!(
  name: 'CEM Olimpia',
  full_street_address: 'Calle Perú 215 08020 Barcelona',
  open: 480,
  close: 1200,
  id_place: 'ChIJwSpSVTajpBIRlHyx9QzkDKQ'
  )
club5.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/cem_olimpia1.jpg'))
club5.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/cem_olimpia2.jpg'))

club5.courts.create!(court_name: "Central", sport: "Padel")
club5.courts.create!(court_name: "Pista 1", sport: "Padel")
club5.courts.create!(court_name: "Me gusta el Furbol!", sport: "Futbol")


club6 = Club.create!(
  name: 'CEM Noca Icària',
  full_street_address: 'Avenida Icària 167 08005 Barcelona',
  open: 480,
  close: 1200
  )

club6.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/nova_icaria1.jpg'))
club6.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/nova_icaria2.jpg'))
club6.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/nova_icaria3.jpg'))

club6.courts.create!(court_name: "Pista Padel", sport: "Padel")
club6.courts.create!(court_name: "Pista Futbol", sport: "Futbol")


club7 = Club.create!(
  name: 'Golf Barcelona Pitch & Putt',
  full_street_address: 'Calle Andreu Nin Barcelona',
  open: 480,
  close: 1200
  )
club7.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/golf_drago1.jpg'))
club7.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/golf_drago2.jpg'))
club7.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/golf_drago3.jpg'))

club7.courts.create!(court_name: "Pitch & Putt 1", sport: "Golf")
club7.courts.create!(court_name: "Pitch & Putt 2", sport: "Golf")

club8 = Club.create!(
  name: 'Can Cuyàs Club',
  full_street_address: 'Calle Granollers 61 08980 Sant Feliu de Llobregat',
  open: 480,
  close: 1200
  )
club8.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/can_cuyas2.jpeg'))
club8.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/can_cuyas3.jpg'))

club8.courts.create!(court_name: "Pitch & Putt 1", sport: "Golf")
club8.courts.create!(court_name: "Pitch & Putt 2", sport: "Golf")
club8.courts.create!(court_name: "Central", sport: "Padel")
club8.courts.create!(court_name: "Aquiarius", sport: "Padel")

club9 = Club.create!(
  name: 'Fair Play Padel',
  full_street_address: 'Calle Foc 2-6 08038 Barcelona',
  open: 480,
  close: 1200
  )
club9.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/fairplay1.png'))
club9.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/fairplay2.jpg'))
club9.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/fairplay3.jpg'))

club9.courts.create!(court_name: "Pista 1", sport: "Padel")
club9.courts.create!(court_name: "Pista 2", sport: "Padel")

club10 = Club.create!(
  name: 'Augusta Padel St. Cugat',
  full_street_address: 'Av. de la Guinardera, 11 -13, 08174 Sant Cugat del Vallès, Barcelona',
  open: 480,
  close: 1200
  )
club10.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/augusta1.jpeg'))
club10.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/augusta2.jpeg'))
club10.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/augusta3.jpg'))

club10.courts.create!(court_name: "Pista 1", sport: "Padel")
club10.courts.create!(court_name: "Pista 2", sport: "Padel")

club11 = Club.create!(
  name: "STAR'S PADEL",
  full_street_address: '08940, Passatge dels Alps, 2, 08940 Cornellà de Llobregat, Barcelona',
  open: 480,
  close: 1200
  )
club11.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/stars1.jpg'))
club11.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/stars2.jpg'))
club11.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/stars3.jpg'))

club11.courts.create!(court_name: "Pista 1", sport: "Padel")
club11.courts.create!(court_name: "Pista 2", sport: "Padel")
