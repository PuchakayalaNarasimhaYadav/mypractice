"use client"
import Image from "next/image";
import LoginImage from '../Assets/login_img.svg';
import CustomInput from "../CustomInput/page";
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import { TabPanel } from "@mui/lab";
import LoginForm from './Components/LoginForm/page'
import SignupForm from './Components/SigupForm/page'
export default function Login(){
  const [value, setValue] = React.useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    return(
            <div className="gap-5 py-6 mt-20 lg:mt-0 flex flex-col lg:flex-row ">
                    <div className="  flex-1  flex justify-center items-center">
                        <Image src={LoginImage} alt="logo" className="object-contain "/>
                    </div>
                    <div className="  flex-1 py-3 flex  items-center">
                        <Box sx={{typography: 'body1'}} className=' py-4 px-5 w-full  '>
                              <TabContext value={value}>
                                <Box sx={{ borderColor: 'divider' }}>
                                  <TabList onChange={handleChange} aria-label="lab API tabs example">
                                    <Tab label="LOGIN" value="1" className="font-semibold text-base" />
                                    <Tab label="SIGNUP" value="2"  className="font-semibold text-base"/>
                                  </TabList>
                                </Box>
                                <TabPanel value="1" >
                                  <LoginForm/>
                                </TabPanel>
                                <TabPanel value="2">
                                  <SignupForm/>
                                </TabPanel>
                              </TabContext>
                          </Box>
                    </div>
            </div>
        )
}