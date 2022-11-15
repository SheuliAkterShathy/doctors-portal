import userEvent from "@testing-library/user-event";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const SignUp = () => {
  const {createUser,updateUser} = useContext(AuthContext)
  const [signUpError,setSignUpError] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/'

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignUp = (data) => {
    console.log(data);
    setSignUpError('')
    createUser(data.email,data.password)
    .then(result =>{
      const user = result.user;
      toast.success('User created successfully')
      console.log(user)
        const userInfo={
          displayName:data.name,
        }
        updateUser(userInfo)
        .then( () =>{})
        .catch(err=>console.log(err))
         navigate(from, {replace:true})
    })
    .catch(error=>{
      console.log(error)
      setSignUpError(error.message)
    });
  };
  return (
    <div className=" h-[800px] flex justify-center items-center">
      <div className="w-96 p-6 shadow-2xl">
        <h2 className="text-3xl text-center">SignUp</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="input input-bordered w-full "
            />
            {errors.name && (
              <p className="text-red-600">{errors.name?.message}</p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="input input-bordered w-full "
            />
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be atleast 6 characters",
                },
               pattern: { value:/^(?=(.*[a-z]))(?=.*[!@#$&*])/,
                message: "Password must be a lowercase and a special charecter"}
              })}
              className="input input-bordered w-full"
            />
            {errors.password && (
              <p className="text-red-600">{errors.password?.message}</p>
            )}
          </div>

              <div>
                {signUpError && <p className="text-red-600">{signUpError}</p> }
              </div>
           
          <input className="btn btn-accent w-full mt-4" type="submit" />
        </form>
        <p>
          Already have an account?
          <Link to="/login" className="text-secondary">
            Please Login
          </Link>
        </p>

        <div className="divider">OR</div>
        <button className=" btn btn-outline w-full">Continue with Google</button>
      </div>
    </div>
  );
};

export default SignUp;
