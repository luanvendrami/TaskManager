import { initializeApp } from "firebase/app";
import { getFirestore }from '@firebase/firestore'

const firebaseConfig = {
 // Configuração base com as credenciais.
};

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app)