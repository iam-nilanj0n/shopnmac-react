import React, { useState } from 'react';
import './LoginRegistration.css';
import HeaderComponent from '../../LayOutComponents/HeaderComponent/HeaderComponent'
import FooterComponent from '../../LayOutComponents/FooterComponent/FooterComponent'

const displayNone = {
    display: 'none'
}

const displayInherit = {
    display:'inherit'
}

export default function LoginRegistration() {
    const [loginRegistrationStyle, setLoginRegistrationStyle] = useState([
        displayInherit,
        displayNone,
        displayNone
    ])

    const layOutChangeHandler = (layOutName)=>{
        if(layOutName === 'registration'){
            setLoginRegistrationStyle([
                displayNone,
                displayInherit,
                displayNone
            ])
        }
        if(layOutName === 'forgetPassword'){
            setLoginRegistrationStyle([
                displayNone,
                displayNone,
                displayInherit
            ])
        }
        if(layOutName === 'login'){
            setLoginRegistrationStyle([
                displayInherit,
                displayNone,
                displayNone
            ])
        }
    }

    return (
        <div className='LoginRegistration'>
            <HeaderComponent />
            <main className='LoginRegistration-Main'>

                <div className='LoginDiv' style={loginRegistrationStyle[0]}>
                    <h2>Login</h2>
                    <div className='LoginDiv-InputBox'>
                        <label>Email</label>
                        <input type='email' placeholder='' />
                        <label>Password</label>
                        <input type='password' placeholder=''/>
                    </div>
                    <p className='forgetPassword' onClick={(e)=>layOutChangeHandler('forgetPassword')}>Forget your Password ?</p>
                    <button className='SignIn-Button'>SIGN IN</button>
                    <p>
                        <span>Don't have an account yet?</span>
                        <span onClick={(e)=>layOutChangeHandler('registration')} className='createOne'>Create One</span>
                    </p>
                </div>

                <div className='RegistrationDiv' style={loginRegistrationStyle[1]}>
                    <h2>Create Account</h2>
                    <div className='RegistrationDiv-InputBox'>
                        <label>First Name</label>
                        <input type='text' />
                        <label>Last Name</label>
                        <input type='text' />
                        <label>Email</label>
                        <input type='email' />
                        <label>Password</label>
                        <input type='password' />
                    </div>
                    <button className='Registration-Button'>Create</button>
                    <button className='Cancel-Button' onClick={(e)=>layOutChangeHandler('login')}>Cancel</button>
                </div>

                <div className='ForgetPasswordDiv' style={loginRegistrationStyle[2]}>
                    <h2>RESET YOUR PASSWORD</h2>
                    <p>We will send you an email to reset your password</p>
                    <div className='ForgetPasswordDiv-InputBox'>
                        <label>Email</label>
                        <input type='email' />
                    </div>
                    <button className='Submit-Button'>SUBMIT</button>
                    <button className='Cancel-Button' onClick={(e)=>layOutChangeHandler('login')}>Cancel</button>
                </div>
            </main>
            <FooterComponent />
        </div>
    )
}
