import React from 'react'; 
function Login(){
    return(
        <React.Fragment>
            <div className='Logincontainer'>
                <h1>Login Page</h1>
                <p>Email</p>
                <input type="email" placeholder='Enter the email' />
                <p>Password</p>
                <input type="password" placeholder='Enter the password' />
                <button>Login</button>
            </div>
        </React.Fragment>
    );
}

export default Login;