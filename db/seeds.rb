# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = User.create([
  {username: "Demo", password: "password"},
  {username: "wyattrud", password: "password"}
])

decks = Deck.create([
  { title: "Psychology", creator_id: 1 },
  { title: "Sleep", creator_id: 2 },

])

cards = Card.create([
  { front: "Function of forgetting", back: "e^-x", deck_id: 1 },

##### sleep ######
  { front: "What is the average half-life of caffeine?", back: "5-7 hours", deck_id: 2 },
  { front: "How long are people typically awake for, given sunlight cues?", back: "15-16 hours", deck_id: 2 },
  { front: "What constitutes the advent of natural waking, besides sunlight?", back: "Reduced adenosine and circadian rhythm", deck_id: 2 },
  { front: "Does circadian rhythm get affected by a lack of sleep?", back: "No, it continues to follow a stable pattern, which gives a second wind in the morning, followed by a crushing urge to sleep around midday.", deck_id: 2 },
  { front: "What 2 questions indicate whether you need higher quantity/quality of sleep?",
    back: "1. After waking in the morning, could you fall back to sleep at ten or eleven am? \n
    2. Can you function optimally without caffeine before noon?", deck_id: 2 },
  { front: "", back: "", deck_id: 2 },
])
