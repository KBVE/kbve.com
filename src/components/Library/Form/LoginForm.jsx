import React from "react";
import { useForm } from "react-hook-form";
import { login } from "@lib/appwrite.ts";

const LoginForm = () => {
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const fields = { fields: data };
    //login(fields?.email, fields?.password);
  };

  return (
    <>
      <h1 className="text-center text-4xl font-semibold mt-10">Register to KBVE</h1>
      <form
        className="max-w-xl m-auto py-10 mt-10 px-12 border"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="text-gray-600 font-medium">Email</label>
        <input
          className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
          name="email"
          placeholder="your@email.com"
          ref={register({
            required: "Please enter an email",
          })}
          id="email"
        />
        {errors.email && (
          <div className="mb-3 text-normal text-red-500">
            {errors.email.message}
          </div>
        )}

        <label className="text-gray-600 font-medium block mt-4">Password</label>
        <input
          className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
          name="password"
          type="password"
          id="password"
          placeholder=""
          ref={register({
            required: "Please enter a password",
          })}
        />
        {errors.password && (
          <div className="mb-3 text-normal text-red-500 ">
            {errors.password.message}
          </div>
        )}
        <button
          className="mt-4 w-full bg-green-400 hover:bg-green-600 text-green-100 border py-3 px-6 font-semibold text-md rounded"
          type="submit"
        >
          Login
        </button>
      </form>
    </>
  );
};

export default LoginForm;