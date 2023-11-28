import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../store/thunkFunctions'

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({ mode: 'onChange' })

  const dispatch = useDispatch();

  const onSubmit = ({ email, password }) => {

    const body = {
      email,
      password,
    }

    dispatch(loginUser(body));
    reset();
  }

  const userEmail = {
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
      <div className="loginPage">
        <h1>
          로그인
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="loginPage">
            <label htmlFor='email'>Email</label>
            <input type='email' id="email" {...register('email', userEmail)}/>
            {
              errors?.email &&
              <div className="loginPage">
                <span>{errors.email.message}</span>
              </div>
            }
          </div>

          <div className="loginPage">
            <label htmlFor='password'>Password</label>
            <input type='password' id="password" {...register('password', userPassword)}/>
            {
              errors?.password &&
              <div className="loginPage">
                <span>{errors.password.message}</span>
              </div>
            }
          </div>

          <div className="loginPage">
            <button type='submit'>로그인</button>
          </div>

          <p>
            아이디가 없다면?{" "}
            <a href='/register'>회원가입</a>
          </p>
        </form>
      </div>
    </section>
  )
}

export default LoginPage