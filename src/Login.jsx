import React, { useState } from 'react'
import './Login.css'
import { useDispatch } from 'react-redux'
import { auth } from './firebase'
import {login} from './features/counter/userSlice'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [profilePic, setprofilePic] = useState('')
  const dispatch = useDispatch()

  const loginToApp = (e) => {
    e.preventDefault()

    auth.signInWithEmailAndPassword(email, password)
    .then(userAuth => {
      dispatch(login({
        email: userAuth.user.email,
        uid: userAuth.uid,
        displayName: userAuth.user.displayName,
        profileUrl: userAuth.user.photoURL,
      }))
    })
    .catch((error) => alert(error))
  }

  const register = () => {
    if(!name) {
      return alert('Please enter a full name')
    }

    auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
      userAuth.user.updateProfile({
        displayName: name,
        photoURL: profilePic,
      })
      .then(() => {
        dispatch(login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: name,
          photoURL: profilePic,
        }))
      })

    }).catch((error) => alert(error))
  }
  return (
    <div className='login'>
     <div className="login__main">
      <h1>Thunder</h1><img src="data:image/jpeg;base64,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" 
      alt="" />
      </div> 

      <form>
        <input value={name} onChange={ e => setName(e.target.value)} placeholder='Full name (required if registering)' type="text" />

        <input value={profilePic} onChange={e=> setprofilePic(e.target.value)} placeholder='Profile pic URL (optional)' type="text" />

        <input value={email} onChange={
          e => setEmail(e.target.value)
        } placeholder='Email' type="email" />

        <input value={password} onChange={e => setPassword(e.target.value)} placeholder='Password' type="password" />

        <button type='submit' onClick={loginToApp}
        >Sign In</button>

        <p className='login__p'>Not a member?{" "}
          <span className='login__register' onClick={register}>Register Now</span>
        </p>
      </form>
    </div>
  )
}

export default Login