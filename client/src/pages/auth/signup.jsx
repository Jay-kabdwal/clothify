import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import CommonForm from '@/components/common comp/Form';
import { registerFormControls } from "@/config";
import { registerUser } from '@/store/auth-slice';
import { toast } from 'sonner'; // Correct import for toast

const initialState = {
  username: "",
  email: "",
  password: "",
};

const Signup = () => {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(formData)).then((data) => {
      if (data?.payload?.success) {
        toast.success("User registered successfully!", {
          description: <span style={{ color: "green" }}>{"You can now log in to your account."}</span>,
          style: { background: "black", color: "green" },
          duration: 3000,
        });
        navigate("/auth/login");
      } else if (data?.payload?.message === "user already exists") {
        toast.error("User already exists", {
          description: <span style={{ color: "red" }}>{"Please use a different email."}</span>,
          style: { background: "black", color: "red" },
          duration: 3000,
        });
      } else {
        toast.error("Registration failed", {
          description: <span style={{ color: "red" }}>{data?.payload?.message || "Please try again."}</span>,
          style: { background: "black", color: "red" },
          duration: 3000,
        });
      }
    });
  };

  return (
    <div className='mx-auto w-full max-w-md space-y-6'>
      <div className='text-center'>
        <h1 className='text-3xl font-bold tracking-tight text-foreground'>Create New Account</h1>
        <p>
          Already have an account?
          <Link to="/auth/login" className='font-medium text-primary hover:underline ml-2'>Login</Link>
        </p>
      </div>
      <CommonForm
        formControls={registerFormControls}
        buttonText={"Sign Up"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default Signup;
