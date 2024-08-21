import { useField } from "formik"
export default function CustomInputSignUp({label,className,...props}){
    const [field, meta] = useField(props);
    console.log(props,'props')
    return(
        <div className="relative" >
            <label >{label}</label>
            <input 
            {...field}
            {...props}
            className={`bg-[#FFFFFF]  rounded p-4 w-full ${className || ''}`}
            />
            {meta.touched && meta.error ? (
                <p className="error text-red-400 absolute text-xs my-1 right-0">{meta.error}</p>
            ) : null}
        </div>
    )
}