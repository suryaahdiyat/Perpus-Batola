import React from 'react'
import { Link } from 'react-router-dom'

export default function ShowTable({pembaca, sendData, handleDelete, buku}) {
    
  return (
    <>
        <div className='h-full w-full flex flex-col items-center p-1'>
            <div className='flex justify-between items-center w-full p-4 pt-5'>
                <h1 className='text-2xl font-bold text-white capitalize'>List {sendData.data_info}</h1>
                {handleDelete && 
                    <Link to={`/admin/list-${sendData.data_info}/tambah`} className='flex bg-emerald-600 px-5 py-3 justify-center items-center gap-2 rounded-lg text-white hover:bg-emerald-800'>
                        <div className='text-2xl bg-white text-emerald-600 h-8 w-8 rounded-full flex justify-center items-center'>+</div>
                        <h1 className='font-semibold'>Tambah {sendData.data_info} Baru</h1>
                    </Link>
                }
            </div>
            <table className='w-full bg-slate-700 text-white text-start rounded-md overflow-hidden'>
                <thead className=''>
                    <tr className='border-b-4 border-slate-950 bg-sky-700'>
                        <th className='px-6 py-3 text-md text-start'>No</th>
                        <th className='px-6 py-3 text-md text-start' >{sendData.data_info_2}</th>
                        <th className='px-6 py-3 text-md text-start' >{sendData.data_info_3}</th>
                        {sendData.data_info_4 && <th className='px-6 py-3 text-md text-start' >{sendData.data_info_4}</th> }
                        {handleDelete && <th className='px-6 py-3 text-md text-center' >Aksi</th> }
                    </tr>
                </thead>
                <tbody>
                    {pembaca && pembaca.map && pembaca.map((s, index) => {
                        index++
                        return (
                            <tr className='border-b-4 border-slate-950' key={index}>
                                <td className='px-6 py-2 text-sm'>{index}</td>
                                <td className='px-6 py-2 text-sm'>{s.name}</td>
                                <td className='px-6 py-2 text-sm'>{s.email}</td>
                                <td className='px-6 py-2 text-sm flex justify-center items-center gap-4'>
                                    <Link to={`/admin/list-${sendData.data_info}/ubah/${s.id_user}`}>
                                        <div className='text-sky-600 hover:text-sky-800'>Ubah</div>
                                    </Link>
                                    <div onClick={() => handleDelete(s.id_user)} className='text-red-400 hover:cursor-pointer hover:text-red-600'>Hapus</div>
                                </td>
                            </tr>
                        )
                    })}
                    {buku && buku.map && buku.map((s, index) => {
                        index++
                        return (
                            <tr className='border-b-4 border-slate-950' key={index}>
                                <td className='px-6 py-2 text-sm'>{index}</td>
                                <td className='px-6 py-2 text-sm'>{s.judul}</td>
                                <td className='px-6 py-2 text-sm'>{s.tahun}</td>
                                <td className='px-6 py-2 text-sm'>{s.pengarang}</td>
                                {handleDelete && 
                                    <td className='px-6 py-2 text-sm flex justify-center items-center gap-4'>
                                        <Link to={`/admin/list-${sendData.data_info}/ubah/${s.id_buku}`}>
                                            <div className='text-sky-600 hover:text-sky-800'>Ubah</div>
                                        </Link>
                                        <div onClick={() => handleDelete(s.id_buku)} className='text-red-400 hover:cursor-pointer hover:text-red-600'>Hapus</div>
                                    </td>
                                }
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    </>
  )
}
