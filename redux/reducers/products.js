const initialState = {
    products: [],
    isuser: false
  }
  
  export const products = (state = initialState, action) => {
      switch (action.type) {
          case 'ListOfProducts':

              return {
               
                products  : action.products ,
                
              }
          

      default:
              return state;
      }
  }