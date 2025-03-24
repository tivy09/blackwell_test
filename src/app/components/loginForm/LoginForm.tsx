"use client";

import { useState } from "react";
import { useUserStore } from "@/store/user";
import { toast } from "react-toastify";
import styles from "./LoginForm.module.scss";
import { login } from "@/utils/function/helper";
import { useRouter } from "next/navigation";

interface Props {
  onClose: () => void;
}

type LoginFormData = {
  email: string;
  password: string;
};

const LoginForm = ({ onClose }:Props) => {
  const router = useRouter();
  const { setUser } = useUserStore();
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });

  const fakeUser = {
    name: "John Doe",
    email: formData.email,
  };

  const handleChange = (e:any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const { email, password } = formData;
    console.log(email, password);
    const result = await login(email, password);
    console.log(result);
    setUser(result);
    toast.success(`Hi ${fakeUser.name}, welcome to Blackwell, please verify your email immediately.`);
    onClose()
    
    router.refresh();
  };

  return (
    
    <form onSubmit={handleSubmit}>
      <div className="form-group mb-3">
        <label>Email address</label>
        <input
          name="email"
          type="email"
          className="form-control"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group mb-4">
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

      <div className={styles.socialLoginButtons}>
        <div className={styles.actionButtons}>

          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>

        <a
          href="https://accounts.google.com/o/oauth2/v2/auth?client_id=YOUR_GOOGLE_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=token&scope=email profile"
          className={styles.googleBtn}
        >
          <svg width="20" height="20" viewBox="0 0 533.5 544.3" xmlns="http://www.w3.org/2000/svg" className="me-2">
            <path fill="#4285f4" d="M533.5 278.4c0-17.6-1.6-35-4.7-51.8H272v98.1h147.1c-6.3 34.1-25 62.9-53.5 82.3l86.3 67.2c50.4-46.5 81.6-115.1 81.6-195.8z" />
            <path fill="#34a853" d="M272 544.3c72.6 0 133.6-24 178.2-64.9l-86.3-67.2c-24 16.2-54.7 25.7-91.9 25.7-70.7 0-130.6-47.8-152-112.1l-89 69.1c43.3 85.2 132 149.4 240.9 149.4z" />
            <path fill="#fbbc04" d="M120 325.8c-10.3-30.1-10.3-62.4 0-92.5l-89-69.1c-39 77.6-39 167.1 0 244.7l89-69.1z" />
            <path fill="#ea4335" d="M272 107.2c39.4-.6 77.3 13.7 106.2 40.6l79.3-79.3C419.2 24.5 346.9-2.7 272 0 163.1 0 74.3 64.2 31 149.4l89 69.1C141.4 155 201.3 107.2 272 107.2z" />
          </svg>
          Continue with Google
        </a>
        <a
          href="https://www.facebook.com/v17.0/dialog/oauth?client_id=YOUR_FACEBOOK_APP_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=token&scope=email,public_profile"
          className={styles.facebookBtn}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 24 24">
            <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24H12.82v-9.294H9.692V11.01h3.128V8.413c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.464.099 2.797.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.312h3.587l-.467 3.696h-3.12V24h6.116c.729 0 1.326-.597 1.326-1.326V1.326C24 .597 23.403 0 22.675 0z" />
          </svg>
          Continue with Facebook
        </a>
      </div>

    </form>
  );
};

export default LoginForm;
