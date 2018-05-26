json.deck do
  json.partial! 'api/decks/deck', deck: @deck
end

json.cards do
  @deck.cards.each do |card|
    json.set! card.id do
      json.extract! card, :id, :front, :back, :deck_id
    end
  end
end

json.confs do
  @deck.cards.each do |card|
    json.set! card.id do
      if !card.confs.empty?
        confs = card.confs
          .where(tester_id: current_user.id)
          .order("created_at desc")
          .limit(1)[0]
        # was giving an error for when there weren't any confs for this user - id doesn't exist for nil
        if !!confs
          json.extract! confs, :id, :score, :card_id, :tester_id
        end
      end
    end
  end
end
