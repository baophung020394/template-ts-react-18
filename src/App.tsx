// App.tsx

import PrivateRoute from '@components/PrivateRoute'
import PublicRoute from '@components/PublicRoute'
import { ChannelChatPage } from '@pages/ChannelChatPage'
import LoginPage from '@pages/LoginPage'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<PublicRoute element={<LoginPage />} />} />
        <Route path='/chat' element={<PrivateRoute element={<ChannelChatPage />} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
