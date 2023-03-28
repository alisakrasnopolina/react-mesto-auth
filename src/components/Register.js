import React from 'react';
import { Link } from  'react-router-dom'; 
import * as Auth from './Auth';

function Register(props) {

  const [formValue, setFormValue] = React.useState({
    email: '',
    password: '',
  })

  const handleChange = (evt) => {
    const {name, value} = evt.target;

    setFormValue({
      ...formValue,
      [name]: value
    });
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    Auth.register(formValue.email, formValue.password)
      .then((res) => {
        if (res) {
          props.onRegister(true)
        } else {
          props.onRegister(false)
        }
      })
      .catch((err) => {
        console.log(err)
      });
  }

  return(
    <main className="content">
      <section className="register">
        <h2 className="register__title">Регистрация</h2>
        <form className="register__form" onSubmit={handleSubmit} noValidate>
          <input 
            value={formValue.email}
            onChange={handleChange}
            id="email-input" 
            name="email" 
            type="text" 
            placeholder="Email" 
            className="register__input register__input_data_email" 
            required 
            minLength="2" 
            maxLength="40"
          />
          <span className="popup__input-error email-input-error"></span>
          <input 
            value={formValue.password}
            onChange={handleChange}
            id="password-input" 
            name="password" 
            type="text" 
            placeholder="Пароль" 
            className="register__input register__input_data_password" 
            required 
            minLength="2" 
            maxLength="200"
          />
          <span className="register__input-error password-input-error"></span>
          <button type="submit" className="register__submit-button">Зарегистрироваться</button>
          <Link to="/sign-in" className="register__subtitle hover">
            Уже зарегистрированы? Войти
          </Link>
        </form>
      </section>
    </main>
  );
}

export default Register;