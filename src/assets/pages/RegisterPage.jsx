import React from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '../../Hooks/useAuth';
import './styles/registerPage.css'

const RegisterPage = () => {
  const createUser = useAuth();
  const { handleSubmit, register ,reset} = useForm();

  const submit = data =>{
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users'
    createUser(url, data );
    reset({
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      phone: '',
    })
  }

  return (
    <div className='container_form'>
      <h2 className='titled'>Register here!</h2>
      <form className='formulario' onSubmit={handleSubmit(submit)}>
        <div className='div'>
          <label htmlFor="name">Name</label>
          <input {...register('firstName')} id='name' type="text" />
        </div >
        <div className='div'>
          <label htmlFor="last">Last name</label>
          <input {...register('lastName')} id='last' type="text" />
        </div>
        <div className='div'>
          <label htmlFor="email">Email</label>
          <input {...register('email')} id='email' type="email" />
        </div>
        <div className='div'>
          <label htmlFor="password">Password</label>
          <input {...register('password')} id='password' type="password" />
        </div>
        <div className='div'>
          <label htmlFor="phone">Phone</label>
          <input {...register('phone')} id='phone' type="number" />
        </div>
        <button className='btn-register'>Submit</button>
      </form>
    </div>
  )
}

export default RegisterPage