import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Form from '../../components/common comp/Form'
import { registerFormControls } from "@/config"


const initalState = {
  name: "",
  email: "",
  password: "",
}

const signup = () => {

  const [formData, setFormData] = useState(initalState)
  const onSubmit =()=>{}

  return (
    <div className='mx-auto w-full max-w-md space-y-6'>
      <div className='text-center'>
        <h1 className='text-3xl font-bold tracking-tight text-foreground'>Create New Account</h1>
        <p>Already have account
          <Link to= "/auth/login" className='font-medium text-primary hover:underline ml-2 '>Login</Link>
        </p>
      </div>
      <Form 
      formControls={registerFormControls}
      buttonText ={"signup"}
      formData={formData}
      setFormData={setFormData}
      onSubmit={onSubmit}/>
    </div>
  )
}

export default signup