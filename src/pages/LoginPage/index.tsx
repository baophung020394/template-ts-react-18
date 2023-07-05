import { RootState } from '@stores/index'
import { setUser } from '@stores/userSlice'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const LoginPage: React.FC = () => {
  // const dispatch = useDispatch()
  const user = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = async () => {
    await dispatch(setUser({ name: 'John Doe', age: 30, isAuthenticated: true }))
    navigate('/chat')
  }

  return (
    <div>
      <h2>Login Page</h2>

      {user.name ? <h1>Welcome, {user.name}!</h1> : <h1>Please log in</h1>}
      <button onClick={handleLogin}>Log In</button>
    </div>
  )
}

export default LoginPage
