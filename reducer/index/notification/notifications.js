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
      return{
        ...state,
          Comments: data
      }
        break;
    }
    case "ANSWER":{
      const data = action.data;
      return{
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
      let like     = action.like;
      const id     = action.index;
      let _index   = '';
      state.Comments.map((text,index)=>{
        if (text.id == id) {
          _index = index;
        }
      });
      let total    = state.Comments[_index].like_comment;
      total+=1;
      return{
        ...state,
          Comments:[
            ...state.Comments.slice(0,_index),
            {...state.Comments[_index],like_comment:total},
            ...state.Comments.slice(_index + 1)
          ]

      }

        break;
    }
    case "UNLIKE--COMMENT":{
      let unlike   = action.unlike;
      const id     = action.index;
      let _index   = '';
      state.Comments.map((text,index)=>{
        if (text.id == id) {
          _index = index;
        }
      });
      let total    = state.Comments[_index].unlike;
      total+=-1;
      return {
        ...state,
        Comments:[
          ...state.Comments.slice(0,_index),
          {...state.Comments[_index],unlike:total},
          ...state.Comments.slice(_index + 1)
        ]
      }
        break;
    }
    case "TEXTAREA":{
      const id      = action.id;
      const data    = action.value;

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
            {...state.Comments[_index],answer:data,clear_value:false},
            ...state.Comments.slice(_index + 1)
          ]
      }
        break;
    }
    case "ADDING--COMMENTS":{
      let sum                = 0;
      const data             = action.data;
      const author           = action.author;
      const parent_id        = action.id;
      const date             = action.date;
      const last_len_answer  = action.last_len_answer;
      sum                    = last_len_answer;
      sum++;

      if (data != '') {
          const obj  = {
            parent_id    : parent_id,
            description  : data,
            id           : sum,
            like_comment : 0,
            author       : author,
            unlike       : 0,
            dynamic_date : date
          }
          let _index = '';
          state.Comments.map((text,index)=>{
            if (text.id == parent_id) {
              _index = index;
            }
          });


          return{
            ...state,
            Answer:[
              ...state.Answer, obj
            ],
              Comments:[
                ...state.Comments.slice(0,_index),
                {...state.Comments[_index],answer:'',clear_value:true},
                ...state.Comments.slice(_index + 1)
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
