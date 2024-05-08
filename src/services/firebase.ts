import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCPAbz1sUQRccB8Is5EsT7OttpNFieEfz4',
  authDomain: 'autenticacao-onboarding.firebaseapp.com',
  projectId: 'autenticacao-onboarding',
  storageBucket: 'autenticacao-onboarding',
  messagingSenderId: '396002602997',
  appId: '1:396002602997:web:92ee1cb4f41bcca9853abc',
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()

export { app, auth }
