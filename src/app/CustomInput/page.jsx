export default function CustomInput({error,label,...res}){
    return(
        <div className="relative">
            <p>{label}</p>
            <input 
            {...res}
            className="bg-[#FFFFFF] border  rounded p-4 w-full" 
            />
            {
            error && <p className="text-red-400 absolute right-0 text-xs my-1">{error}</p>
            }
        </div>
    )
}