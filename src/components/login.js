import React from "react";

import { useForm } from "react-hook-form";
import { registeredUsers } from "./register";
import { useNavigate } from "react-router";

const Login = () => {
    const navigate = useNavigate()

  const { register , handleSubmit, formState: { errors }} = useForm();
  const onSubmit = (data) => {
    registeredUsers.forEach((user) => {
        if (user.email === data.email && user.password === data.password) {
            navigate("/home");
        }
    })
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-fields">
        <label>Email</label>
        <input placeholder="email" {...register("email", { required: "Please fill email!"})} />
        <p>{errors.email?.message}</p>

        <label>Password</label>
        <input placeholder="password" type="password" {...register("password", { required: "Please fill Password!"})} />
        <p>{errors.password?.message}</p>
        <input type="submit" />
      </div>
    </form>
  );
}

export default Login;
