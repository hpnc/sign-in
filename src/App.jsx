import { Route, Routes } from 'react-router-dom'
import Signin from './components/Signin'
import { route } from './utils/constants'


function App() {
  return (
    <>
      <Routes>
        <Route path={route.HOME} element={<Signin />} />
        <Route path={route.SIGN_IN} element={<Signin />} />
      </Routes>
    </>
  )
}

export default App
