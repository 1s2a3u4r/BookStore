import React from "react"
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"

function Contact() {
 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="border-[2px] shadow-md p-5 rounded-md w-[460px]">
          <div className="">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost hover:bg-black hover:text-white absolute right-2 top-2 dark:hover:bg-red-500 dark:text-white"
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg dark:text-white">Contact Us</h3>
              <div className="mt-4 space-y-2 dark:text-red-500">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your fullname"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("fullname", { required: true })}
                />
                <br />
                {errors.fullname && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/* Email */}
              <div className="mt-4 space-y-2 dark:text-red-500">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="mt-4 space-y-2 dark:text-red-500">
                <span>Message</span>
                <br />
                <textarea
                  rows="4"
                  cols="50"
                  placeholder="Type your message"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                />
              </div>
              {/* Button */}
              <div className="flex mt-4">
                <button className="bg-red-500 text-white rounded-md px-3 py-1 hover:bg-black duration-200 hover:text-white dark:hover:bg-white dark:hover:text-black">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact