import { Form, Formik } from "formik";
import * as yup from "yup";
import { useRef } from "react";
import CustomInputSignUp from '../../../CustomInputSignUp/page'
export default function SignupForm() {
  const RegistrationSchema = yup.object().shape({
    email: yup.string().required("email is required"),
    password: yup.string().required("password required"),
    confirmpassword: yup.string().required("confrim password required"),
  });
  const SubmitHandler = (values) => {
    console.log(values, "values");
  };
  const formikRef = useRef();
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
          confirmpassword: "",
        }}
        validationSchema={RegistrationSchema}
        onSubmit={SubmitHandler}
        innerRef={formikRef}
      >
        {({  }) => {
          return (
            <Form>
              <div className="flex flex-col gap-5">
                <div>
                  <CustomInputSignUp
                    label={"Email address"}
                    type="email"
                    name="email"
                    placeholder="Email"
                    className='border'
                  />
                </div>
                <div>
                  <CustomInputSignUp
                    label={"Password"}
                    type="password"
                    name="password"
                    placeholder="Password"
                    className='border'
                  />
                </div>
                <div>
                  <CustomInputSignUp
                    label={"Confirm Password"}
                    type="password"
                    name="confirmpassword"
                    placeholder="Confirm Password"
                    className='border'
                  />
                </div>
                <div>
                  <button
                    className="bg-[#2A94D0] w-full rounded-md py-6 px-5 font-semibold text-xl text-white"
                    type="submit"
                  >
                    Create
                  </button>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
