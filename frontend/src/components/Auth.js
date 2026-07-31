import { useState } from "react";
import API from "../services/api";

function Auth({ onLoginSuccess }) {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        role: "user" // Default role
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const endpoint = isLogin ? "/auth/login" : "/auth/register";

        try {
            const response = await API.post(endpoint, formData);
            
            if (isLogin) {
                // Save Token & User in LocalStorage
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("user", JSON.stringify(response.data.user));
                
                alert("Login Successful!");
                onLoginSuccess(response.data.user);
            } else {
                alert("Registration Successful! Please login now.");
                setIsLogin(true);
            }
        } catch (error) {
            alert(error.response?.data?.message || "Authentication Failed!");
        }
    };

    return (
        <div className="admin" style={{ maxWidth: "420px", margin: "40px auto" }}>
            <h2>{isLogin ? "User Login" : "Create Account"}</h2>
            <form onSubmit={handleSubmit}>
                {!isLogin && (
                    <input
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                )}
                
                <input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />

                {!isLogin && (
                    <select 
                        name="role" 
                        value={formData.role} 
                        onChange={handleChange}
                        style={{
                            padding: "12px",
                            borderRadius: "8px",
                            border: "1.5px solid #e2e8f0",
                            background: "#f8fafc"
                        }}
                    >
                        <option value="user">User (Customer)</option>
                        <option value="admin">Admin (Manager)</option>
                    </select>
                )}

                <button type="submit">
                    {isLogin ? "LOG IN" : "REGISTER"}
                </button>
            </form>

            <p style={{ marginTop: "20px", textAlign: "center", fontSize: "14px", color: "#64748b" }}>
                {isLogin ? "Don't have an account? " : "Already registered? "}
                <span 
                    onClick={() => setIsLogin(!isLogin)} 
                    style={{ color: "#c6925e", cursor: "pointer", fontWeight: "700" }}
                >
                    {isLogin ? "Register Here" : "Login Here"}
                </span>
            </p>
        </div>
    );
}

export default Auth;