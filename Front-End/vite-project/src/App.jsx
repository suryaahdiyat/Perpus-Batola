import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import '../dist/output.css'
import Login from './Pages/Login'
import AdminDashboard from './Pages/Admin/AdminDashboard'
import AdminListBuku from './Pages/Admin/AdminListBuku'
import AdminAddListBuku from './Pages/Admin/AdminAddListBuku'
import AdminUpdateListBuku from './Pages/Admin/AdminUpdateListBuku'
import AdminListPembaca from './Pages/Admin/AdminListPembaca'
import AdminAddListPembaca from './Pages/Admin/AdminAddListPembaca'
import AdminUpdateListPembaca from './Pages/Admin/AdminUpdateListPembaca'
import AdminUbahProfil from './Pages/Admin/AdminUbahProfil'
import UserListBuku from './Pages/User/UserListBuku'
import UserUbahProfil from './Pages/User/UserUbahProfil'

function App() {

  return (
    <div className=''>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/admin/dashboard' element={<AdminDashboard />} />
          <Route path='/admin/list-pembaca' element={<AdminListPembaca />} />
          <Route path='/admin/list-pembaca/tambah' element={<AdminAddListPembaca />} />
          <Route path='/admin/list-pembaca/ubah/:id' element={<AdminUpdateListPembaca />} />
          <Route path='/admin/list-buku' element={<AdminListBuku />} />
          <Route path='/admin/list-buku/tambah' element={<AdminAddListBuku />} />
          <Route path='/admin/list-buku/ubah/:id' element={<AdminUpdateListBuku />} />
          <Route path='/admin/ubah-profil' element={<AdminUbahProfil />} />
          <Route path='/user/:id/list-buku' element={<UserListBuku />} />
          <Route path='/user/:id/ubah-profil' element={<UserUbahProfil />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
