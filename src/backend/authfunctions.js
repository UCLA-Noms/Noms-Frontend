import {
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  signInWithCredential,
} from "firebase/auth"
import { auth } from "./FirebaseConfig"

const login = async (idToken, accessToken) => {
  let user
  try {
    // const result = await signInWithPopup(auth);
    // const credential = GoogleAuthProvider.credentialFromResult(result);
    // const token = credential.accessToken;
    // user = result.user;
    // return user; //temporarily return user data
    console.log(`token = ${accessToken}`)
    const credential = GoogleAuthProvider.credential(null, accessToken)
    try {
      await signInWithCredential(auth, credential)
    } catch (err) {
      console.err(err)
    }
    console.log("logged in on firebase")
  } catch (error) {
    console.error(error)
    // const errorCode = error.code;
    // const errorMessage = error.message;
    // const email = error.customData.email;
    // const credential = GoogleAuthProvider.credentialFromError(error);
  }
}

const logout = async () => {
  try {
    await signOut(auth)
  } catch (err) {
    console.error(err)
  }
}

export { login, logout }
