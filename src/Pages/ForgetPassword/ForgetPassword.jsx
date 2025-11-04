import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router';
import { sendPasswordResetEmail } from "firebase/auth";
import { Link , Navigate, replace } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase/firebase.init';

function ForgetPassword() {
    const navigator = useNavigate()

    const location = useLocation();
    useEffect(()=>{
    
            document.title = "ForgetPassword - Toy-Topia";
        },[]);

    const [email, setEmail] = useState(location.state?.email || '');



    const handleForgetPassword = async (e) =>{
        e.preventDefault();
        try {
            await sendPasswordResetEmail(auth, email);
            alert("Email Sent")
            window.open("https://www.gmail.com", "_blank");
            navigator('/login')
        } catch (error) {
            alert(error)
        }
        

    }


    return (
        <div className='h-min-screen m-4 flex justify-center items-center'>
            <div class="mt-7 bg-white md:w-1/3 w-1/2 rounded-xl shadow-lg  border-2 border-indigo-300">
                <div class="p-4 sm:p-7">
                    <div class="text-center">
                        <h1 class="block text-2xl font-bold text-gray-800 dark:text-white">Forgot password?</h1>
                        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                            Remember your password?
                            <Link class="text-blue-600 decoration-2 hover:underline font-medium" to={`/login`}>
                                Login here
                            </Link>
                        </p>
                    </div>

                    <div class="mt-5">
                        <form onSubmit={handleForgetPassword}>
                            <div class="grid gap-y-4">
                                <div>
                                    <label for="email" class="block text-sm font-bold ml-1 mb-2 text-blue-700">Email address</label>
                                    <div class="relative">
                                        <input 
                                        type="email" 
                                        id="email" 
                                        name="email" 
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value)
                                        }}
                                        class="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm" required aria-describedby="email-error"/>
                                    </div>
                                </div>
                                <button type="submit" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">Reset password</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default ForgetPassword