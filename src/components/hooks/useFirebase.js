import { useEffect, useState } from "react"
import app from "../../firebase.init";
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();




const useFirebase = () => {
    const [user, setUser] = useState({});
    const singInWithGoogle = () => {
        console.log('sing in soon')
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user)
                console.log(user);
            })
            .catch(error => {
                console.error('error', error);
            })
    }
    const handleSingOut = () => {
        console.log('google sing Out')
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch(error => {
                console.log('error', error);
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user);
        })
    }, [])



    // return [user,setUser]
    return { user, singInWithGoogle, handleSingOut }
}
export default useFirebase;