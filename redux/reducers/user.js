const initialState = {
 
    isuser: false
  }
  
  export const user = (state = initialState, action) => {
      switch (action.type) {
              case 'User?':
                return {
                  
                  isuser  : action.isuser ,
                    
                }

      default:
              return state;
      }
  }