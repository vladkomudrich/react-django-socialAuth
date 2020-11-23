import React from 'react'
import { Link } from 'react-router-dom'

export default function ProfileData() {
    return (
        <>
            <h3>Your profile:</h3>
            <div class="card mb-3" style={{maxWidth: 540 + 'px', marginTop: 15 + 'px'}}>
                <div class="row no-gutters">
                <div class="col-md-4">
                    <img src="..." class="card-img" alt="..." />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                </div>
            </div>
            <Link to="/profile" className="btn btn-primary">Edit</Link>
        </>
    )
}