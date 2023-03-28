import React from 'react';
import { useNavigate } from  'react-router-dom';
import * as Auth from './Auth';

function Login(props) {

  const [formValue, setFormValue] = React.useState({
    email: '',
    password: ''
  })
  const [userData, setUserData] = React.useState({});

  const navigate = useNavigate();

  const handleChange = (evt) => {
    const {name, value} = evt.target;

    setFormValue({
      ...formValue,
      [name]: value
    });
  }
  
  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (!formValue.email || !formValue.password) {
      return;
    }
    Auth.authorization(formValue.email, formValue.password)
      .then((data) => {
        if (data.token){
          const userData = {
            email: formValue.email
          }
          setUserData(userData)
          setFormValue({email: '', password: ''});
          props.handleLogin(userData);
          navigate('/', {replace: true});
        }
      })
      .catch(err => console.log(err));
  }

  return(
    <main className="content">
      <section className="register">
        <h2 className="register__title">Вход</h2>
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
          <button type="submit" className="register__submit-button">Войти</button>
        </form>
      </section>
    </main>
  );
}

export default Login;