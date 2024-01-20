import axios from 'axios'
import React, { useRef, useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import FormUpdate from '../components/FormUpdate'

export default function AdminUpdateListPembaca() {
  const namaRef = useRef("")
  const emailRef = useRef("")
  const [profil, setProfil] = useState({
    nama : "",
    email : ""
  })

  const navigate = useNavigate()
  const location = useLocation()

  const idPembaca = location.pathname.split("/")[4]


  useEffect(()=>{
    const fetchingData = async() =>{
      const res = await axios.get("http://localhost:3030/users/"+idPembaca)
      const newProfil = {
        nama : res.data[0].name,
        email : res.data[0].email
      }
      setProfil(newProfil)
    }
    fetchingData()
  }, [])

  const handleClick = async(e) => {
    e.preventDefault()
    const pembacaBaru = {
      "name": namaRef.current.value,
      "email": emailRef.current.value
    }
    try {
      await axios.put("http://localhost:3030/users/"+idPembaca, pembacaBaru)
      navigate("/admin/list-pembaca")
    }catch(err){
      console.log(err)
    }
  }
  return (
    <div className='h-screen flex w-full'>
      <div className='w-1/4 bg-slate-900 flex'>
        <div className='w-full overflow-hidden flex flex-col justify-between'>
          <div>
            <div className='bg-sky-700 h-28 p-3 flex items-center gap-4'>
              <div className='ml-3 w-14 h-14  flex items-center justify-center text-2xl text-white font-bold'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-13 h-13">
    <path d="M11.584 2.376a.75.75 0 0 1 .832 0l9 6a.75.75 0 1 1-.832 1.248L12 3.901 3.416 9.624a.75.75 0 0 1-.832-1.248l9-6Z" />
    <path fillRule="evenodd" d="M20.25 10.332v9.918H21a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5h.75v-9.918a.75.75 0 0 1 .634-.74A49.109 49.109 0 0 1 12 9c2.59 0 5.134.202 7.616.592a.75.75 0 0 1 .634.74Zm-7.5 2.418a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Zm3-.75a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0v-6.75a.75.75 0 0 1 .75-.75ZM9 12.75a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Z" clipRule="evenodd" />
    <path d="M12 7.875a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" />
  </svg>
  </div>
              <div>
                <h1 className='font-semibold text-2xl tracking-wider text-white'>Perpustakaan</h1>
                <h3 className='text-white'>Barito Kuala</h3>
              </div>
            </div>
            <hr className='mx-2 my-4 ' />
            <Link to={'/admin/dashboard'} className='hover:bg-slate-800 p-5 flex items-center gap-4 border-b-2 border-slate-600'>
              <div className='w-10 h-10 bg-zinc-600 flex items-center justify-center rounded-full text-xl text-white'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M11.644 1.59a.75.75 0 0 1 .712 0l9.75 5.25a.75.75 0 0 1 0 1.32l-9.75 5.25a.75.75 0 0 1-.712 0l-9.75-5.25a.75.75 0 0 1 0-1.32l9.75-5.25Z" />
    <path d="m3.265 10.602 7.668 4.129a2.25 2.25 0 0 0 2.134 0l7.668-4.13 1.37.739a.75.75 0 0 1 0 1.32l-9.75 5.25a.75.75 0 0 1-.71 0l-9.75-5.25a.75.75 0 0 1 0-1.32l1.37-.738Z" />
    <path d="m10.933 19.231-7.668-4.13-1.37.739a.75.75 0 0 0 0 1.32l9.75 5.25c.221.12.489.12.71 0l9.75-5.25a.75.75 0 0 0 0-1.32l-1.37-.738-7.668 4.13a2.25 2.25 0 0 1-2.134-.001Z" />
  </svg>
  </div>
              <div>
                <h1 className='font-bold tracking-wider text-white'>Dashboard</h1>
              </div>
            </Link>
            <Link to={'/admin/list-pembaca'} className='border-b-2 border-slate-600 bg-slate-800 p-5 flex items-center gap-4'>
              <div className='w-10 h-10 bg-zinc-600  flex items-center justify-center rounded-full text-xl text-white'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
  </svg>
  </div>
              <div>
                <h1 className='font-bold text-white tracking-wider'>List Pembaca</h1>
              </div>
            </ Link>
            <Link to={'/admin/list-buku'} className='border-b-2 border-slate-600 hover:bg-slate-800  p-5 flex items-center gap-4'>
              <div className='w-10 h-10 bg-zinc-600  flex items-center justify-center rounded-full text-xl text-white'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
  </svg>
  </div>
              <div>
                <h1 className='font-bold text-white tracking-wider'>List Buku</h1>
              </div>
            </Link>
            <Link to={'/admin/ubah-profil'} className='border-b-2 border-slate-600 hover:bg-slate-800  p-5 flex items-center gap-4'>
              <div className='w-10 h-10 bg-zinc-600  flex items-center justify-center rounded-full text-xl text-white'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
  </svg>

              </div>
              <div>
                <h1 className='font-bold text-white tracking-wider'>Ubah Profil</h1>
              </div>
            </ Link>
          </div>
          <Link to={'/'} className='h-20 p-3  flex justify-center items-center gap-5 text-white'>
            <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
</svg>
</div>
            <h1 className='text-xl font-bold tracking-wider'>Logout</h1>
          </Link>
        </div>
      </div>
      <div className='w-3/4 bg-slate-950 text-white p-10 flex-col'>    
        <FormUpdate profil={profil} namaRef={namaRef} emailRef={emailRef} handleClick={handleClick} />
      </div>
    </div>
  )
}
