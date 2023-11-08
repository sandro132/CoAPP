import React, { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

const Union = () => {
  const [showPwd, setShowPwd] = useState(false);
  const [password, setPassword] = useState('');

  const handleTogglePwdVisibility = () => {
    setShowPwd(!showPwd);
  };

  const inputType = showPwd ? 'text' : 'password';
  const eyeIcon = showPwd ? <AiFillEye className='text-2xl ml-2 text-gray-600' /> : <AiFillEyeInvisible className='text-2xl ml-2 text-gray-600' />;

  return (
    <div className="w-full mt-3 p-3 border rounded-xl bg-gray-50 items-center justify-center flex flex-row">
      <input
        type={inputType}
        placeholder="Introduce tu contraseña"
        className="w-full p-1 bg-gray-50 "
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div onClick={handleTogglePwdVisibility}>
        {eyeIcon}
      </div>
    </div>
  );
};

export default Union;