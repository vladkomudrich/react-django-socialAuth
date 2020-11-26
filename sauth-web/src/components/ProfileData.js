import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

export default function ProfileData(props) {

    return (
        <>
            <h3>Your profile:</h3>
            <div class="card mb-3" style={{maxWidth: 540 + 'px', marginTop: 15 + 'px'}}>
                <div class="row no-gutters">
                <div class="col-md-4">
                    <img src={props.profile.avatar} class="card-img" alt="..." />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                    <h5 class="card-title">{props.profile.full_name}</h5>
                    <p class="card-text"><i>[{props.profile.username}]</i></p>
                    <p class="card-text">{props.profile.bio}</p>
                    <p class="card-text"><small>Date joined: {props.profile.date}</small></p>
                    </div>
                </div>
                </div>
            </div>
            <Link to="/profile" className="btn btn-primary">Edit</Link>
        </>
    )
}