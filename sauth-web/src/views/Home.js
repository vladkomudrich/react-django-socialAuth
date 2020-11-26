import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import axiosInstance from '../axios'

import Nav from '../components/Nav'
import Login from '../components/Login'
import Users from '../components/Users'
import ProfileData from '../components/ProfileData'
import CreateButton from '../components/CreateButton'

export default function Home() {

  useEffect(() => {
    axiosInstance.get('/users/current/')
      .then(res => localStorage.setItem('user', JSON.stringify(res.data)))
  })
  
  const [profile, setProfile] = useState({})

  useEffect(async () => {
    const user = JSON.parse(localStorage.getItem('user'))
    try {
      const res = await axiosInstance.get('/profiles/' + user.username)
      if (res.status === 404) {
        setProfile('')
      } else {
        setProfile(res.data)
      }
    } catch (error) {}
  }, {})

  const isEmptyObject = (obj) => {
    for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
            return false
        }
    }
    return true
  }

  const CreateOrShow = () => {
    if (isEmptyObject(profile)) {
      return <CreateButton />
    } else {
      return <ProfileData profile={profile} />
    }
  }

  const checkLogin = localStorage.getItem('access_token')
  
  return (
      <>
        <Nav name="Home" />
        <Login />
        <hr />
        <div class="container">
          {checkLogin ? <CreateOrShow /> : ''}
        </div>
        <hr />
        {checkLogin ? <Users /> || 'There are no posts yet... Be the first!' : <div className="container">Log In first to see content...</div>}
      </>
  )
}