const Global = {
  Notification     : [],
  Subjects         : [],
  Sub_Subjects     : [],
  Title_Subjects   : [],
  Last_Subjects    : [],
  Last_Post_Advice : [],
  Comment_Len      : [],
  Like_Comment     : [],
  Answer_value     : []
}



export const reducer = (state = Global, action) => {
  switch (action.type) {
    case "Notification":{
      const data = action.data;
      state = {
          ...state,Notification: data
        }
        break
    }
    case "REMOVE_Notification":{
      const index  = action.index;
      state = {
        ...state,
        Notification:[
          ...state.Notification.slice(0,index),
          ...state.Notification.slice(index + 1)
        ]

      }
      break;
    }

    // subjects //
    case "TITLE--SUBJECTS":{
      const data = action.data;
      state = {
          ...state,Title_Subjects: data
        }
        break;
    }
    case "SUBJECTS":{
      const data = action.data;
      state = {
          ...state,Subjects: data
        }
        break;
    }
    case "SUB_SUBJECTS":{
      const data = action.data;
      state = {
          ...state,Sub_Subjects: data
        }
        break;
    }
    case "LAST_SUBJECTS":{
      const data = action.data;
      state = {
          ...state,Last_Subjects: data
        }
        break;
    }
    case "LAST_POSTS_ADVICE":{
      const data = action.data;
      state = {
          ...state,Last_Post_Advice: data
        }
        break;
    }

    /// comments //
    case "COMMENTS":{
      const data = action.data;
      state = {
          ...state,Comments: data
        }
        break;
    }
    case "ANSWER":{
      const data = action.data;
      state = {
          ...state,Answer: data
        }
        break;
    }
    case "LEN--COMMENT":{
      const len  = action.len;
        state = {
              ...state,Comment_Len: len
        }
        break;
    }
    case "LIKE--COMMENT":{
      let plus     = '';
      let like     = action.like;
      const index  = action.index;
      let total    = state.Comments[index].like_comment;
      total+=1;
      return{
        ...state,
          Comments:[
            ...state.Comments.slice(0,index),
            {...state.Comments[index],like_comment:total},
            ...state.Comments.slice(index + 1)
          ]

      }

        break;
    }
    case "UNLIKE--COMMENT":{
      let unlike   = action.unlike;
      const index  = action.index;
      let total    = state.Comments[index].unlike;
      total+=-1;
      return {
        ...state,
        Comments:[
          ...state.Comments.slice(0,index),
          {...state.Comments[index],unlike:total},
          ...state.Comments.slice(index + 1)
        ]
      }
        break;
    }
    case "TEXTAREA":{
      const data        = action.data;
      
        state = {
              ...state,Answer_value: data
        }
        break;
    }
    case "ADDING--COMMENTS":{
      let sum         = 0;
      const data      = action.data;
      const author    = action.author;
      const parent_id = action.id;
      const date      = action.date;


      if (data != '') {
          state.Answer.map((text,index)=>{
            sum++;
          });
          const obj  = {
            parent_id    : parent_id,
            description  : data,
            id           : sum + 1,
            like_comment : 0,
            author       : author,
            unlike       : 0,
            dynamic_date : date
          }
          state.Answer_value = "";
          return{
            ...state,
            Answer:[
              ...state.Answer, obj
            ]
          }
      }
        break;
    }
    case "UPDATE--LEN":{
      let plus     = '';
      let counter  = 0
      const id     = action.data;
      let val      = action.counter;
      var _index   = '';
      state.Comments.map((text,index)=>{
        if (text.id == id) {
          _index = index;
        }
      });
      return{
        ...state,
          Comments:[
            ...state.Comments.slice(0,_index),
            {...state.Comments[_index],count:val + 1},
            ...state.Comments.slice(_index + 1)
          ]
      }

        break;
    }
    case "ANSWER--UNLIKE--COMMENT":{
      const id    = action.id;
      var _index   = '';
      state.Answer.map((text,index)=>{
        if (text.id == id) {
          _index = index;
        }
      });
      let total    = state.Answer[_index].unlike;
      total+=-1;
      return{
        ...state,
          Answer:[
            ...state.Answer.slice(0,_index),
            {...state.Answer[_index],unlike:total},
            ...state.Answer.slice(_index + 1)
          ]
      }

        break;
    }

    case "ANSWER--LIKE--COMMENT":{
      const id    = action.id;
      var _index   = '';
      state.Answer.map((text,index)=>{
        if (text.id == id) {
          _index = index;
        }
      })
      let total    = state.Answer[_index].like_comment;
      total+=1;
      return{
        ...state,
          Answer:[
            ...state.Answer.slice(0,_index),
            {...state.Answer[_index],like_comment:total},
            ...state.Answer.slice(_index + 1)
          ]
      }

        break;
    }

  }
  return state;
}
