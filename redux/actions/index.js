
import firebase from 'firebase'
import "firebase/firestore";



export function setLight(){
    return {
        type: 'lightTheme'
    }
}

export function setDark(){
    return {
        type: 'darkTheme'
    }
}

export function fetchProducts(){

   
        return ((dispatch,getState) => {
        

            firebase.firestore().collection("products")
           .get()
            .then((result) => {
                let products = result.docs.map(doc => {
                    const data = doc.data();
                    const id = doc.id;
                    
                    return { id, ...data  }
                })
                dispatch({ type: 'ListOfProducts', products })
            })
        })
    
}

export function fetchIsUser(){
    return ((dispatch) => {
        firebase.firestore()
            .collection("users")
            .doc(firebase.auth().currentUser.uid)
            .onSnapshot((snapshot) => {
                if (snapshot.exists) {
                    dispatch({ type: 'User?', isUser: true })
                }
                else {
                   
                }
            })
    })
}