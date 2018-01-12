const Global = {
  Comments  : [],
  Answer    : []
}


function Test(state = Global, action) {
  switch (action.type) {
    case "dsadasdasdasdADD":{
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
      console.log("Mobham");
        break;

    }
    case "ANSWER":{
      console.log("Mahdi");

      const data = action.data;
      state = {
          ...state,Answer: data
        }
        break;
    }

  }
  return state;
}


export default Test;
