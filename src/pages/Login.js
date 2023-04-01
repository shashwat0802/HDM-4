import React from 'react'

export default function Login() {
  return (
    <div>
        <h1>Login</h1>
        <button onClick={() => {
            window.location.pathname ='/dashboard'
        }}>Go to Dashboard</button>
    </div>
  )
}
