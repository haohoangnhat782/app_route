import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./FormStyles.module.css";
import clsx from "clsx";
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
    <div className={clsx(styles["form-container"])}>
      <h2>Đăng Nhập</h2>
      <form onSubmit={handleLogin}>
        {success && <p className={clsx(styles.success)}>{success}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={clsx(styles.input)}
        />
        {errors.email && <p className={clsx(styles.error)}>{errors.email}</p>}

        <input
          type="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={clsx(styles.input)}
        />
        {errors.password && (
          <p className={clsx(styles.error)}>{errors.password}</p>
        )}

        <button type="submit" className={clsx(styles.button)}>
          Đăng Nhập
        </button>
        <p>
          Chưa có tài khoản?{" "}
          <Link to="/register" className={clsx(styles.link)}>
            Đăng Ký
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
