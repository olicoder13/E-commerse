import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '../../Hooks/useAuth';
import { Link } from 'react-router-dom';
import './styles/loginPage.css'

const LoginPage = () => {
const [isLogin, setIsLogin] = useState(true);
  const createToken = useAuth();
  const {register, reset, handleSubmit} = useForm();

  const submit = data =>{
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users/login';
    createToken(url, data);
    reset({
      email: '',
      password: '',
    })
    setIsLogin(false)
  }

  const handleLogout = () =>{
    localStorage.removeItem('token');
    setIsLogin(false)
  }

  return (
    <div>
      <h2 className='title-principal'>Log in with your count</h2>
      {
        isLogin ?
        <>
        <form className='formulario_register' onSubmit={handleSubmit(submit)}>
        <div className='form'>
          <label htmlFor="user">Email</label>
          <input {...register('email')} id='user' type="email" />
        </div>
        <div className='form'>
          <label htmlFor="key">Password</label>
          <input {...register('password')} id='key' type="password" />
        </div>
        <button className='btn_enviar'>Submit</button>
      </form>
      <p className='coditional'>if you are not registered then you can <Link className='btn_register' to='/register'>register here</Link></p>
      </>
      :
      <div className='other_option'>
        <p>You are logged in right now😀😃😉</p>
        <button className='log-out' onClick={handleLogout}>Logout</button>
      </div>
    }
    </div>
  )
}

export default LoginPage