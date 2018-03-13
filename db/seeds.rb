# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = User.create([
  {username: "Demo", password: "password"},
  {username: "wyattrud", password: "password"},
  {username: "teacher", password: "password"}
])

decks = Deck.create([
  { title: "Psychology", creator_id: 1 },
  { title: "Sleep", creator_id: 2 },
  { title: "Web Design and People", creator_id: 2 },
  { title: "Brainhacker Quiz", creator_id: 2},
  { title: "Spanish 1", creator_id: 3 },
  { title: "German 1", creator_id: 3},
  { title: "Dota 2 Items", creator_id: 2},
])

cards = Card.create([
  { front: "Function of forgetting", back: "e^-x", deck_id: 1 },
  { front: "What do memory champions do differently?", back: "Memory Palace - spatial areas of the brain light up when they are remembering things", deck_id: 1 },
  { front: "An example of episodic memory would be?", back: "Remembering a party on your 6th birthday", deck_id: 1 },
  { front: "Persistence functionality", back: "Memories which contain a strong emotional response will likely be useful in the future", deck_id: 1},
  { front: "This is the kind of info that can be given/ framed in a question after an event which alters the person's recollection of the event.", back: "misinformation effect", deck_id: 1},
  { front: "Whats the point of memory?", back: "supports making inferences which are adaptive in life circumstances and preserve mental energy.", deck_id: 1},
  { front: "Inability to recognize faces", back: "Prosopagnosia", deck_id: 1},

##### sleep ######
  { front: "What is the average half-life of caffeine?", back: "6-7 hours", deck_id: 2 },
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
  { front: "Why is eyetracking data unreliable?", back: "Inattentional blindness", deck_id: 3 },
  { front: "What colors should you avoid putting together?", back: "Blue and red or green and red", deck_id: 3 },
  { front: "What is a good color scheme for avoiding color blindness issues, besides shades of grey?", back: "Shades of yellow, orange, and tan work well with both kinds of color deficiencies", deck_id: 3 },
  { front: "How do w raed ltters taht aer all jmumlbed up? How does this explain how we read in general?", back: "We use previous knowledge to anticipate what will come next.", deck_id: 3 },
  { front: "Why are faces good on a page?", back: "People recognize and react to faces faster and with more emotion than anything else on the page", deck_id: 3 },
  { front: "What makes a button desirable to press, as opposed to one that does not?", back: "Use of shading", deck_id: 3 },

  ###### Brainhacker Quiz #######
  { front: "Who is the creator of Brainhacker?", back: "Wyatt Rudnicki", deck_id: 4},
  { front: "What is his phone number?", back: "(415) 265-9362", deck_id: 4},
  { front: "How many potstickers can Wyatt eat in 5 minutes?", back: "18", deck_id: 4},
  { front: "What city did Wyatt grow up in?", back: "San Francisco", deck_id: 4},
  { front: "What languages does Wyatt know outside of App Academy?", back: "Python, Express, Node, NoSQL, C, Java, and R", deck_id: 4},
  { front: "What's his favorite sport?", back: "Volleyball, he's really good!", deck_id: 4},

  ##### Spanish #######
  { front: "Está cansado", back: "Is tired", deck_id: 5},
  { front: "Se acuesta", back: "Goes to bed", deck_id: 5},
  { front: "El dormitorio/ el cuarto", back: "The bedroom", deck_id: 5},
  { front: "crackers", back: "galletas", deck_id: 5},
  { front: "window", back: "ventana", deck_id: 5},
  { front: "techo", back: "roof", deck_id: 5},
  { front: "piso", back: "floor", deck_id: 5},
  { front: "lata", back: "can", deck_id: 5},
  { front: "Tiene un sueño/ una pesadilla", back: "Has a dream/ nightmare", deck_id: 5},
  { front: "No puede salir", back: "Can’t leave", deck_id: 5},
  { front: "Se despierta", back: "Wakes up", deck_id: 5},
  { front: "to step down", back: "bajar", deck_id: 5},
  { front: "to cook", back: "cocinar", deck_id: 5},
  { front: "to talk/converse", back: "conversar", deck_id: 5},
  { front: "to cooperate", back: "cooperar", deck_id: 5},
  { front: "to draw", back: "dibujar", deck_id: 5},
  { front: "noon", back: "mediodia", deck_id: 5},
  { front: "never", back: "nunca", deck_id: 5},
  { front: "breakfast", back: "desayuno", deck_id: 5},
  { front: "relatives", back: "los parientes", deck_id: 5},
  { front: "plus (6+6)", back: "mas", deck_id: 5},
  { front: "january", back: "enero", deck_id: 5},
  { front: "To mix", back: "mezclar", deck_id: 5},
  { front: "Grass", back: "pasto", deck_id: 5},
  { front: "Love it!", back: "me encanta", deck_id: 5},
  { front: "Break (I need a)", back: "descanso", deck_id: 5},

  ###### German #######
  { front: "auffällig", back: "noticable", deck_id: 6},
  { front: "behfümt", back: "famous", deck_id: 6},
  { front: "bunt", back: "colorful", deck_id: 6},
  { front: "dünn", back: "thin", deck_id: 6},
  { front: "that's a colleague of mine over there", back: "Das ist ein Kollege von mir da drüben", deck_id: 6},
  { front: "What is your colleague's name", back: "Vie heißt Ihr Kollege?", deck_id: 6},
  { front: "His name's Wyatt Rudnicki", back: "Er heißt Wyatt Rudnicki", deck_id: 6},
  { front: "Is he American? Or German?", back: "Ist er Amerikaner? Oder Deutscher?", deck_id: 6},
  { front: "Where does he live?", back: "Wo wohnt er?", deck_id: 6},

  ###### Dota 2 #######
  { front: "Flying courier", back: "Get this ASAP if your mid is a bottle carrier", deck_id: 7},
  { front: "Headdress", back: "Early game rush if you're getting harassed or you plan on getting mek", deck_id: 7},
  { front: "Arcane boots", back: "Early game rush if you and/or your team is mana starved, or you can't get away with some other mana regen item", deck_id: 7},
  { front: "Tranquil boots", back: "Early game rush if you're getting harassed or you plan on roaming a lot", deck_id: 7},
  { front: "Bracer", back: "Early game rush if you're getting wrecked or already planning on getting drums", deck_id: 7},
  { front: "Mek", back: "Early game prioritize this if: You could use the armor, Teamfights or tower pushing is happening fairly frequently at this point in the game, The enemy team has lots of aoe damage as opposed to single target burst, The enemy isn't heavy ganking or turtling, Can get it EARLY, ideally before 15 minutes it at worst before 20.", deck_id: 7},
  { front: "What is early early game priority?", back: "Flying cour, Wards at 5 minutes for runes, RoB (if you got a ring of protection), Boots, Tp, Wand", deck_id: 7},
  { front: "Medallion", back: "Mid game cheap: You're roaming, You're team could use more burst down damage combinations (think ta, shadow fiend, Alc), You could use mana regen", deck_id: 7},
  { front: "Urn", back: "Mid game cheap: you're roaming, you're a strength support or you are squishy, no one else is getting it, you need to substitute a mek, want to push effectively, all for 875!", deck_id: 7},
  { front: "Which heroes have sizable armor reducing abilities?", back: "Bristle back, Shadow fiend, Venge, Elder Titan, Ta, Naga, Alc, Razor, Slardar, Dazzle", deck_id: 7},
  { front: "Drums", back: "Mid game cheap: You and you're team needs more mobility  , You are (almost) dying in every teamfight,   Enemy has a heavy burster who is reliant on chain burst combos or stuns (think pudge or a fed tusk)  , No one else is building one", deck_id: 7},
  { front: "Force staff", back: "Mid game cheap: The enemy is heavily slow based and slow moving (viper, veno, drow), The enemy doesn't have a lot of blink or fast heroes - specifically QoP, sb or lycan., You and your team needs more mobility, You have a blood seeker or a kotl", deck_id: 7},
  { front: "Euls", back: "Mid game prize: Enemy has fast or invisible gankers (think sb, clinx, shadow blade slark), The enemy has a lot of gankers in general, The enemy has a right click reliant carry (you can target this guy in Teamfights), Make sure to get this one early, Don't get if you're team needs mobility support more than disable, You need a lot of mana, Use to turn around gank attempts or to focus the initiator or the heaviest damage carry in a teamfight.", deck_id: 7},
  { front: "Pipe", back: "Mid game prize: Enemy has heavy aoe Magic damage heroes (think any aoe nuke from an int hero), You can get it before the end of mid game, where pushing tier 3s still is next to impossible without big wipes. Use on tier 3s or big damage like lich ult/Zeus ult/Lina burst...etc", deck_id: 7},
])
