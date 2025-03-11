import React from 'react'
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  return (
    <div className="dark:text-red-500">
      <dialog id="my_modal_3" className="modal">
  <div className="modal-box dark:bg-slate-900">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost hover:bg-black hover:text-white absolute right-2 top-2 dark:hover:bg-red-500 dark:text-white"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
    </Link>
   
    <h3 className="font-bold text-lg dark:text-white">Login</h3>
    <div className="mt-4 space-y-2">
              <span>Email</span>
              <br/>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && <span className="text-sm text-red-500 ">
                This field is required</span>}
    </div>
    {/* password */}
    <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("password", { required: true })}
              />
              <br/>
              {errors.password && <span className="text-sm text-red-500 "> This field is required</span>}
    </div>
    <div className="flex justify-around mt-6">
              <button className="bg-red-500 text-white rounded-md px-3 py-1 hover:bg-black duration-200 dark:hover:bg-white dark:hover:text-black">
                Login
              </button>
              <p>
                Not registered?{" "}
                <Link
                  to="/signup"
                  className="underline text-blue-500 cursor-pointer"
                >
                  Signup
                </Link>{" "}
              </p>
    </div>
    </form>
  </div>
</dialog>
    </div>
  )
}

export default Login
