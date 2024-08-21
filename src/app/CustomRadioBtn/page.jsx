'use client'
import { useField } from "formik";
export default function CustomRadioBtn({label,...props}){
    const [field,meta]=useField(props)
    return(
        <>
        <div className="flex gap-2 item-center">
            <input
            {...field}
            {...props}
            id={label}
            />
            <label for={label} className="text-sm">{label}</label>
        </div>
        </> 
    )
}