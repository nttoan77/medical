import classNames from "classnames/bind";
import style from "./index.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Wrapper } from "../../components/Popper";

const cx = classNames.bind(style);

function Login() {
  const navigate = useNavigate();

  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  const handleLogin = () => {
    navigate("/");
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("form")}>
        <div className={cx("font-login")}>
          <div className={cx("header")}>Đăng nhập tài khoản</div>
          <div className={cx("content")}>User Login</div>
          <div className={cx("login-form")}>
            <div className={cx("input-content-1")}>
              <div className={cx("name")}>Email</div>
              <input
                className={cx("input-name")}
                placeholder="Nhập email của bạn "
                name="user-name"
                required
              />
            </div>
            <div className={cx("input-content-1", "asdf")}>
              <div className={cx("name")}>Mật khẩu</div>
              <input
                className={cx("input-name")}
                placeholder="Nhập mật khẩu "
                name="user-name"
                required
              />
            </div>

            <button className={cx("submit")} onClick={handleLogin}>
              Đăng nhập
            </button>
          </div>
          <div className={cx("footer")}>
            <div className={cx('footer-footer')}>
              <div className={cx("footer-content")}>
                <Link className={cx("link")} to="/medical">
                  Đăng ký tài khoản
                </Link>
              </div>
              <div className={cx("footer-content")}>
                <Link className={cx("link")} to="/forgotpassword">
                  Quên mật khẩu
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
