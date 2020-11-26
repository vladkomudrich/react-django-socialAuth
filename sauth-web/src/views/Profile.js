import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Nav from '../components/Nav'
import axiosInstance from '../axios'

export default function Profile() {
    const history = useHistory()

    const [name, setName] = useState('')
    const [avatar, setAvatar] = useState()
    const [bio, setBio] = useState('')

    const handleNameChange = e => setName(e.target.value)
    const handleAvatarChange = e => setAvatar(e.target.files[0])
    const handleBioChange = e => setBio(e.target.value)

    const onSave = (e) => {

        e.preventDefault()

        let formData = new FormData()
        formData.append('full_name', name)
        formData.append('avatar', avatar, avatar.name)
        formData.append('bio', bio)

        const user = JSON.parse(localStorage.getItem('user'))

        axiosInstance.get(`/profiles/${user.username}/`)
          .then(axiosInstance.put(`/profiles/${user.username}/`, formData))
          .catch(function (error) {
              if (error.response.status === 404) {
                axiosInstance.post(`/profiles/`, formData) 
              } 
          })

        history.push('/')
        setTimeout(() => window.location.reload(), 1000)
    }

    return (
        <div className="profile-view">
            <Nav name="Profile" />
            <br />
            <div className="container">
            <form>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Full Name</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Ivanov Ivan" maxlength="200" onChange={handleNameChange} />
                </div>
                <div class="form-group">
                    <label for="exampleFormControlFile1">Avatar</label>
                    <input type="file" class="form-control-file" id="exampleFormControlFile1" onChange={handleAvatarChange} />
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">About yourself</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="I'm 20 years old and I live in ..." maxlength="600" rows="3" onChange={handleBioChange}></textarea>
                </div>
                <button type="submit" class="btn btn-primary" onClick={onSave}>Save</button>
            </form>
            </div>
        </div>
    )
}