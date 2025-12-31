import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import toast from 'react-hot-toast';

const UpdateProfile = () => {

    const {updateUser, setUser, user} = use(AuthContext);
    const navigate = useNavigate();

    const constHandleSubmit = (e) =>{

        e.preventDefault();
        const displayName = e.target.name.value;
        const photoURL = e.target.photoURL.value;

        updateUser({displayName, photoURL})
        .then(() =>{
            toast.success('Profile Updated..!')
            setUser({...user, displayName, photoURL});
            navigate('/profile')
        })
        .catch(error => {
            toast.error(error.message)
        })
    }

    return (
        <div className='flex justify-center items-center min-h-[80vh] bg-base-200 p-10'>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <h1 className='font-bold text-2xl text-center mt-5'>Update Your Profile</h1>
        
                        <form onSubmit={constHandleSubmit} className="card-body">
                            <fieldset className="fieldset">
        
                                <label className="label">Name</label>
                                <input
                                    name='name'
                                    type="text"
                                    className="input w-full"
                                    placeholder="Name Here"
                                    required
                                />
        
                                <label className="label">photoURL</label>
                                <input
                                    name='photoURL'
                                    type="text"
                                    className="input w-full"
                                    placeholder="Photo URL Here"
                                    required
                                />
        
                                <button type='submit' className="btn btn-neutral mt-4">Update</button>
        
                            </fieldset>
                        </form>
                    </div>
                </div>
    );
};

export default UpdateProfile;