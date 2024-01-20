import React from 'react'
import { Link } from 'react-router-dom'


export default function FormUpdate({profil, namaRef, emailRef, handleClick,  buku, judulRef, tahunRef, pengarangRef}) {
  return (
    <>
    {
        profil && 
        <div>
            <h1 className='mb-5 text-5xl font-bold tracking-wider'>Ubah Profil</h1>
            <h1 className='mb-5 text-3xl font-bold tracking-wider'>Data Lama</h1>
            <h1 className='mb-5 text-lg font-bold '>Nama     : {profil.nama}</h1>
            <h1 className='mb-5 text-lg font-bold '>Email    : {profil.email}</h1>
            <h1 className='mb-5 text-3xl font-bold tracking-wider'>Data Baru</h1>
            <form className=''>
                <div className='flex gap-3 flex-col w-4/12 mb-3'>
                    <label htmlFor="nama" className='text-lg font-semibold'>Nama</label>
                    <input ref={namaRef} defaultValue={profil.nama} type="text" id='nama' placeholder='Silahkan masukan nama baru' className='rounded-md text-center border-none focus:outline-none px-5 py-3 text-white font-medium bg-slate-700 '/>
                </div>
                <div className='flex gap-3 flex-col w-4/12 mb-3'>
                    <label htmlFor="email" className='text-lg font-semibold'>Email</label>
                    <input ref={emailRef} defaultValue={profil.email} type="email" id='email' placeholder='Silahkan masukan email baru' className='rounded-md text-center border-none focus:outline-none px-5 py-3 text-white font-medium bg-slate-700'/>
                </div>
                <div className='flex gap-2'>
                    <Link to={"/admin/list-pembaca"}><button className='px-3 py-2 bg-red-500 rounded-lg hover:bg-red-700'>Batal</button></Link>
                    <button onClick={handleClick} className='px-3 py-2 bg-emerald-600 rounded-lg hover:bg-emerald-800'>Simpan</button>
                </div>
            </form>    
        </div>
    }
    {
        buku &&
        <div>
            <h1 className='mb-5 text-5xl font-bold tracking-wider'>Ubah Data Buku</h1>
            <h1 className='mb-5 text-3xl font-bold tracking-wider'>Data Lama</h1>
            <h1 className='mb-5 text-lg font-bold '>Nama     : {buku.judul}</h1>
            <h1 className='mb-5 text-lg font-bold '>Tahun    : {buku.tahun}</h1>
            <h1 className='mb-5 text-lg font-bold '>Pengarang: {buku.pengarang}</h1>
            <h1 className='mb-5 text-3xl font-bold tracking-wider'>Data Baru</h1>
            <form className=''>
                <div className='flex gap-3 flex-col w-4/12 mb-3'>
                    <label htmlFor="judul" className='text-lg font-semibold'>Judul</label>
                    <input ref={judulRef} defaultValue={buku.judul} type="text" id='judul' placeholder='Silahkan masukan judul' className='rounded-md text-center border-none focus:outline-none px-5 py-3 text-white font-medium bg-slate-700 '/>
                </div>
                <div className='flex gap-3 flex-col w-4/12 mb-3'>
                    <label htmlFor="tahun" className='text-lg font-semibold'>Tahun</label>
                    <input ref={tahunRef} defaultValue={buku.tahun} type="number" id='tahun' placeholder='Silahkan masukan tahun' className='rounded-md text-center border-none focus:outline-none px-5 py-3 text-white font-medium bg-slate-700'/>
                </div>
                <div className='flex gap-3 flex-col w-4/12 mb-3'>
                    <label htmlFor="pengarang" className='text-lg font-semibold'>Pengarang</label>
                    <input ref={pengarangRef} defaultValue={buku.pengarang} type="text" id='pengarang' placeholder='Silahkan masukan pengarang' className='rounded-md text-center border-none focus:outline-none px-5 py-3 text-white font-medium bg-slate-700'/>
                </div>
                <div className='flex gap-2'>
                    <Link to={"/admin/list-buku"}><button className='px-3 py-2 bg-red-500 rounded-lg hover:bg-red-700'>Batal</button></Link>
                    <button className='px-3 py-2 bg-emerald-600 rounded-lg hover:bg-emerald-800' onClick={handleClick}>Simpan</button>
                </div>
            </form>
        </div>
    }
    </>
  )
}
