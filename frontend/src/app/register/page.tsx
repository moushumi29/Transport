"use client"

import LeftImage from '@src/components/login/LeftImage'
import { LockKeyhole, Mail, UserRound } from "lucide-react";
import Link from 'next/link';
import React from 'react'

const RegisterPage = () => {
  return (
      <div className="login-page flex h-screen">
      <div className="w-1/2 h-full">
        <LeftImage />
      </div>

      <div className="w-1/2 flex flex-col p-34">
        <h3 className='text-2xl text-green-500 font-semibold'>Create an account</h3>
        <div className=''>
            <form action="" method='post' className='flex flex-col gap-6 mt-6'>
                <div className=''>
                <label htmlFor='username' className='custom-label'><UserRound size={18}/> Username<span className='text-red-600'>*</span></label>
                <input type="text" id="username" name="username" placeholder='Username' className='input'/>
                </div>
                <div className=''>
                <label htmlFor='email' className='custom-label'><Mail size={18}/> Email<span className='text-red-600'>*</span></label>
                <input type="email" id="email" name="email" placeholder='Email' className='input'/>
                </div>
                <div className=''>
                <label htmlFor='password' className='custom-label'><LockKeyhole size={18}/> Password<span className='text-red-600'>*</span></label>
                <input type="password" id="password" name="password" placeholder='Password' className='input'/>
                </div>
                <button type='submit' className='custom-button'>Sign Up</button>
            </form>
            <div className='mt-4 text-center'>Already a member ? <Link href="/login"  className="text-green-500 font-medium hover:underline">Sign In</Link></div>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
