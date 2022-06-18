import React, { useState } from "react";

import { useForm } from "react-hook-form";

export const registeredUsers = [
  // {email: 'nino', password: 'nino123'}
]
export const barbers = [
  // {
  //   id: 1,
  //   firstName: 'ნინო', 
  //   lastName: 'კუპატაძე', 
  //   email: "nino77@gmail.com", 
  //   adress: "რუსთავი", 
  //   price: "100 ლარი"
  // },
  // {
  //   id: 2,
  //   firstName: 'ნიკა', 
  //   lastName: 'სიმონიშვლი', 
  //   email: "nino77@gmail.com", 
  //   adress: "თბილისი", 
  //   price: "200 ლარი"
  // }
];

const Register = () => {
  const [isBarberOrClient, setIsBarberOrClient] = useState('');

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmitBarber = (data) => {
    data.id = barbers.length + 1;
    barbers.push(data);
  };

  const onSubmitClient = (data) => {
    registeredUsers.push(data);
  };

  return (
    < >
    <div className="register-form">
      <div className="register-buttons">
        <button type="button" onClick={() =>setIsBarberOrClient('client')}>
          register as client
        </button>
        <button type="button" onClick={() =>setIsBarberOrClient('barber')}>
          register as burber
        </button>
      </div>

      { isBarberOrClient === 'client' && (
          <form onSubmit={handleSubmit(onSubmitClient)}>
            <div className="form-fields">
              <label>Email</label>
              <input placeholder="email" {...register("email", { required: "Please fill email!"} )} />
              <p>{errors.email?.message}</p>

              <label>Password</label>
              <input placeholder="password" {...register("password", { required: "Please fill Password!"})} />
              <p>{errors.password?.message}</p>
              <input type="submit" />
            </div>
          </form>
        )
      }
      { isBarberOrClient === 'barber' && (
          <form onSubmit={handleSubmit(onSubmitBarber)}>
            <div className="form-fields">
              <label>First Name</label>
              <input placeholder="firstName" {...register("firstName", { required: "Please fill first name!"})} />
              <p>{errors.firstName?.message}</p>

              <label>Last Name</label>
              <input placeholder="lastName" {...register("lastName", { required: "Please fill last name!"})} />
              <p>{errors.lastName?.message}</p>

              <label>Email</label>
              <input placeholder="email" {...register("mail", { required: "Please fill email!"})} />
              <p>{errors.mail?.message}</p>

              <label>Adress</label>
              <input placeholder="adress" {...register("adress", { required: "Please fill adress!"})} />
              <p>{errors.adress?.message}</p>

              <label>Price</label>
              <input placeholder="price" {...register("price", { required: "Please fill price!"})} />
              <p>{errors.price?.message}</p>
              <input type="submit" />
            </div>
          </form>
        )
      }
    </div>
    </>
    
  );
}

export default Register;

