const Global = {
  DSDASDSAD  : []
}



function Notification(state = Global, action) {
  switch (action.type) {
    case "TTT":{
      const data = action.data;
      state = {
          DSDASDSAD : [
            ...state.DSDASDSAD, data
          ]
        }

        break;

    }

  }
  return state;
}


export default Notification;
