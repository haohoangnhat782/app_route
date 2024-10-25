// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const navbarStyle = {
  backgroundColor: "#4CAF50", // Thay đổi màu nền
  padding: "15px",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
};

const ulStyle = {
  listStyleType: "none",
  display: "flex",
  justifyContent: "center", // Canh giữa các liên kết
  margin: 0,
  padding: 0,
};

const liStyle = {
  margin: "0 20px",
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
  padding: "10px 15px",
  borderRadius: "5px",
  transition: "background-color 0.3s", // Thêm hiệu ứng chuyển tiếp
};

// Thêm hiệu ứng hover cho các liên kết
const linkHoverStyle = {
  backgroundColor: "#45a049", // Thay đổi màu khi hover
};

function Navbar() {
  return (
    <nav style={navbarStyle}>
      <ul style={ulStyle}>
        <li style={liStyle}>
          <Link to="/" style={linkStyle}>
            Trang Chủ
          </Link>
        </li>
        <li style={liStyle}>
          <Link to="/login" style={linkStyle}>
            Đăng Nhập
          </Link>
        </li>
        <li style={liStyle}>
          <Link to="/register" style={linkStyle}>
            Đăng Ký
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
