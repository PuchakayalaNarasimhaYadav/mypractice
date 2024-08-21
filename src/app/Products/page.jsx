"use client"
import { useRouter } from "next/navigation"
export default function Products(){
    const router=useRouter()
    return(
        <div>
            <h1>List of Products</h1>
            <p>product one</p>
            <p>product two</p>
            <p>product three</p>
            <p>product four</p>
            <p>product five</p>
            <button onClick={()=>router.replace("/")}>Home</button>
        </div>
    )
}