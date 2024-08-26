"use client";
import React, { useState } from 'react';
import axios from 'axios';
import styles from './register.module.css';

export default function Register() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
    password: '',
    loginEmail: '',
    loginPassword: '',
  });

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateName = (name) => {
    const regex = /^[a-zA-Z ]*$/;
    return regex.test(name);
  };

  const validateMobileNumber = (mobile) => {
    const regex = /^[6-9]\d{9}$/; // Indian mobile number regex
    return regex.test(mobile);
  };

  const validatePassword = (password) => {
    // Password should be minimum 6 characters with at least one capital letter, one small letter, one symbol, and one number
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    return regex.test(password);
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!validateName(fullName)) {
      newErrors.fullName = 'Invalid name. Name should contain only alphabets.';
    }
    if (!validateEmail(email)) {
      newErrors.email = 'Invalid email';
    }
    if (!validateMobileNumber(mobileNumber)) {
      newErrors.mobileNumber = 'Invalid mobile number';
    }
    if (!validatePassword(password)) {
      newErrors.password = 'Invalid password. Password should be minimum 6 characters with at least one capital letter, one small letter, one symbol, and one number';
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await axios.post('http://localhost:3001/api/v1/signup', {
          fullName,
          email,
          mobileNumber,
          password,
        });
        console.log('Registration successful:', response.data);
      } catch (error) {
        console.error('Registration failed:', error);
      }
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.label1}>{isLogin ? 'Login' : 'Registration Form'}</h1>
      <form onSubmit={isLogin ? handleLoginSubmit : handleRegisterSubmit}>
        {!isLogin && (
          <div>
            <label className={styles.label}>Full Name:</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
            {errors.fullName && <p className={styles.error}>{errors.fullName}</p>}
          </div>
        )}
        <div>
          <label className={styles.label}>Email:</label>
          <input
            type="email"
            value={isLogin ? loginEmail : email}
            onChange={(e) => (isLogin ? setLoginEmail(e.target.value) : setEmail(e.target.value))}
            required
          />
          {errors.email && <p className={styles.error}>{errors.email}</p>}
        </div>
        <div>
          <label className={styles.label}>Mobile Number:</label>
          <input
            type="tel"
            value={isLogin ? '' : mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            required
          />
          {errors.mobileNumber && <p className={styles.error}>{errors.mobileNumber}</p>}
        </div>
        <div>
          <label className={styles.label}>Password:</label>
          <input
            type="password"
            value={isLogin ? loginPassword : password}
            onChange={(e) => (isLogin ? setLoginPassword(e.target.value) : setPassword(e.target.value))}
            required
          />
          {errors.password && <p className={styles.error}>{errors.password}</p>}
        </div>
        <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
        <p>
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button type="button" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Register here' : 'Login here'}
          </button>
        </p>
      </form>
    </div>
  );
}
