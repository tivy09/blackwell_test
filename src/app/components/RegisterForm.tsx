'use client';

import { useState } from 'react';

type RegisterFormData = {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  country: string;
  password: string;
  confirmPassword: string;
};

const RegisterForm = () => {
  const [formData, setFormData] = useState<RegisterFormData>({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    country: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row g-3">
        <div className="col-md-6">
          <label>First Name</label>
          <input
            name="firstName"
            type="text"
            className="form-control"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6">
          <label>Last Name</label>
          <input
            name="lastName"
            type="text"
            className="form-control"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-12">
          <label>Email</label>
          <input
            name="email"
            type="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-12">
          <label>Mobile</label>
          <input
            name="mobile"
            type="tel"
            className="form-control"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-12">
          <label>Country</label>
          <input
            name="country"
            type="text"
            className="form-control"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6">
          <label>Password</label>
          <input
            name="password"
            type="password"
            className="form-control"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6">
          <label>Confirm Password</label>
          <input
            name="confirmPassword"
            type="password"
            className="form-control"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="modal-footer mt-4">
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
