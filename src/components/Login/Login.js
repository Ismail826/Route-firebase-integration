import React from 'react';
import useFirebase from '../hooks/useFirebase';

const Login = () => {
    const {singInWithGoogle}=useFirebase();
    return (
        <div>
            <h1>This is login</h1>
<div style={{margin:'20px'}}>
    <button onClick={singInWithGoogle}>Google Sing In</button>
</div>
            <form>
                <input type='email' placeholder='Enter Your Email' />
                <br />
                <input type='password' id='' placeholder='Enter Your password' />
                <br />
                <input type='submit' value="Login" placeholder='Enter Your Email' />
            </form>
        </div>
    );
};

export default Login;