import React from 'react';

const Register = () => {
    return (
        <div>
            <h3>Please Register Now</h3>
            <form>
                <input type='text' placeholder='Enter Your Name' />
                <br />
                <input type='email' placeholder='Enter Your Email' />
                <br />
                <input type='password' id='' placeholder='Enter Your password' />
                <br />
                <input type='submit' value="Register" placeholder='Enter Your Email' />
            </form>

        </div>
    );
};

export default Register;