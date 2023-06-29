import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input 
        type='text' 
        value={name} 
        onChange={(e)=>setName(e.target.value)}
      />

      <label>Phone:</label>
      <input 
        type='tel' 
        value={phone}
        patter="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        onChange={(e)=>setPhone(e.target.value)}
      />

      <label>Email:</label>
      <input 
        type='email'
        value={email}
        onChange={(e)=>setEmail(e.target.value)} 
      />

      <button type='submit'> Submit </button>
    </form>
  );
};

