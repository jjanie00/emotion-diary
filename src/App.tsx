import { Routes, Route } from 'react-router'
import '../index.css'
import Home from './pages/Home'
import New from './pages/New'
import Diary from './pages/Diary'
import NotFound from './pages/NotFound'
import Header from './components/Header'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id?" element={<Diary />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>

  )
}
export default App
