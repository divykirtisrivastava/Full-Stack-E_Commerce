import React, { useContext, useEffect, useState } from 'react'
import { BarChart, Wallet, Newspaper, BellRing, Paperclip, Brush, Wrench } from 'lucide-react'
import '../App.css'
import axios from 'axios'
import UserContext from '../context/UserContext'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  let [inp, setInp] = useState('')
  let navigation = useNavigate()
  let [data, setData] = useState([])
  let {auth} = useContext(UserContext)

  useEffect(() => {
    fetchProductData()
  }, [])

  async function fetchProductData() {
    let result = await axios.get('http://localhost:3000/api/getProduct')
    setData(result.data)
  }
  async function puma() {
    let result = await axios.get('http://localhost:3000/api/getProduct')
    let final = result.data.filter((item) => item.productBrand == 'Puma')
    setData(final)
  }

  async function Adidas() {
    let result = await axios.get('http://localhost:3000/api/getProduct')
    let final = result.data.filter((item) => item.productBrand == 'Adidas')
    setData(final)
  }
  async function Zara() {
    let result = await axios.get('http://localhost:3000/api/getProduct')
    let final = result.data.filter((item) => item.productBrand == 'Zara')
    setData(final)
  }

  async function handleSearch() {
    let result = await axios.get(`http://localhost:3000/api/searchProduct/${inp}`)
    setData(result.data)
  }

  async function saveCart(data) {

    if (auth.userId) {
      let result = await axios.post(`http://localhost:3000/api/cartSave/${auth.userId}`, {
        productBrand: data.productBrand,
        productPrice: data.productPrice,
        productType: data.productType,
        productRating: data.productRating
      })

      if (result.data == true) {
        fetchCartData()
        alert("product saved into cart !")
      }
    } else {
      navigation('/clientLogin')
    }

  }


  // cart length
  let { setCount } = useContext(UserContext)

  useEffect(() => {
    fetchCartData()
  }, [auth])

  async function fetchCartData() {
    if(auth.userId){
      let result = await axios.get(`http://localhost:3000/api/getCart/${auth.userId}`)
    setCount(result.data.length)
    }
  }

  // let str = "dsgadfg"
  // console.log(!!str)
  return (
    <>
      <aside className="fixed flex h-screen w-64 flex-col overflow-y-auto border-r bg-black px-5 py-8">

        <div className="mt-6 flex flex-1 flex-col justify-between">
          <nav className="-mx-3 space-y-6 ">
            <div className="space-y-3 ">
              <label className="px-3 text-xs font-semibold uppercase text-white">Search</label>

              <form className="max-w-md mx-auto">
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                  </div>
                  <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Product By Type..." required
                    onChange={(e) => setInp(e.target.value)} />

                </div>
              </form>
              <button className='p-2 bg-gray-200 rounded-[10px] text-xl font-bold hover:bg-gray-400 hover:text-white'
                onClick={handleSearch}
              >Search</button>

            </div>
            <div className="space-y-3 ">
              <label className="px-3 text-xs font-semibold uppercase text-white">Brand</label>

              <button
                onClick={fetchProductData}
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700" >
                <span className="mx-2 text-sm font-medium">All</span>
              </button>

              <button
                onClick={puma}
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700">
                <span className="mx-2 text-sm font-medium">Puma</span>
              </button>

              <button
                onClick={Adidas}
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                href="#"><span className="mx-2 text-sm font-medium">Adidas</span>
              </button>

              <button
                onClick={Zara}
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                href="#">
                <span className="mx-2 text-sm font-medium">Zara</span>
              </button>
            </div>

            {/* $$$$$$$$$$$$$$$$$$$ */}

            <div className="space-y-3 ">
              <label className="px-3 text-xs font-semibold uppercase text-white">Customization</label>
              <a
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                href="#"
              >
                <Brush className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">Themes</span>
              </a>
              <a
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                href="#"
              >
                <Wrench className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">Setting</span>
              </a>
            </div>
          </nav>
        </div>
      </aside>

      {/* card section strat here */}
      <div className='relative  left-[300px] top-[70px] flex justify-evenly w-[1000px] flex-wrap'>
        {data.map((data) => (
          <div className="w-[300px] rounded-md border" key={data.id}>
            <img
              src={`http://localhost:3000/${data.image}`}
              className="h-[200px] w-full rounded-t-md object-cover"
            />
            <div className="p-4">
              <h1 className="inline-flex items-center text-lg font-semibold">Product Brand:- {data.productBrand}</h1>
              <h1 className="inline-flex items-center text-lg font-semibold">Product Type:- {data.productType}</h1>
              <h1 className="inline-flex items-center text-lg font-semibold">Product Price:- {data.productPrice}</h1>
              <h1 className="inline-flex items-center text-lg font-semibold">Product Rating:- {data.productRating}</h1>

              <button
                type="button"
                onClick={() => saveCart(data)}
                className="mt-4 w-full rounded-sm bg-blue-400 px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-red-400/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
