import React from 'react'
import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils'

const Signin = () => {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup() // gives the access token
        console.log(response); 
    }

  return (
    <div>
      <button onClick={logGoogleUser}>Sign in with Google</button>
    </div>
  )
}

export default Signin
