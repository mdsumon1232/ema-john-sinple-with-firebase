import React, { useContext } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';


const Login = () => {
  
    const { loginHandle } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state ?.from ?.pathname || '/'
    
    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginHandle(email , password)
        .then(res => {
            console.log(res);
            alert('login successful');
            form.reset();
            navigate(from , {replace:true});
        })

        .catch(error => {
            console.error (error.message);
           })
    }    
 

    return (
       
             <div>

<form onSubmit={handleLogin} className='form-container'>
    <h4 className='form-title'>Login</h4>
    <div className="form-control">
        <label htmlFor="email"> Email </label>
        <input type="email" name='email' required />
    </div>
    <div className="form-control">
        <label htmlFor="password"> Password </label>
        <input type="password" name='password' required />
    </div>
    <input type="submit"  className='btn' value='Login' />

    <p className='user-position'><small>New in Auth Master  <Link to='/singup'> Sing Up</Link></small></p>

</form>
</div>
     
    );
};

export default Login;