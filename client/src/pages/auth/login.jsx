import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Form from '../../components/common comp/Form'
import { LoginFormControls } from "@/config"


const initalState = {
  name: "",
  email: "",
  password: "",
}

const Login = () => {

  const [formData, setFormData] = useState(initalState);
  const dispatch = useDispatch();


  
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(LoginaUser(formData)).then((data)=>{
      
    })

   }

  return (
    <div className='mx-auto w-full max-w-md space-y-6'>
      <div className='text-center'>
              <h1 className='text-3xl font-bold tracking-tight text-foreground'>sign In To Your Account</h1>
              <p>Don't have an account
                <Link to="/auth/signup" className='font-medium text-primary hover:underline ml-2 '>Sign Up</Link>
              </p>
            </div>
      <Form
        formControls={LoginFormControls}
        buttonText={"Sign In"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit} />
    </div>
  )
}

export default Login