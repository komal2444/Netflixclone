
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signOut } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth/cordova";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyC9NkfwmfV2v_fAOUbpGP4RB2kEijj-XbQ",
  authDomain: "netflix-clone-bf321.firebaseapp.com",
  projectId: "netflix-clone-bf321",
  storageBucket: "netflix-clone-bf321.firebasestorage.app",
  messagingSenderId: "662052612124",
  appId: "1:662052612124:web:56f9f3a0860798e1f4d7d9"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db =getFirestore(app);

const signUp = async (name,email,password)=>{
    try{
        const res = await createUserWithEmailAndPassword(auth,email,
            password);
            const user = res.user;
            await addDoc(collection(db,"user"),{
                uid:user.uid,
                name,
                authProvider:"local",
                email,
            });
    } catch(error){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(""));
        // alert(error);
        


    }
}

const login = async(email,password)=>{
    try{
        signInWithEmailAndPassword(auth,email,password);
    } catch(error){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(""));
    }
}

const logout = ()=>{
    signOut(auth);
}

export {auth,db,login,signUp,logout};