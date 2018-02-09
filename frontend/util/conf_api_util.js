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

// SET THAT TO YOUR STATE, AND THEN JUST UPDATE THE CONFS TO BE THE NEW
// CONFS, WHICH WILL IN TURN CHANGE YOUR MASTERY (how?)
// SO YOU UPDATE THE MASTERY LEVEL APPROPRIATELY.

export const createConf = (payload) => {
  return $.ajax({
    method: "POST",
    url: `/api/confs`,
    data: payload
  });
};


// export const fetchConf = (cardId) => (
//   $.ajax({
//     method: 'GET',
//     url: `/api/cards/${cardId}/`,
//     data: {
//       studyscore: { card_id: cardId }
//     }
//   })
// );
