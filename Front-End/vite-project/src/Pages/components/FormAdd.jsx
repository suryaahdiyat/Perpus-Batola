import React from 'react'
import { Link } from 'react-router-dom'

export default function ManualForm({judulRef, tahunRef, pengarangRef, handleClick, namaRef, emailRef}) {

  return (
    <>
    {judulRef && 
      <div>
        <h1 className='mb-5 text-4xl font-bold tracking-wider'>Tambah Buku baru</h1>
        <form className=''>
          <div className='flex gap-3 flex-col w-4/12 mb-3'>
            <label htmlFor="judul" className='text-lg font-semibold'>Judul</label>
            <input ref={judulRef} type="text" id='judul' placeholder='Silahkan masukan judul' className='rounded-md text-center border-none focus:outline-none px-5 py-3 text-white font-medium bg-slate-700 '/>
          </div>
          <div className='flex gap-3 flex-col w-4/12 mb-3'>
            <label htmlFor="tahun" className='text-lg font-semibold'>Tahun</label>
            <input ref={tahunRef} type="text" id='tahun' placeholder='Silahkan masukan tahun' className='rounded-md text-center border-none focus:outline-none px-5 py-3 text-white font-medium bg-slate-700'/>
          </div>
          <div className='flex gap-3 flex-col w-4/12 mb-3'>
            <label htmlFor="pengarang" className='text-lg font-semibold'>Pengarang</label>
            <input ref={pengarangRef} type="text" id='pengarang' placeholder='Silahkan masukan pengarang' className='rounded-md text-center border-none focus:outline-none px-5 py-3 text-white font-medium bg-slate-700'/>
          </div>
          <div className='flex gap-2'>
            <Link to={"/admin/list-buku"}><button className='px-3 py-2 bg-red-500 rounded-lg hover:bg-red-700'>Batal</button></Link>
            <button onClick={handleClick} className='px-3 py-2 bg-emerald-600 rounded-lg hover:bg-emerald-800'>Simpan</button>
          </div>
        </form>
      </div>
    }
    { namaRef && 
      <div>
        <h1 className='mb-5 text-4xl font-bold tracking-wider'>Tambah Pembaca baru</h1>
          <form className=''>
            <div className='flex gap-3 flex-col w-4/12 mb-3'>
              <label htmlFor="nama" className='text-lg font-semibold'>Nama</label>
              <input ref={namaRef} type="text" id='nama' placeholder='Silahkan masukan nama' className='rounded-md text-center border-none focus:outline-none px-5 py-3 text-white font-medium bg-slate-700 '/>
            </div>
            <div className='flex gap-3 flex-col w-4/12 mb-3'>
              <label htmlFor="email" className='text-lg font-semibold'>Email</label>
              <input ref={emailRef} type="email" id='email' placeholder='Silahkan masukan email' className='rounded-md text-center border-none focus:outline-none px-5 py-3 text-white font-medium bg-slate-700'/>
            </div>
            <div className='flex gap-2'>
              <Link to={"/admin/list-pembaca"}><button className='px-3 py-2 bg-red-500 rounded-lg hover:bg-red-700'>Batal</button></Link>
              <button onClick={handleClick} className='px-3 py-2 bg-emerald-600 rounded-lg hover:bg-emerald-800'>Simpan</button>
            </div>
          </form>
      </div>
    }
    </>
  )
}
