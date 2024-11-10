import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./FormStyles.module.css";
import clsx from "clsx";

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
    <div className={clsx(styles["form-container"])}>
      <h2>Đăng Ký</h2>
      {success && <p className={clsx(styles.success)}>{success}</p>}

      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="User Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className={clsx(styles.input)}
        />
        {errors.userName && (
          <p className={clsx(styles.error)}>{errors.userName}</p>
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={clsx(styles.input)}
        />
        {errors.email && <p className={clsx(styles.error)}>{errors.email}</p>}

        <input
          type="text"
          placeholder="Phone"
          value={sdt}
          onChange={(e) => setSdt(e.target.value)}
          className={clsx(styles.input)}
        />
        {errors.sdt && <p className={clsx(styles.error)}>{errors.sdt}</p>}

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
          Đăng Ký
        </button>
        <p>
          <Link to="/login" className={clsx(styles.link)}>
            Đăng Nhập
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
