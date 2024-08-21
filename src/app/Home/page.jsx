"use client"
import UpdateAddress from '../UpdateAddress/page'
import { IoMdAdd } from "react-icons/io";
import * as React from 'react';
import Modal from '@mui/material/Modal';
import AddNewAddress from "../AddNewAddress/page";
import { useState,useEffect } from "react";
import { MdOutlineEdit } from "react-icons/md";
import { BsTrash } from "react-icons/bs";
export default function Home(){
    const [AddresssData,setAddresssData]=useState([]);
    const [updateName,setUpdateName]=useState(null)
    const [open, setOpen] = React.useState(false);
    const [UpDateForm,setUpdateForm] = React.useState(false);
    console.log(updateName,'updateName');
    const handleOpen = () => setOpen(true);
    const handleClose=()=> setOpen(false);
    const OpenUpdateHandler=(name)=> {
        setUpdateName(name);
        setUpdateForm(true)
    };
    const CloseUpdateHandler=()=>{
        setUpdateForm(false);
        setUpdateName(null);
    };
    useEffect(()=>{
        let  StoredData = JSON.parse(localStorage.getItem('AddresssData'))
        if(StoredData){
            setAddresssData(StoredData);
        }
    },[])
    function DeleteHandler(name){
        let  StoredData = JSON.parse(localStorage.getItem('AddresssData'))
        if(StoredData){
            let newArr = StoredData.filter((item)=>item.name !== name)
            setAddresssData(newArr);
            localStorage.setItem('AddresssData',JSON.stringify(newArr))
        }
    }
    return(
        <div>
            <div className=" h-screen  py-8 px-4 flex flex-col lg:flex-row gap-4 mt-20 lg:mt-0">
                <div className=" flex-none lg:w-1/6 flex  lg:flex-col justify-start items-center gap-7 px-3 py-2 sm:py-8 sm:px-0">
                    <p className="text-[#3E6281] font-semibold text-base">Orders</p>
                    <p className="bg-[#0B96E7] text-[#fff] px-7 py-1.5 rounded-full cursor-pointer">Address</p>
                </div>
                <div className="border-2 border-[#e5f5fc] h-full w-full lg:w-3/4 p-4 flex flex-col gap-3">
                    <div className=" px-2 py-1 flex  justify-between items-center">
                        <p className="text-xl text-[#4A6B88] font-semibold">Address Management</p>
                        <button onClick={handleOpen} className="flex items-center gap-2 px-3 py-2 bg-[#0B96E7] rounded-lg text-white" ><IoMdAdd size={25}/><p className="text-sm hidden lg:block">Add New Address</p></button>
                    </div>
                    <div className="flex-1 flex flex-col sm:flex-row  gap-4 overflow-auto">
                        {
                            AddresssData && AddresssData.map((item,id)=>(
                                <div key={id} className="border-[#E8EEF2] border-2 flex flex-col grow box-border rounded-lg">
                                    <div className="flex justify-between items-center p-4 border-b-2">
                                        <p className="text-lg font-semibold text-[#355067]">{item.radiobtn}</p>
                                        <div className="flex gap-5 ">
                                            <MdOutlineEdit size={25} color="#0B96E7" className="cursor-pointer" onClick={()=>OpenUpdateHandler(item)}/>
                                            <BsTrash  size={25} color="#0B96E7" className="cursor-pointer"  onClick={() => DeleteHandler(item.name)}/>
                                        </div>
                                    </div>
                                    <div className="p-4 flex flex-col ">
                                        <p className="text-lg font-semibold text-[#355067]">{item.name}</p>
                                        <div className="text-[#5B7A94] text-sm font-medium">
                                                <p>{item.addresslineone}</p>
                                                <p>{item.addresslinetwo}</p>
                                                <p>{item.addresslinethree}</p>
                                                <p>{item.landmark}</p>
                                                <p>{item.country.country_name}</p>
                                                <p>{item.state.state_name}</p>
                                                <p>{item.city.city_name}</p>
                                                <p>{item.pincode}</p>
                                                <p>{item.mobile}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div>
                <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                >
                        <div className="bg-[#fff] h-5/6 w-full lg:w-2/5 transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 relative rounded-md overflow-auto	">
                        <AddNewAddress setOpen={setOpen}  setAddresssData={setAddresssData} AddresssData={AddresssData}/>
                        </div>
                </Modal>
            </div>
            
            <div>
                <Modal
                        open={UpDateForm}
                        onClose={CloseUpdateHandler}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                >
                <div className="bg-[#fff] h-5/6 w-full lg:w-2/5 transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 relative rounded-md overflow-auto	">
                    <UpdateAddress updateName={updateName} setUpdateForm={setUpdateForm}  setAddresssData={setAddresssData} AddresssData={AddresssData}/>
                </div>
                </Modal>
            </div>
        </div>
    )
}