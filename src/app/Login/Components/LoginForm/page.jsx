import { useFormik } from "formik";
import CustomInput from "../../../CustomInput/page";
import Link from "next/link";
export default function LoginForm(){
    const validate =(values)=>{
        const errors={}
        if(!values.email || !values.email.trim()){
        errors.email='email is required'
        }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
          errors.email = 'Invalid email address';
        }
        if(!values.password || !values.password.trim()){
          errors.password='password is required'
        }else if(values.password.lenght < 8){
          errors.password='password should be minimum 8 char'
        }
        return errors
      }
      const formik = useFormik({
          initialValues:{
            email:'',
            password:'',
          },
          validate,
          onSubmit:(values)=>{
            alert(JSON.stringify(values, null, 2));
            console.log(values,'my_values')
          }
      })
    return(
        <div>
        <form className="flex flex-col gap-6" onSubmit={formik.handleSubmit}>
        <div >
          <CustomInput 
          id='email'
          label={"Email address"}
          type="email"
          name={"email"}
          placeholder={"Email"}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          error={formik.touched.email && formik.errors.email}
          />
        </div>
        <div>
          <CustomInput 
          id='password'
          label={'Password'}
          type="password"
          name={"password"}
          placeholder={"Password"}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          error={formik.touched.password && formik.errors.password}
          />
        </div>
        <div  className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <input type="checkbox" id="checkbox" className="w-4 h-4"/>
            <label htmlFor="checkbox" className="inline-flex">Remember me</label>
          </div>
          <div>
            <p>Forgot Password</p>
          </div>
        </div>
        <div>
          <Link href='/Home'><button className="bg-[#2A94D0] w-full rounded-md py-6 px-5 font-semibold text-xl text-white" type="submit">Login</button></Link>
        </div>
      </form>
      </div>
    )
}