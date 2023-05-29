import React, { useContext, useState } from 'react';
import './SingUp.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
 


const SingUp = () => {
    const [error , setError] = useState(' ');
  
    const { singUpHandle} = useContext(AuthContext);
 
    const handleSingUp = event =>{
     event.preventDefault();
    const form = event.target;
    const email =  form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(email, password,confirm);
    
    if(password !== confirm){
        setError('Password not match ! try again.')
    }


    else{
        setError(' ')
    }

   singUpHandle(email , password)
   .then(res => {
      console.log(res);
      alert('sing up successful')
      form.reset();
   })

   .catch(error => {
    console.error (error.message);
   })

   }
   
 return (
        <div>

            <form onSubmit={handleSingUp} className='form-container'>
                <h4 className='form-title'>Sing Up</h4>
                <div className="form-control">
                    <label htmlFor="email"> Email </label>
                    <input type="email" name='email' required />
                </div>
                <div className="form-control">
                    <label htmlFor="password"> Password </label>
                    <input type="password" name='password' required />
                </div>
                <div className="form-control">
                    <label htmlFor="password"> Confirm Password </label>
                    <input type="password" name='confirm' required />
                </div>

             <p className='confirm-error'>{error}</p>

             <input type="submit"  className='btn' value='Sing Up' />
             
            <p className='user-position'><small>Already have an account ?  <Link to='/login'>  Login </Link></small></p>
            

            </form>
        </div>
    );
};

export default SingUp;