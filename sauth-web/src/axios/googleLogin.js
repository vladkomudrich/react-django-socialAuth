import axios from 'axios'

const googleLogin = (accesstoken) => {
    axios.post('http://localhost:8000/auth/convert-token/', {
        token: accesstoken,
        backend: 'google-oauth2',
        grant_type: 'convert_token',
        client_id: 'your_key',
        client_secret: 'your_key',
    })
    .then(res => {
        localStorage.setItem('access_token', res.data.access_token)
        localStorage.setItem('refresh_token', res.data.refresh_token)
    })
}

export default googleLogin