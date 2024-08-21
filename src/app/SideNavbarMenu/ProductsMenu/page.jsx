'use client'
import { useState } from 'react'
import ProductData from '../ProductsMenu/ProductMenu'
export default function ProductsMenu(){
    const [showProducts, setShowProducts] = useState( false)
    return(
        <div className=" mt-20 lg:mt-0 p-3 flex gap-3 h-full ">
            <div className=' border-l flex flex-col gap-5  overflow-auto flex-1'>
                {
                    ProductData && ProductData.map((item,index)=>(
                        <div key={index} className='flex items-center justify-between gap-2 leading-5 cursor-pointer  p-3'>
                            <div className='flex items-center gap-5'>
                                <p>{item.icon.iconone}</p>
                                <p className=' font-sans font-light text-lg' onClick={()=>setShowProducts(!showProducts)}>{item.productName}</p>
                            </div>
                            <p>{item.icon.arrow}</p>
                        </div>
                    ))
                }
            </div>
            {
                showProducts ?
                <div className='border-l flex-1  overflow-auto'>
                {
                    ProductData && ProductData.map((item,index)=>(
                        <div key={index}>
                            {
                                item.productDetails && item.productDetails.map((data,index)=>(
                                    <div key={index} className='flex items-center justify-between gap-2 leading-5 cursor-pointer  p-3'>
                                        <div className='flex items-center gap-5'>
                                            <p>{data.icon.iconone}</p>
                                            <p className=' font-sans font-light text-lg'>{data.productone}</p>
                                        </div>
                                        <p>{data.icon.arrow}</p>
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
                </div> :null
            }
            {
                showProducts?
                <div className='border-l flex-1  overflow-auto'>
                {
                    ProductData && ProductData.map((item,index)=>(
                        <div key={index}>
                            {
                            item.productDetails && item.productDetails.map((data,index)=>(
                                        <div key={index} className='p-3 flex flex-col  gap-5'>
                                            {
                                                data.productoneDetails && data.productoneDetails.map((mydata,index)=>(
                                                    <div key={index} className=' font-sans font-light text-lg '>
                                                        <p>{mydata.productdetail_name}</p>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                ))
                            }
                        </div>
                    ))
                }
                </div>:null
            }
        </div>
    )
}