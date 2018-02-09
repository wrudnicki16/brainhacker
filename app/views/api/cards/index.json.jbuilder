@cards.each do |card|
  json.set! card.id do
    json.extract! card, :id, :front, :back, :deck_id
  end
end

# get most recent conf for all cards given a current user here?
# json.confs
