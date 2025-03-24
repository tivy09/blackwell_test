"use client";

import { useState } from "react";
import styles from "./RegisterPageView.module.scss";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

type RegisterFormData = {
    firstName: string;
    lastName: string;
    email: string;
    mobile: string;
    country: string;
    password: string;
    confirmPassword: string;
};

const RegisterView = ({ registerFunction }: any) => {
    const router = useRouter();
    const [formData, setFormData] = useState<RegisterFormData>({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        country: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState<Partial<RegisterFormData>>({});

    const validate = (): boolean => {
        const newErrors: Partial<RegisterFormData> = {};

        if (!formData.firstName) newErrors.firstName = "First name is required";
        if (!formData.lastName) newErrors.lastName = "Last name is required";
        if (!formData.email) newErrors.email = "Email is required";
        if (!formData.mobile) newErrors.mobile = "Mobile number is required";
        if (!formData.country) newErrors.country = "Country is required";
        if (!formData.password) newErrors.password = "Password is required";
        if (!formData.confirmPassword) newErrors.confirmPassword = "Please confirm your password";
        if (formData.password !== formData.confirmPassword)
            newErrors.confirmPassword = "Passwords do not match";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleRegister = async (e: any) => {
        e.preventDefault();
        if (!validate()) return;

        const { firstName, lastName, email, mobile, country, password } = formData;
        const data = await registerFunction(firstName, lastName, email, mobile, country, password);
        toast.success(`Register Success and you may login now`);

        // console.log(data);
        if (!data.session || !data.user) {
            console.log('register fail');
            toast.success(`Register Fail Please try again`);
        }
        router.replace('/');
    };

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <form onSubmit={handleRegister} className={styles.formWrapper}>
            {["firstName", "lastName", "email", "mobile", "country", "password", "confirmPassword"].map((field) => (
                <div className="form-group mb-3" key={field}>
                    <label className="form-label text-capitalize">{field.replace(/([A-Z])/g, ' $1')}</label>
                    <input
                        name={field}
                        type={field.toLowerCase().includes("password") ? "password" : "text"}
                        className="form-control"
                        value={(formData as any)[field]}
                        onChange={handleChange}
                        required
                    />
                    {errors[field as keyof RegisterFormData] && (
                        <small className="text-danger">{errors[field as keyof RegisterFormData]}</small>
                    )}
                </div>
            ))}

            <div className={styles.socialLoginButtons}>
                <div className={styles.actionButtons}>
                    <button type="submit" className="btn btn-primary">
                        Register
                    </button>
                </div>
            </div>
        </form>
    );
};

export default RegisterView;
