import {API_KEY,AUTH_DOMAIN,PROJECT_ID,STORAGE_BUCKET,MESS_SENDERID,APP_ID} from "@env"

const firebaseConfig = {
    apiKey: `${API_KEY}`,
    authDomain: `${AUTH_DOMAIN}`,
    projectId: `${PROJECT_ID}`,
    storageBucket: `${STORAGE_BUCKET}`,
    messagingSenderId: `${MESS_SENDERID}`,
    appId: `${APP_ID}`
  };
  
  

 export default firebaseConfig