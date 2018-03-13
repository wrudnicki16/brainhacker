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
  { title: "Web Design and People", creator_id: 2 },

])

cards = Card.create([
  { front: "Function of forgetting", back: "e^-x", deck_id: 1 },
  { front: "What do memory champions do differently?", back: "Memory Palace - spatial areas of the brain light up when they are remembering things", deck_id: 1 },
  { front: "An example of episodic memory would be?", back: "Remembering a party on your 6th birthday", deck_id: 1 },
  { front: "Persistence functionality", back: "Memories which contain a strong emotional response will likely be useful in the future", deck_id: 1},
  { front: "This is the kind of info that can be given/ framed in a question after an event which alters the person's recollection of the event.", back: "misinformation effect", deck_id: 1},
  { front: "Whats the point of memory?", back: "supports making inferences which are adaptive in life circumstances and preserve metal energy.", deck_id: 1},
  { front: "Inability to recognize faces" back: "Prosopagnosia", deck_id: 1},

##### sleep ######
  { front: "What is the average half-life of caffeine?", back: "5-7 hours", deck_id: 2 },
  { front: "What is a likely explanation for why we evolved to have different sleep patterns?", back: "To protect one another throughout the night", deck_id: 2 },
  { front: "How much approximately can your suprachiasmatic nucleus adjust every day to a new time zone?", back: "One hour", deck_id: 2 },
  { front: "How long are people typically awake for, given sunlight cues?", back: "15-16 hours", deck_id: 2 },
  { front: "What constitutes the advent of natural waking, besides sunlight?", back: "Reduced adenosine and circadian rhythm", deck_id: 2 },
  { front: "Does circadian rhythm get affected by a lack of sleep?", back: "No, it continues to follow a stable pattern, which gives a second wind in the morning, followed by a crushing urge to sleep around midday.", deck_id: 2 },
  { front: "What 2 questions indicate whether you need higher quantity/quality of sleep?",
    back: "1. After waking in the morning, could you fall back to sleep at ten or eleven am? \n
    2. Can you function optimally without caffeine before noon?", deck_id: 2 },
  { front: "When does one's core body temperature reach its peak in the day? Lowest point?", back: "Around 6pm for the peak, 3am for the lowest core temperature levels", deck_id: 2 },
  { front: "How does muscle tension change from NREM to REM sleep?",
    back: "In NREM sleep some of the body retains its wakeful toneness, but mere seconds
    before the dreaming phase begins, and as long as it lasts, you are completely paralyzed; your body goes limp.", deck_id: 2 },
  { front: "What brain function does the thalamus block during NREM sleep?", back: "The transfer of perceptual signals (sound, sight, touch, etc).", deck_id: 2 },
  { front: "What signals get let through during REM sleep?", back: "Signals of emotions, motivations, and memories", deck_id: 2 },
  { front: "How do pigeons sleep in groups while remaining vigilant?", back: "The birds will first line up in a row. All birds will then go to sleep besides those at the far left and right ends
    of the row, who will have opposing sides of the brain turned off, leaving the corresponding left and right eyes open. ", deck_id: 2 },
  ##### Web Design and Psychology ######
  { front: "Why is eyetracking data unreliable?", back: "Inattentional blindness", deck_id: 2 },
  { front: "What colors should you avoid putting together?", back: "Blue and red or green and red", deck_id: 2 },
  { front: "What is a good color scheme for avoiding color blindness issues, besides shades of grey?", back: "Shades of yellow, orange, and tan work well with both kinds of color deficiencies", deck_id: 2 },
  { front: "How do w raed ltters taht aer all jmumlbed up? How does this explain how we read in general?", back: "We use previous knowledge to anticipate what will come next.", deck_id: 2 },
  { front: "Why are faces good on a page?", back: "People recognize and react to faces faster and with more emotion than anything else on the page", deck_id: 2 },
  { front: "What makes a button desirable to press, as opposed to one that does not?", back: "Use of shading", deck_id: 2 },

  ##### Pair programming #####

])
