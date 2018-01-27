const Global = {
  
}



export const reducer = (state = Global, action) => {
  switch (action.type) {
    case "CATEGORY--POST":{
      const data  = action.data;

      return{
        ...state,Category_Post_Notification: data
      }
        break;
    }
    case "REMOVE--CATEGORY":{
      const index  = action.index;

      return{
        ...state,
        Category_Post_Notification: [
         ...state.Category_Post_Notification.slice(0, index),
         ...state.Category_Post_Notification.slice(index + 1)
       ]
      }
        break;
    }








  }
  return state;
}
