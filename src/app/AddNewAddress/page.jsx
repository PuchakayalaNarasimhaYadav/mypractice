"use client";
import { IoMdClose } from "react-icons/io";
import CustomInputSignUp from "../CustomInputSignUp/page";
import CustomRadioBtn from '../CustomRadioBtn/page'
import { Form, Formik } from "formik";
import * as yup from "yup";
import { useEffect, useRef, useState } from "react";
import CustomDatalist from "../CustomDatalist/page";
import axios from "axios";
import { Bars } from "react-loader-spinner";
export default function AddNewAddress({setAddresssData,AddresssData,setOpen}) {
  const [isFocused, setIsFocused] = useState(false);
  const [data, setData] = useState([]);
  const [stateValues, setStateValues] = useState([]);
  const [cityValues, setCityValues] = useState([]);
  const [selectedState, setSelectedState] = useState(null);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://13.127.253.200/ChempureApi/Website_Api/Contact/index"
        );
        setData(response.data.countries);
        setStateValues(response.data.states);
      } catch (error) {
        console.log(error, "error api");
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    if (selectedState) {
      const fetchCityData = async () => {
        setLoader(true);
        try {
          const response = await axios.post(
            "http://13.127.253.200/ChempureApi/Website_Api/Login/get_cities",
            {
              stateId: selectedState.state_id,
            }
          );
          setCityValues(response.data.result.cities);
        } catch (error) {
          console.log(error, "error");
        }
        setLoader(false);
      };
      fetchCityData();
    } else {
      setCityValues([]);
    }
  }, [selectedState]);

  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };
  const AddAddressSchema = yup.object().shape({
    name: yup.string().required("name required"),
    addresslineone: yup.string().required("address line one required"),
    addresslinetwo: yup.string().required("address line two required"),
    addresslinethree: yup.string().required("address line three required"),
    landmark: yup.string().required("landmark required"),
    country: yup.object().required("country required"),
    state: yup.object().required("state required"),
    city: yup.object().required("city required"),
    pincode: yup.string().required("pincode required"),
    mobile: yup.string().required("mobile num required"),
  });
  console.log(AddAddressSchema, "AddAddressSchema");
  const formikRef = useRef();
  const FormSubmitHandler = (values) => {
    let tempData = [...AddresssData,values]
    setAddresssData(tempData)
    localStorage.setItem('AddresssData',JSON.stringify(tempData));
    setOpen(false)
  };
  return (
    <div className="py-2">
      <Formik
        initialValues={{
          name: "",
          radiobtn: "",
          addresslineone: "",
          addresslinetwo: "",
          addresslinethree: "",
          landmark: "",
          country: "",
          state: "",
          city: "",
          pincode: "",
          mobile: "",
        }}
        validationSchema={AddAddressSchema}
        onSubmit={FormSubmitHandler}
        innerRef={formikRef}
      >
        {({ values, setFieldValue}) => {
          console.log(values, "formvalues");
          return (
            <Form>
              <div className="border-b border-[#b9d9ee] flex justify-between p-4">
                <p className="text-lg text-[#4A6B88] font-semibold">
                  Add New Address
                </p>
                <IoMdClose
                  size={25}
                  color="#C2C2C2"
                  onClick={()=>setOpen(false)}
                  className="cursor-pointer"
                />
              </div>
              <div className="border-b border-[#b9d9ee] flex items-center gap-2 p-4">
                <div className="flex-1 flex gap-3">
                  <div>
                    <CustomRadioBtn
                      name="radiobtn"
                      type="radio"
                      label={"Company"}
                      value='company'
                    />
                  </div>
                  <div>
                    <CustomRadioBtn
                      name="radiobtn"
                      type="radio"
                      label={"Warehouse"}
                      value="warehouse"
                    />
                  </div>
                  <div>
                    <CustomRadioBtn
                    name="radiobtn"
                    type="radio"
                    value="other"
                    label={"Other"} 
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <input className="border w-full bg-[#DDE7EC] p-1 rounded" />
                </div>
              </div>
              <div className="p-4 flex flex-col gap-2">
                <div>
                  <CustomInputSignUp
                    label={"Name"}
                    type="text"
                    name="name"
                    className="border border-black p-[7px]"
                  />
                </div>
                <p>Address* (Flat, Building , Company)</p>
                <div className={`rounded px-4 py-5 flex flex-col gap-5 ${isFocused ? "border border-black" : ""}`}>
                  <div>
                    <CustomInputSignUp
                      type="text"
                      name="addresslineone"
                      className="outline-none border-b rounded-none border-[#E0E0E0] p-[7px] placeholder:text-sm"
                      placeholder="Address Lane 1"
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div>
                    <CustomInputSignUp
                      type="text"
                      name="addresslinetwo"
                      className="outline-none border-b rounded-none border-[#E0E0E0]  p-[7px] placeholder:text-sm"
                      placeholder="Address Lane 2"
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div>
                    <CustomInputSignUp
                      type="text"
                      name="addresslinethree"
                      className="outline-none  border-b rounded-none border-[#E0E0E0] p-[7px] placeholder:text-sm"
                      placeholder="Address Lane 3 "
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                  </div>
                </div>
                <div>
                  <CustomInputSignUp
                    label={"Land Mark"}
                    type="text"
                    name="landmark"
                    className="border border-black p-[7px]"
                  />
                </div>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <div className="flex-1">
                    <CustomDatalist
                        label={"Country*"}
                        name="country"
                        values={data}
                        handleChange={(event, value) => {
                          setFieldValue("country", value);
                          setFieldValue("state", "");
                          setFieldValue("city", "");
                        }}
                        getOptionLabel={(option) => option.country_name}
                        value={values.country === ''?{country_name:''}: values.country}
                    />
                    </div>
                    <div className="flex-1">
                    <CustomDatalist
                        label={"State*"}
                        name="state"
                        values={stateValues}
                        handleChange={(event, value) => {
                        setFieldValue("state", value);
                        setSelectedState(value)
                        }}
                        disabled={!values.country || values.country.country_name !== "India"}
                        getOptionLabel={(option) => option.state_name}
                        value={ values.state === ""? { state_name: "" } : values.state}
                      />
                    </div>
                  </div>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <div className="flex-1 relative">
                    <CustomDatalist
                      label={"City*"}
                      name="city"
                      values={cityValues}
                      handleChange={(event, value) => {
                        setFieldValue("city", value);
                      }}
                      disabled={!values.country || values.country.country_name !== "India"}
                      getOptionLabel={(option) => option.city_name}
                      value={ values.city === "" ? { city_name: "" } : values.city}
                    />
                    {loader ? (
                      <p className="absolute top-1/3 left-1/3 transform translate-x-1/2 translate-y-1/2">
                        <Bars
                          height="20"
                          width="20"
                          color="#4A6B88"
                          ariaLabel="bars-loading"
                          wrapperStyle={{}}
                          wrapperClass=""
                          visible={true}
                        />
                      </p>
                    ) : null}
                  </div>
                  <div className="flex-1">
                    <CustomInputSignUp
                      label={"Pin Code*"}
                      name="pincode"
                      className="border border-black p-[7px]"
                    />
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <div className="flex-1">
                    <CustomInputSignUp
                      label={"Mobile*"}
                      name="mobile"
                      className="border border-black p-[7px]"
                    />
                  </div>
                  <div className="flex-1 sm:invisible"></div>
                </div>
              </div>
              <div className="px-3.5 py-3 ">
                <button className="bg-[#2A94D0] w-full py-2 text-white " >
                  ADD ADDRESS
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
