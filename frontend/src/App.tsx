import { Route, Routes } from 'react-router-dom'
import SplashPage from './pages/SplashPage'

/** A placeholder so the Depot's catalog can launch this app. Both routes show the splash until
 * there's something real to build. */
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/about" element={<SplashPage />} />
        <Route path="*" element={<SplashPage />} />
      </Routes>
    </>
  )
}
