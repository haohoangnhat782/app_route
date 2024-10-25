import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./FormStyles.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!email) {
      newErrors.email = "Vui lòng nhập email.";
    }
    if (!password) {
      newErrors.password = "Vui lòng nhập mật khẩu.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSuccess("");
    } else {
      setErrors({});
      setSuccess("Đăng nhập thành công!");
      console.log("Đăng nhập thành công!", { email, password });
    }
  };

  return (
    <div className="form-container">
      <h2>Đăng Nhập</h2>
      <form onSubmit={handleLogin}>
        {success && <p className="success">{success}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <input
          type="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p className="error">{errors.password}</p>}

        <button type="submit">Đăng Nhập</button>
        <p>
          Chưa có tài khoản? <Link to="/register">Đăng Ký</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
