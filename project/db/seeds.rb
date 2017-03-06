# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create!(name: 'Alex Casasayas',email: 'alexcasasayas@gmail.com', password: '123456789', password_confirmation: '123456789')
User.create!(name: 'Carlos Castillo',email: 'carloscastillo@gmail.com', password: '123456', password_confirmation: '123456')

polo = Club.create!(name: 'Real Club de Polo de Barcelona', ubication: 'Av/ Doctor Marañón', open: 480, close: 1439)
polo.courts.create(court_name: "Pista Central", sport: "Tenis")
polo.courts.create(court_name: "Pista 1", sport: "Padel")
polo.courts.create(court_name: "Pista 2", sport: "Padel")

barcino = Club.create!(name: 'Real Club Barcino', ubication: 'Carrer Bertran', open: 510, close: 1439)
barcino.courts.create(court_name: "Pista 1", sport: "Tenis")
barcino.courts.create(court_name: "Pista 2", sport: "Padel")
barcino.courts.create(court_name: "Pista 1", sport: "Padel")
