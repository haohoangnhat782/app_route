import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./FormStyles.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [sdt, setSdt] = useState("");
  const [success, setSuccess] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    userName: "",
    sdt: "",
  });

  const handleRegister = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!userName) newErrors.userName = "Vui lòng nhập tên người dùng.";
    if (!email) newErrors.email = "Vui lòng nhập email.";
    if (!sdt) newErrors.sdt = "Vui lòng nhập số điện thoại.";
    if (!password) newErrors.password = "Vui lòng nhập mật khẩu.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      setSuccess("Đăng ký thành công!");
    }
  };

  return (
    <div className="form-container">
      <h2>Đăng Ký</h2>
      {success && <p className="success">{success}</p>}

      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="User Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        {errors.userName && <p className="error">{errors.userName}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <input
          type="text"
          placeholder="Phone"
          value={sdt}
          onChange={(e) => setSdt(e.target.value)}
        />
        {errors.sdt && <p className="error">{errors.sdt}</p>}

        <input
          type="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p className="error">{errors.password}</p>}

        <button type="submit">Đăng Ký</button>
        <p>
          <Link to="/login">Đăng Nhập</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
