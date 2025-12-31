import React from 'react';
import { useContext } from 'react';
import { Link, useLocation } from 'react-router';
import { AuthContext } from '../../../provider/AuthProvider';
import toast from 'react-hot-toast';

const ForgotPass = () => {

    const { resetEmail } = useContext(AuthContext);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const email = queryParams.get('email') || '';

    const handleResetPassWord = (e) => {

        e.preventDefault();
        const emaill = e.target.emaill.value;
        resetEmail(emaill)
            .then(() => {
                toast.success('Password Reset Email Sent Successfully..!')
                setTimeout(() => {
                    window.location.href = 'https://mail.google.com';
                }, 1500);
            })
            .catch(error => {
                toast.error(error.code, ' ', error.message)
            })
    }

    return (
        <div className='flex justify-center items-center min-h-[80vh] bg-base-200 p-3 md:7 lg:p-10'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className='font-bold text-2xl text-center mt-5'>Reset Password</h1>

                <form onSubmit={handleResetPassWord} className="card-body">
                    <fieldset className="fieldset">

                        {/* email */}
                        <label className="label">Recheck Your Email</label>
                        <input
                            name='emaill'
                            type="email"
                            className="input w-full"
                            defaultValue={email}
                            placeholder="Enter your Email"
                            required
                        />

                        <button type='submit' className="btn btn-neutral mt-4">Click Here To Reset</button>

                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default ForgotPass;