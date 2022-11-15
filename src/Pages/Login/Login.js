import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
 
  const {logIn} = useContext(AuthContext);
  const [loginError,setLoginError] = useState('')
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/'


  const handleLogin = (data) => {
    setLoginError('')
    logIn(data.email,data.password)
    .then(result =>{
      const user = result.user;
      console.log(user);
      navigate(from, {replace:true})
    })
    .catch(error=>{
      setLoginError(error.message)
      console.log(error)
    });
  };

  return (
    <div className=" h-[800px] flex justify-center items-center">
      <div className="w-96 p-6 shadow-2xl">
        <h2 className="text-3xl text-center">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: "Email Address is required" })}
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
                required: " Password is required",
                minLength: { value: 6, message: "Password must be atleast 6 charecters" },
              })}
              className="input input-bordered w-full"
            />
            {errors.password && (
              <p className="text-red-600">{errors.password?.message}</p>
            )}

            <label className="label">
              <span className="label-text">Forgot Password?</span>
            </label>
          </div>
           
           <div>{loginError && <p className="text-red-600">{loginError}</p>}</div>

          <input className="btn btn-accent w-full" type="submit" />
        </form>
        <p>
          New to Doctor Portal{" "}
          <Link to="/signup" className="text-secondary">
            Create an account
          </Link>{" "}
        </p>

        <div className="divider">OR</div>
        <button className=" btn w-full">Continue with Google</button>
      </div>
    </div>
  );
};

export default Login;
