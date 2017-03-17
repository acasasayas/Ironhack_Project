# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:

club1 = Club.create!(
  name: 'Club de tenis Badalona',
  full_street_address: 'Carrer de Joan d Austria 08915 Badalona',
  open: 480,
  close: 1440,
  id_place: 'ChIJ7Tf2RKG7pBIR3wBIiL88sMA',
  gym: true,
  pool: true,
  restaurant: false
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
  close: 1440,
  id_place: 'ChIJSanc1VeYpBIR_l7GhZlA57A',
  gym: true,
  pool: true,
  restaurant: false
  )

club2.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/polo_barcelona1.jpg'))
club2.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/polo_barcelona2.jpg'))
club2.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/polo_barcelona3.jpeg'))

club2.courts.create!(court_name: "Central", sport: "Padel")
club2.courts.create!(court_name: "Endesa", sport: "Padel")
club2.courts.create!(court_name: "Pista Alex", sport: "Futbol")
club2.courts.create!(court_name: "Pista Basket", sport: "Basket")



club3 = Club.create!(
  name: 'Indoor Padel Barcelona',
  full_street_address: 'Calle Venezuela 78-80 08019 Barcelona',
  open: 480,
  close: 1440,
  id_place: 'ChIJP7JWSk-jpBIRNUgktVcEFVI',
  gym: true,
  pool: true,
  restaurant: false
  )
club3.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/indoor_barcelona1.jpg'))

club3.courts.create!(court_name: "Pista 1", sport: "Padel")
club3.courts.create!(court_name: "Pista 2", sport: "Padel")
club3.courts.create!(court_name: "Pista Futbol", sport: "Futbol")
club3.courts.create!(court_name: "Pista Golf", sport: "Golf")
club3.courts.create!(court_name: "Pista Basket", sport: "Basket")


club4 = Club.create!(
  name: 'Valldaura Sport',
  full_street_address: 'Plaza Karl Max 08033 Barcelona',
  open: 480,
  close: 1440,
  id_place: 'ChIJTRdpM0C9pBIReY1prUOOuRk',
  gym: true,
  pool: true,
  restaurant: false
  )
club4.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/valldaura1.jpg'))
club4.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/valldaura2.jpg'))
club4.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/valldaura3.jpg'))

club4.courts.create!(court_name: "Pista F7", sport: "Futbol")
club4.courts.create!(court_name: "Pista principal", sport: "Padel")
club4.courts.create!(court_name: "Pista Basket", sport: "Basket")
club4.courts.create!(court_name: "Pista Golf", sport: "Golf")


club5 = Club.create!(
  name: 'CEM Olimpia',
  full_street_address: 'Calle Perú 215 08020 Barcelona',
  open: 480,
  close: 1440,
  id_place: 'ChIJwSpSVTajpBIRlHyx9QzkDKQ',
  gym: true,
  pool: true,
  restaurant: false
  )
club5.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/cem_olimpia1.jpg'))
club5.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/cem_olimpia2.jpg'))

club5.courts.create!(court_name: "Central", sport: "Padel")
club5.courts.create!(court_name: "Pista 1", sport: "Padel")
club5.courts.create!(court_name: "Me gusta el Furbol!", sport: "Futbol")
club5.courts.create!(court_name: "Pista Golf", sport: "Golf")
club5.courts.create!(court_name: "Pista Basket", sport: "Basket")



club6 = Club.create!(
  name: 'CEM Noca Icària',
  full_street_address: 'Avenida Icària 167 08005 Barcelona',
  open: 480,
  close: 1440,
  gym: true,
  pool: false,
  restaurant: false
  )

club6.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/nova_icaria1.jpg'))
club6.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/nova_icaria2.jpg'))
club6.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/nova_icaria3.jpg'))

club6.courts.create!(court_name: "Pista Padel", sport: "Padel")
club6.courts.create!(court_name: "Pista Futbol", sport: "Futbol")
club6.courts.create!(court_name: "Pista Basket", sport: "Basket")
club6.courts.create!(court_name: "Pista Golf", sport: "Golf")



club7 = Club.create!(
  name: 'Golf Barcelona Pitch & Putt',
  full_street_address: 'Calle Andreu Nin Barcelona',
  open: 480,
  close: 1440,
  gym: true,
  pool: true,
  restaurant: true
  )
club7.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/golf_drago1.jpg'))
club7.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/golf_drago2.jpg'))
club7.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/golf_drago3.jpg'))

club7.courts.create!(court_name: "Pitch & Putt 1", sport: "Golf")
club7.courts.create!(court_name: "Pitch & Putt 2", sport: "Golf")
club7.courts.create!(court_name: "Pista Padel", sport: "Padel")
club7.courts.create!(court_name: "Pista Basket", sport: "Basket")
club7.courts.create!(court_name: "Pista Futbol", sport: "Futbol")



club8 = Club.create!(
  name: 'Can Cuyàs Club',
  full_street_address: 'Calle Granollers 61 08980 Sant Feliu de Llobregat',
  open: 480,
  close: 1440,
  gym: false,
  pool: true,
  restaurant: false
  )
club8.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/can_cuyas2.jpeg'))
club8.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/can_cuyas3.jpg'))

club8.courts.create!(court_name: "Pitch & Putt 1", sport: "Golf")
club8.courts.create!(court_name: "Pitch & Putt 2", sport: "Golf")
club8.courts.create!(court_name: "Central", sport: "Basket")
club8.courts.create!(court_name: "Aquiarius", sport: "Padel")
club8.courts.create!(court_name: "Pista Futbol", sport: "Futbol")




club9 = Club.create!(
  name: 'Fair Play Padel',
  full_street_address: 'Calle Foc 2-6 08038 Barcelona',
  open: 480,
  close: 1440,
  gym: true,
  pool: false,
  restaurant: false
  )
club9.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/fairplay1.png'))
club9.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/fairplay2.jpg'))
club9.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/fairplay3.jpg'))

club9.courts.create!(court_name: "Pista 1", sport: "Padel")
club9.courts.create!(court_name: "Pista 2", sport: "Golf")
club9.courts.create!(court_name: "Pista Basket", sport: "Basket")
club9.courts.create!(court_name: "Pista Futbol", sport: "Futbol")


club10 = Club.create!(
  name: 'Augusta Padel St. Cugat',
  full_street_address: 'Av. de la Guinardera, 11 -13, 08174 Sant Cugat del Vallès, Barcelona',
  open: 480,
  close: 1440,
  gym: true,
  pool: false,
  restaurant: false
  )
club10.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/augusta1.jpeg'))
club10.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/augusta2.jpeg'))
club10.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/augusta3.jpg'))

club10.courts.create!(court_name: "Pista 1", sport: "Padel")
club10.courts.create!(court_name: "Pista 2", sport: "Golf")
club10.courts.create!(court_name: "Pista Futbol", sport: "Futbol")
club10.courts.create!(court_name: "Pista Basket", sport: "Basket")


club11 = Club.create!(
  name: "STAR'S PADEL",
  full_street_address: '08940, Passatge dels Alps, 2, 08940 Cornellà de Llobregat, Barcelona',
  open: 480,
  close: 1440,
  gym: true,
  pool: true,
  restaurant: true
  )
club11.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/stars1.jpg'))
club11.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/stars2.jpg'))
club11.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/stars3.jpg'))

club11.courts.create!(court_name: "Pista 1", sport: "Padel")
club11.courts.create!(court_name: "Pista 2", sport: "Padel")
club11.courts.create!(court_name: "Pista 2", sport: "Golf")
club11.courts.create!(court_name: "Pista Futbol", sport: "Futbol")
club11.courts.create!(court_name: "Pista Basket", sport: "Basket")

club12 = Club.create!(
  name: "Bonasport Club Esportiu",
  full_street_address: 'Calle Vista Bella, 11, 08022 Barcelona',
  open: 480,
  close: 1440,
  gym: true,
  pool: false,
  restaurant: true
  )
club12.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/stars1.jpg'))
club12.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/stars2.jpg'))
club11.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/stars3.jpg'))

club12.courts.create!(court_name: "Pista 1", sport: "Padel")
club12.courts.create!(court_name: "Pista 2", sport: "Padel")
club12.courts.create!(court_name: "Pista 2", sport: "Golf")
club12.courts.create!(court_name: "Pista Futbol", sport: "Futbol")
club12.courts.create!(court_name: "Pista Basket", sport: "Basket")

club13 = Club.create!(
  name: "Club Deportivo Hispano Francés",
  full_street_address: 'Carrer de Jorge Manrique, 15-19, 08035 Barcelona',
  open: 480,
  close: 1440,
  gym: true,
  pool: true,
  restaurant: true
  )
club13.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/stars1.jpg'))
club13.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/stars2.jpg'))
club13.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/stars3.jpg'))

club13.courts.create!(court_name: "Pista 1", sport: "Padel")
club13.courts.create!(court_name: "Pista 2", sport: "Padel")
club13.courts.create!(court_name: "Pista 2", sport: "Golf")
club13.courts.create!(court_name: "Pista Futbol", sport: "Futbol")
club13.courts.create!(court_name: "Pista Basket", sport: "Basket")

club14 = Club.create!(
  name: "David Lloyd Barcelona",
  full_street_address: 'Avda. Diagonal 673 - 685, 08028 Barcelona',
  open: 480,
  close: 1440,
  gym: true,
  pool: true,
  restaurant: true
  )
club14.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/stars1.jpg'))
club14.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/stars2.jpg'))
club14.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/stars3.jpg'))

club14.courts.create!(court_name: "Pista 1", sport: "Padel")
club14.courts.create!(court_name: "Pista 2", sport: "Padel")
club14.courts.create!(court_name: "Pista 2", sport: "Golf")
club14.courts.create!(court_name: "Pista Futbol", sport: "Futbol")
club14.courts.create!(court_name: "Pista Basket", sport: "Basket")

club15 = Club.create!(
  name: "CN Montjuïc",
  full_street_address: 'Segura, s/n, 08038 Barcelona',
  open: 480,
  close: 1440,
  gym: false,
  pool: true,
  restaurant: false
  )
club15.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/stars1.jpg'))
club15.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/stars2.jpg'))
club15.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/stars3.jpg'))

club15.courts.create!(court_name: "Pista 1", sport: "Padel")
club15.courts.create!(court_name: "Pista 2", sport: "Padel")
club15.courts.create!(court_name: "Pista 2", sport: "Golf")
club15.courts.create!(court_name: "Pista Futbol", sport: "Futbol")
club15.courts.create!(court_name: "Pista Basket", sport: "Basket")

club16 = Club.create!(
  name: "FISIC SPORT CLUB",
  full_street_address: 'Carrer del Bruc, 24, 08010 Barcelona',
  open: 480,
  close: 1440,
  gym: true,
  pool: false,
  restaurant: false
  )
club16.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/stars1.jpg'))
club16.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/stars2.jpg'))
club16.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/stars3.jpg'))

club16.courts.create!(court_name: "Pista 1", sport: "Padel")
club16.courts.create!(court_name: "Pista 2", sport: "Padel")
club16.courts.create!(court_name: "Pista 2", sport: "Golf")
club16.courts.create!(court_name: "Pista Futbol", sport: "Futbol")
club16.courts.create!(court_name: "Pista Basket", sport: "Basket")

# madrid

club17 = Club.create!(
  name: 'CLUB DEPORTIVO METROPOLITANO',
  full_street_address: 'Calle Aravaca, 7, 28040 Madrid',
  open: 480,
  close: 1440,
  id_place: 'ChIJ7Tf2RKG7pBIR3wBIiL88sMA',
  gym: true,
  pool: true,
  restaurant: false
  )

club17.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/tenis_badalona1.jpeg'))
club17.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/tenis_badalona1.jpeg'))
club17.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/tenis_badalona2.jpeg'))
club17.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/tenis_badalona3.jpg'))

club17.courts.create!(court_name: "Pista Padel", sport: "Padel")
club17.courts.create!(court_name: "Pista Tenis", sport: "Tenis")
club17.courts.create!(court_name: "Pista Futbol", sport: "Futbol")


club18 = Club.create!(
  name: 'Centro Deportivo Militar La Dehesa',
  full_street_address: 'Ctra. de Extremadura, km 8.800, 28024 Madrid',
  open: 480,
  close: 1440,
  id_place: 'ChIJSanc1VeYpBIR_l7GhZlA57A',
  gym: true,
  pool: true,
  restaurant: false
  )

club18.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/polo_barcelona1.jpg'))
club18.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/polo_barcelona2.jpg'))
club18.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/polo_barcelona3.jpeg'))

club18.courts.create!(court_name: "Central", sport: "Padel")
club18.courts.create!(court_name: "Endesa", sport: "Padel")
club18.courts.create!(court_name: "Pista Alex", sport: "Futbol")
club18.courts.create!(court_name: "Pista Basket", sport: "Basket")



club19 = Club.create!(
  name: 'Club de Tenis Chamartin',
  full_street_address: 'Calle Federico Salmón, 4, 28016 Madrid',
  open: 480,
  close: 1440,
  id_place: 'ChIJP7JWSk-jpBIRNUgktVcEFVI',
  gym: true,
  pool: true,
  restaurant: false
  )
club19.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/indoor_barcelona1.jpg'))

club19.courts.create!(court_name: "Pista 1", sport: "Padel")
club19.courts.create!(court_name: "Pista 2", sport: "Padel")
club19.courts.create!(court_name: "Pista Futbol", sport: "Futbol")
club19.courts.create!(court_name: "Pista Golf", sport: "Golf")
club19.courts.create!(court_name: "Pista Basket", sport: "Basket")


club20 = Club.create!(
  name: 'Club Deportivo Arquitectura Rugby',
  full_street_address: 'Calle Arquitecto López Otero, s/n, 28040 Madrid',
  open: 480,
  close: 1440,
  id_place: 'ChIJTRdpM0C9pBIReY1prUOOuRk',
  gym: true,
  pool: true,
  restaurant: false
  )
club20.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/valldaura1.jpg'))
club20.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/valldaura2.jpg'))
club20.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/valldaura3.jpg'))

club20.courts.create!(court_name: "Pista F7", sport: "Futbol")
club20.courts.create!(court_name: "Pista principal", sport: "Padel")
club20.courts.create!(court_name: "Pista Basket", sport: "Basket")
club20.courts.create!(court_name: "Pista Golf", sport: "Golf")


club21 = Club.create!(
  name: 'Club de Natación Madrid Moscardó',
  full_street_address: 'Calle de Andrés Arteaga, 5, 28026 Madrid',
  open: 480,
  close: 1440,
  id_place: 'ChIJwSpSVTajpBIRlHyx9QzkDKQ',
  gym: true,
  pool: true,
  restaurant: false
  )
club21.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/cem_olimpia1.jpg'))
club21.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/cem_olimpia2.jpg'))

club21.courts.create!(court_name: "Central", sport: "Padel")
club21.courts.create!(court_name: "Pista 1", sport: "Padel")
club21.courts.create!(court_name: "Me gusta el Furbol!", sport: "Futbol")
club21.courts.create!(court_name: "Pista Golf", sport: "Golf")
club21.courts.create!(court_name: "Pista Basket", sport: "Basket")



club22 = Club.create!(
  name: 'Club Deportivo Esquerdo',
  full_street_address: 'Calle del Dr. Esquerdo, 70, 28007 Madrid',
  open: 480,
  close: 1440,
  gym: true,
  pool: false,
  restaurant: false
  )

club22.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/nova_icaria1.jpg'))
club22.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/nova_icaria2.jpg'))
club22.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/nova_icaria3.jpg'))

club22.courts.create!(court_name: "Pista Padel", sport: "Padel")
club22.courts.create!(court_name: "Pista Futbol", sport: "Futbol")
club22.courts.create!(court_name: "Pista Basket", sport: "Basket")
club22.courts.create!(court_name: "Pista Golf", sport: "Golf")

club23 = Club.create!(
  name: "Metropolitan Palacio Santa Ana",
  full_street_address: 'Plaza del Ángel, 6, 28012 Madrid',
  open: 480,
  close: 1440,
  gym: true,
  pool: false,
  restaurant: false
  )
club23.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/stars1.jpg'))
club23.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/stars2.jpg'))
club23.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/stars3.jpg'))

club23.courts.create!(court_name: "Pista 1", sport: "Padel")
club23.courts.create!(court_name: "Pista 2", sport: "Padel")
club23.courts.create!(court_name: "Pista 2", sport: "Golf")
club23.courts.create!(court_name: "Pista Futbol", sport: "Futbol")
club23.courts.create!(court_name: "Pista Basket", sport: "Basket")



club24 = Club.create!(
  name: 'Club de Esgrima Cardenal Cisneros',
  full_street_address: 'Calle de los Reyes, 4, 28015 Madrid',
  open: 480,
  close: 1440,
  gym: true,
  pool: true,
  restaurant: true
  )
club24.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/golf_drago1.jpg'))
club24.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/golf_drago2.jpg'))
club24.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/golf_drago3.jpg'))

club24.courts.create!(court_name: "Pitch & Putt 1", sport: "Golf")
club24.courts.create!(court_name: "Pitch & Putt 2", sport: "Golf")
club24.courts.create!(court_name: "Pista Padel", sport: "Padel")
club24.courts.create!(court_name: "Pista Basket", sport: "Basket")
club24.courts.create!(court_name: "Pista Futbol", sport: "Futbol")



club25 = Club.create!(
  name: 'Mandarina Sports Club Deportivo',
  full_street_address: 'Calle Ramón de Santillán, 6, 28016 Madrid',
  open: 480,
  close: 1440,
  gym: false,
  pool: true,
  restaurant: false
  )
club25.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/can_cuyas2.jpeg'))
club25.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/can_cuyas3.jpg'))

club25.courts.create!(court_name: "Pitch & Putt 1", sport: "Golf")
club25.courts.create!(court_name: "Pitch & Putt 2", sport: "Golf")
club25.courts.create!(court_name: "Central", sport: "Basket")
club25.courts.create!(court_name: "Aquiarius", sport: "Padel")
club25.courts.create!(court_name: "Pista Futbol", sport: "Futbol")




club26 = Club.create!(
  name: 'Federación de Tenis de Madrid Canal de Isabel II',
  full_street_address: 'Av. de Filipinas, 54, 28003 Madrid',
  open: 480,
  close: 1440,
  gym: true,
  pool: false,
  restaurant: false
  )
club26.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/fairplay1.png'))
club26.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/fairplay2.jpg'))
club26.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/fairplay3.jpg'))

club26.courts.create!(court_name: "Pista 1", sport: "Padel")
club26.courts.create!(court_name: "Pista 2", sport: "Golf")
club26.courts.create!(court_name: "Pista Basket", sport: "Basket")
club26.courts.create!(court_name: "Pista Futbol", sport: "Futbol")


club27 = Club.create!(
  name: 'MADRID TITANES CLUB DE RUGBY',
  full_street_address: 'Plaza de Carlos Cambronero, 4, 28004 Madrid',
  open: 480,
  close: 1440,
  gym: true,
  pool: false,
  restaurant: false
  )
club27.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/augusta1.jpeg'))
club27.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/augusta2.jpeg'))
club27.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/augusta3.jpg'))

club27.courts.create!(court_name: "Pista 1", sport: "Padel")
club27.courts.create!(court_name: "Pista 2", sport: "Golf")
club27.courts.create!(court_name: "Pista Futbol", sport: "Futbol")
club27.courts.create!(court_name: "Pista Basket", sport: "Basket")


club28 = Club.create!(
  name: "Club Los Cedros",
  full_street_address: 'Calle de Ricardo Ortiz, 27, 28017 Madrid',
  open: 480,
  close: 1440,
  gym: true,
  pool: true,
  restaurant: true
  )
club28.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/stars1.jpg'))
club28.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/stars2.jpg'))
club28.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/stars3.jpg'))

club28.courts.create!(court_name: "Pista 1", sport: "Padel")
club28.courts.create!(court_name: "Pista 2", sport: "Padel")
club28.courts.create!(court_name: "Pista 2", sport: "Golf")
club28.courts.create!(court_name: "Pista Futbol", sport: "Futbol")
club28.courts.create!(court_name: "Pista Basket", sport: "Basket")

club29 = Club.create!(
  name: "Real Canoe Natación Club",
  full_street_address: 'Calle del Pez Volador, 30, 28007 Madrid',
  open: 480,
  close: 1440,
  gym: true,
  pool: false,
  restaurant: true
  )
club29.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/stars1.jpg'))
club29.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/stars2.jpg'))
club29.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/stars3.jpg'))

club29.courts.create!(court_name: "Pista 1", sport: "Padel")
club29.courts.create!(court_name: "Pista 2", sport: "Padel")
club29.courts.create!(court_name: "Pista 2", sport: "Golf")
club29.courts.create!(court_name: "Pista Futbol", sport: "Futbol")
club29.courts.create!(court_name: "Pista Basket", sport: "Basket")

club30 = Club.create!(
  name: "Rayo Vallecano de Madrid S.A.D.",
  full_street_address: 'Calle del Payaso Fofó, 5, 28018 Madrid',
  open: 480,
  close: 1440,
  gym: true,
  pool: true,
  restaurant: true
  )
club30.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/stars1.jpg'))
club30.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/stars2.jpg'))
club30.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/stars3.jpg'))

club30.courts.create!(court_name: "Pista 1", sport: "Padel")
club30.courts.create!(court_name: "Pista 2", sport: "Padel")
club30.courts.create!(court_name: "Pista 2", sport: "Golf")
club30.courts.create!(court_name: "Pista Futbol", sport: "Futbol")
club30.courts.create!(court_name: "Pista Basket", sport: "Basket")

club31 = Club.create!(
  name: "Centro Deportivo Municipal Fuente del Berro",
  full_street_address: 'Calle de Elvira, 36, 28028 Madrid',
  open: 480,
  close: 1440,
  gym: true,
  pool: true,
  restaurant: true
  )
club31.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/stars1.jpg'))
club31.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/stars2.jpg'))
club31.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/stars3.jpg'))

club31.courts.create!(court_name: "Pista 1", sport: "Padel")
club31.courts.create!(court_name: "Pista 2", sport: "Padel")
club31.courts.create!(court_name: "Pista 2", sport: "Golf")
club31.courts.create!(court_name: "Pista Futbol", sport: "Futbol")
club31.courts.create!(court_name: "Pista Basket", sport: "Basket")

club32 = Club.create!(
  name: "Club Baloncesto Moratalaz",
  full_street_address: 'Calle Hacienda de Pavones, 223, 28930 Madrid',
  open: 480,
  close: 1440,
  gym: false,
  pool: true,
  restaurant: false
  )
club32.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/stars1.jpg'))
club32.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/stars2.jpg'))
club32.club_images.create!(image: File.open(Rails.root + 'app/assets/images/clubs/stars3.jpg'))

club32.courts.create!(court_name: "Pista 1", sport: "Padel")
club32.courts.create!(court_name: "Pista 2", sport: "Padel")
club32.courts.create!(court_name: "Pista 2", sport: "Golf")
club32.courts.create!(court_name: "Pista Futbol", sport: "Futbol")
club32.courts.create!(court_name: "Pista Basket", sport: "Basket")
