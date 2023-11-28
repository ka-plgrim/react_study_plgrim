import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { registerUser } from '../../store/thunkFunctions'

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({ mode: 'onChange' })
  const dispatch = useDispatch();

  const onSubmit = ({ email, password, name }) => {

    const body = {
      email,
      password,
      name
    }

    dispatch(registerUser(body));

    reset();
  }

  const userEmail = {
    required: "필수 필드입니다."
  }
  const userName = {
    required: "필수 필드입니다."
  }
  const userPassword = {
    required: '필수 필드입니다.',
    minLength: {
      value: 6,
      message: "최소 6자입니다."
    }
  }

  return (
    <section>
      <div className="registerPage">
        <h1>회원가입</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="registerPage">
            <label htmlFor='email'>Email</label>
            <input type='email' id="email" {...register('email', userEmail)}/>
            {
              errors?.email &&
              <div className="registerPage">
                <span>{errors.email.message}</span>
              </div>
            }
          </div>

          <div className="registerPage">
            <label htmlFor='name'>Name</label>
            <input type='text' id="name" {...register('name', userName)}/>
            {
              errors?.name &&
              <div className="registerPage">
                <span>{errors.name.message}</span>
              </div>
            }
          </div>

          <div className="registerPage">
            <label htmlFor='password'>Password</label>
            <input type='password' id="password" {...register('password', userPassword)}/>
            {
              errors?.password &&
              <div className="registerPage">
                <span>{errors.password.message}</span>
              </div>
            }
          </div>

          <div className="registerPage">
            <button type='submit'>회원가입 </button>
          </div>

          <p>
            아이디가 있다면?{" "}
            <a href='/login'>로그인</a>
          </p>
        </form>
      </div>
    </section>
  )
}

export default RegisterPage