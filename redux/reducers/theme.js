const initialState = {
    theme: 'light'
  }
  
  export const theme = (state = initialState, action) => {
      switch (action.type) {
          case 'lightTheme':
              return {
                  theme: 'light' ,
                  
              }
  
              case 'darkTheme' : 
              return {
                  theme: 'dark'
              }
         
          default:
              return state;
      }
  }