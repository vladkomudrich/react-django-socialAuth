import React from 'react'
import { Link } from 'react-router-dom'

export default function CreateButton() {
    return (
        <>
        <Link to="/profile" class="btn btn-primary">Create Profile</Link>
        </>
    )
}