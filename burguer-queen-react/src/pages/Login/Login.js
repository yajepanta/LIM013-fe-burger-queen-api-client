import React, { useState } from 'react';
import '../Login/Login.css';
import logo from '../../assets/images/logo.svg';
import Label from './components/Label/Label';
import Input from './components/Input/Input';
import Cookies from 'universal-cookie';

const Login = () => {
    const [ email, setUser ] = useState('');
    const [ emailError, setEmailError ] = useState(false);
    const [ password, setPassword ] = useState('');
    const [ passwordError, setPasswordError ] = useState(false);

    const regEx = /^((([!#$%&'*+\-/=?^_`{|}~\w])|([!#$%&'*+\-/=?^_`{|}~\w][!#$%&'*+\-/=?^_`{|}~.\w]{0,}[!#$%&'*+\-/=?^_`{|}~\w]))[@]\w+([-.]\w+)*\.\w+([-.]\w+)*)$/;

    const handleChange = (name, value) => {
        switch (name) {
            case 'email': if (!regEx.test(value)) {
                setEmailError(true);
                    } else {
                        setUser(value);
                        setEmailError(false);         
                    };
            break;        
            case 'password': if (value.length < 6) {
                setPasswordError(true);
            } else {
                setPassword(value);
                setPasswordError(false);
            };
            break;
            default: console.log('soy default', name, value);
            break;
        }

        /* if (name === 'email'){
            console.log(name);
            console.log('value', value);
            setUser(value);
        } else {
            if (value.length < 6){
                setPasswordError(true);
            } else {
                setPassword(value);
                setPasswordError(false);
            }
        } */
    };
    
    const handleSubmit = () => {
        const account = {
            email: email,
            password: password
          }
          const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(account)
            
          };
           console.log(account);
            const cookies = new Cookies();
            fetch('http://localhost:5000/auth', options)
                .then((res)=>{ 
                    if (res.status === 200) {
                        return res.json();
                    }})
                .then(res=>{
                    console.log(res.token);
                    cookies.set('cookieSession', res.token, { path: '/' });
                    console.log('cookies de sesion:', cookies.get('cookieSession'));
                })
                .catch(err=>console.log(err));
                window.location.href= './home';
    }
    
    return (
        <div className='login-view'>
            <div className='login-container'>
                <img src={logo} alt='Burguer Queen'></img>
                <div className='row'>
                    <Label text='Correo:' />
                    <Input 
                        attribute={{
                            id: 'email',
                            name: 'email',
                            type: 'email',
                            placeholder: 'Ingrese el correo'
                        }}
                        handleChange={handleChange}
                        param={emailError}
                    />
                </div> 
                { emailError && 
                    <Label
                        text='El correo ingresado no es válido.'
                        param={emailError}
                    />
                }              
                <div className='row'>
                    <Label text='Contraseña:'/>
                    <Input 
                        attribute={{
                            id: 'password',
                            name: 'password',
                            type: 'password',
                            placeholder: 'Ingrese la contraseña'
                        }}
                        handleChange={handleChange}
                        param={passwordError}
                    />
                </div>
                
                { passwordError &&
                    <Label 
                        text='La contraseña ingresada es inválida o muy corta.' 
                        param={passwordError}
                    />
                }           
               <button className='login-button' onClick={ handleSubmit } type="submit"> Ingresar </button>

            </div>
        </div>
    );
};

export default Login;
