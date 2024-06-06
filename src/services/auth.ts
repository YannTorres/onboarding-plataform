import {
  // updatePassword,
  createUserWithEmailAndPassword,
  // sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateCurrentUser,
  // signInWithPopup,
} from 'firebase/auth'

import { auth, googleProvider } from './firebase'

export const doCreateUserWithEmailAndPassword = async (
  email: string,
  password: string,
) => {
  return createUserWithEmailAndPassword(auth, email, password)
}

export const doSignInWithEmailAndPassword = async (
  email: string,
  password: string,
) => {
  return signInWithEmailAndPassword(auth, email, password)
}

export const doSignInWithGoogle = async () => {
  const result = await signInWithPopup(auth, googleProvider)

  return result
}

export const doSignOut = () => {
  return auth.signOut()
}

export const updateProfile = async () => {
  const result = await updateCurrentUser(auth, auth.currentUser)

  return result
}

/* export const doPasswordReset = (email) => {
  return sendPasswordResetEmail(auth, email)
}

export const doPasswordChange = (password) => {
  if (auth.currentUser) {
    return updatePassword(auth.currentUser, password)
  }
} */
