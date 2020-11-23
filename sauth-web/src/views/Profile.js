import React, { useState } from 'react'
import Nav from '../components/Nav'
import axiosInstance from '../axios'

export default function Profile() {
    const [name, setName] = useState('')
    const [avatar, setAvatar] = useState()
    const [bio, setBio] = useState('')

    const handleNameChange = e => setName(e.target.value)
    const handleAvatarChange = e => setAvatar(e.target.file)
    const handleBioChange = e => setBio(e.target.value)

    const formData = Object.freeze({
        full_name: name,
        avatar: avatar,
        bio: bio
    })

    const onSave = (e) => {
        e.preventDefault()
        axiosInstance.put('/profiles/', formData)
          .then(res => {
              if (res.status !== 200 || res.status !== 201) {
                  alert('Error')
              }
          })
          .then(res => console.log(res.data))
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