const Global = {
  Comments  : [],
  Answer    : []
}



function Notification(state = Global, action) {
  switch (action.type) {
    case "ADD":{
      const data = action.data;
      // state = {
      //     Comments : [
      //       ...state.Comments, data
      //     ]
      //   }
        return {
        ...state,
        Comments: [
      ...state.Comments, data
          ]
      }
      console.log("dsadasdasdasdsa");
        break;

    }
    case "ANSWER":{
      const data = action.data;
      state = {
          ...state,Answer: data
        }
        break;
    }

  }
  return state;
}


export default Notification;
