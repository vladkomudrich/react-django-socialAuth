import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import axiosInstance from '../axios'

import Nav from '../components/Nav'
import Login from '../components/Login'
import Users from '../components/Users'
import ProfileData from '../components/ProfileData'
import CreateButton from '../components/CreateButton'

export default function Home() {
  const [user, setUser] = useState({})

  useEffect(() => {
    axiosInstance.get('/users/current/')
      .then(res => setUser(res.data))
      .catch(e => console.log(e))
  }, {user})
  
  const [profile, setProfile] = useState({})

  useEffect(() => {
    axiosInstance.get('/profiles/' + user.username)
      .then(res => setProfile(res.data))
      .catch(e => console.log(e))
  }, {profile})

  console.log(user)
  console.log(profile)
  
  return (
      <>
        <Nav name="Home" />
        <Login />
        <hr />
        <div class="container">
          {localStorage.getItem('access_token') ? <CreateButton /> : <div></div>}
        </div>
        <hr />
        {localStorage.getItem('access_token') ? <Users /> || 'There are no posts yet... Be the first!' : <div className="container">Log In first to see content...</div>}
      </>
  )
}