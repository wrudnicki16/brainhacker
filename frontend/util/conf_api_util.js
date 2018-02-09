// export const fetchConf = (cardId) => {
//   return $.ajax({
//     method: "GET",
//     url: `/api/cards/${cardId}/confs`
//   });
// };
//
// export const fetchConf = ()

// WHY DO I EVER NEED TO FETCH A CONF?
// FETCHING CARDS HAD A REASON, FETCH CARD WAS USELESS (until study page?)!
// SAME COULD GO HERE - UNLESS YOU WANT TO COLOR THE FLIP BUTTON WITH THE PREVIOUS SCORE,
// YOU CAN USE DECK ASSOCIATIONS FOR YOUR MASTERY SCORE AND THATS IT.
// YOU CAN SEND THIS INFORMATION THROUGH THE DECK SHOW PAGE.

// THEN DECK SHOW PAGE SHOULD RERENDER EVERY TIME YOU ANSWER A QUESTION
// SO YOU UPDATE THE MASTERY LEVEL APPROPRIATELY.

export const createConf = (cardId) => {
  return $.ajax({
    method: "POST",
    url: `/api/cards/${cardId}/confs`
  });
};
