json.array!(@decks) do |deck|
  json.extract! deck, :id, :title, :creator_id
end
