import axios from 'axios'
import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const namaRef = useRef("")
  const emailRef = useRef("")
  const [err, setErr] = useState("")

    const navigateTo = useNavigate()

    const handleClick = async(e) =>{
      e.preventDefault()
      // const userLogin = {
      //   "name":namaRef.current.value,
      //   "email":emailRef.current.value
      // }
      // console.log(userLogin)

      try{
        const res = await axios.get(`http://localhost:3030/user/${namaRef.current.value}/${emailRef.current.value}`)
        // console.log(res.data)
        // console.log(res.data.role_name == "Standar")
        const role = res.data.role_name
        const id = res.data.id_user
        if(role == "Admin") navigateTo("/admin/dashboard")
        if(role == "Standar") navigateTo(`/user/${id}/list-buku`)
        setErr("*Nama atau Email belum terdaftar, jika ingin mendaftar harap hubungi admin")
      }catch(err){
        console.log(err)
      }

      
    }


  return (
    <div className='h-screen bg-slate-800 flex justify-center items-center flex-col gap-5'>
      <form className='w-4/12 bg-slate-950 px-7 py-5 rounded-xl shadow-xl'>
        <h1 className='text-white text-2xl text-center pt-4'>Selamat Datang, kawan!</h1>
        <h1 className='mb-7 text-white text-2xl text-center'>Di <span className='font-bold tracking-wider'>Perpus Batola</span></h1>
        {err && <h1 className='text-red-500 mb-4'>{err}</h1>}
        <div className='flex gap-3 flex-col w-full mb-3'>
          <label htmlFor="nama" className='text-lg font-semibold text-white'>Nama</label>
          <input ref={namaRef} type="text" id='nama' placeholder='Silahkan masukan nama anda..' className='rounded-md text-center border-none focus:outline-none px-5 py-3 text-white font-medium bg-slate-700'/>
        </div>
        <div className='flex gap-3 flex-col w-full mb-3'>
          <label htmlFor="email" className='text-lg font-semibold text-white'>Email</label>
          <input ref={emailRef} type="email" id='email' placeholder='Silahkan masukan email anda..' className='rounded-md text-center border-none focus:outline-none px-5 py-3 text-white font-medium bg-slate-700'/>
        </div>
        <button onClick={handleClick} className='text-white px-3 py-2 bg-sky-700 rounded-lg hover:bg-sky-800 tracking-wider'>Login</button>
      </form>
    </div>
  )
}
