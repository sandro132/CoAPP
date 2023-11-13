import React, { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

const Union = (seccion) => {
  const [showPwd, setShowPwd] = useState(false);
  const [password, setPassword] = useState('');
  const [repetirPassword, setRepetirPassword] = ('');
  const handleTogglePwdVisibility = () => {
    setShowPwd(!showPwd);
  };

  const inputType = showPwd ? 'text' : 'password';
  const eyeIcon = showPwd ? <AiFillEye className='text-2xl ml-2 text-gray-600' /> : <AiFillEyeInvisible className='text-2xl ml-2 text-gray-600' />;

  const valueInput = seccion === "password" ? password : repetirPassword;

  const onChangeInput = (e) => {
    if(seccion === "password") {
      setPassword(e.target.value)
    } else {
      if(seccion === "repetir")
      setRepetirPassword(e.target.value)
    }
  }

  return (
    <div className="w-full mt-3 p-3 border rounded-xl bg-gray-50 items-center justify-center flex flex-row">
      <input
        id="password"
        type={inputType}
        placeholder="Introduce tu contraseña"
        className="w-full p-1 bg-gray-50"
        value={valueInput}
        onChange={onChangeInput}
      />
      <div onClick={handleTogglePwdVisibility}>
        {eyeIcon}
      </div>
    </div>
  );
};

export default Union;