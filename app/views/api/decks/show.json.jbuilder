json.deck do
  json.extract! @deck, :title, :creator_id
end

# do the block below if you want an array of ids for cards

# json.cards do
# end