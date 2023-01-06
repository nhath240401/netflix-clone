import { useRef } from 'react';
import '../App.css';

const Login = () => {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const register = (e) => {
    e.preventDefault();

  } 

  const signIn = (e) => {
    e.preventDefault();
  } 

  
  return (
    <div className="">
        <div className="mb-5 p-5 flex flex-col mx-5 md:items-center justify-center bg-[#111] md:mx-[400px] text-white opacity-90">
          <h1 className='my-5 text-2xl font-bold uppercase'>Sign In</h1>
          <input ref={emailRef} type="text" placeholder='Email or phone number' className='p-3 py-4 my-2 w-full] sm:w-[300px] rounded-md bg-zinc-800' />
          <input ref={passwordRef} type="password" placeholder='Password' className='p-3 py-4 my-2 w-full sm:w-[300px] rounded-md bg-zinc-800' />

          <button onClick={signIn}
          className='mt-10 p-3 py-4 my-2 w-full sm:w-[300px] rounded-md bg-red-600 text-lg'>Sign In</button>
          <div className="flex justify-between w-full sm:px-[100px] text-zinc-400 mb-12">
              <div className="">
                <input type="checkbox" className='mr-1'/>
                <label>Remember me</label>
              </div>
              <p className='cursor-pointer hover:underline'>Need help?</p>
          </div>

          <div className="flex w-full md:pl-[100px] mb-2 text-white">
              <p className='mr-1'>New to Netflix?</p>
              <button onClick={register}
               className='cursor-pointer hover:underline'>Sign up now</button>
          </div>
        </div>

        <div className='p-5 text-white bg-black border-t border-zinc-200'>
              <p className='mb-5'>Questions? Contact us.</p>

              <div className="grid grid-cols-2 cursor-pointer">
                  <p className='my-2 hover:underline'>FAQ</p>
                  <p className='my-2 hover:underline'>Help Center</p>
                  <p className='my-2 hover:underline'>Terms of Use</p>
                  <p className='my-2 hover:underline'>Privacy</p>
                  <p className='my-2 hover:underline'>Cookie Preferences</p>
                  <p className='my-2 hover:underline'>Corporate Information</p>
              </div>

              <select className='p-2 mt-5 text-gray-300 bg-black border-2 border-gray-300'>
                <option value="">English</option>
                <option value="">Tiếng Việt</option>
              </select>
        </div>
    </div>
  )
}

export default Login