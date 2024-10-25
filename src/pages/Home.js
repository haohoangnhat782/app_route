import React from "react";

const homeContainerStyle = {
  maxWidth: "600px",
  margin: "50px auto",
  padding: "20px",
  background: "white",
  borderRadius: "8px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  textAlign: "center",
};

const headingStyle = {
  color: "#333",
};

const paragraphStyle = {
  color: "#666",
  lineHeight: "1.5",
};

function Home() {
  return (
    <div style={homeContainerStyle}>
      <h1 style={headingStyle}>Chào Mừng Đến Với Ứng Dụng Của Chúng Tôi</h1>
      <p style={paragraphStyle}>
        Đây là một trang chủ đơn giản được xây dựng bằng React.
      </p>
      <p style={paragraphStyle}>Hãy đăng nhập hoặc đăng ký để tiếp tục.</p>
    </div>
  );
}

export default Home;
