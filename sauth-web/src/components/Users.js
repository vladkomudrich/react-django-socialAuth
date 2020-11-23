import React, {useState, useEffect} from 'react'
import axiosInstance from '../axios'

export default function Users() {
    const [users, setUsers] = useState([])

    useEffect(async () => {
        await axiosInstance.get('/profiles/')
          .then(res => {
              setUsers(res.data)
          })
    }, [])

    return (
        <div className="user-component">
            {users.map(profile => (
            <div key={profile.id} class="container">
            <div class="card col-12" style={{maxWidth: 540 + 'px', marginTop: 20 + 'px'}}>
                <div class="row no-gutters">
                    <div class="col-md-4">
                    <img src={profile.avatar} class="card-img" alt="..." />
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">[{profile.username}] {profile.full_name}</h5>
                        <p class="card-text">{profile.snippet}</p>
                        <p class="card-text"><small class="text-muted">Date joined: {profile.date}</small></p>
                    </div>
                    </div>
                </div>
            </div>
            </div>
        ))}
        </div>
    )
}