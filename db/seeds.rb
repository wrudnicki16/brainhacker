# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = User.create([{username: "Demo", password: "password"}]);

decks = Deck.create([
  { title: "Psychology", creator_id: 1 },
]);

cards = Card.create([
  { front: "Function of forgetting", back: "e^-x", deck_id: 1 }
  ])
