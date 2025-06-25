import style from "./medical.module.scss";
import classNames from "classnames/bind";
import { Wrapper } from "../../components/Popper";
import { Link } from "react-router-dom";

const cx = classNames.bind(style);

const ArrMedical = [
  { name: "Họ và tên ", title: "Nguyễn Thanh A " },
  { name: "Email ", title: "A4567@gmail.com" },
  { name: "Số điện thoại ", title: "098756413" },
  { name: "Mật khẩu ", title: "Hãy nhập mật khẩu vào đây." },
  { name: "Xác nhận mật khẩu ", title: "Xác minh mật khẩu vừa nhập." },
];

function Medical() {
  return (
    <div className={cx("wrapper")}>
      <Wrapper className={cx("wrapper-wrapper")}>
        <div className={cx("header")}>
          <div className={cx("header-content")}> Đăng ký tài khoản</div>
        </div>
        <div className={cx("main")}>
          <div className={cx("main-content")}>
            {ArrMedical.map((item, index) => {
              return (
                <div className={cx("main-content-item")} key={index}>
                  <div className={cx("main-content-item-c")}>{item.name}</div>
                  <div className={cx("main-content-item-i")}>
                    <input
                      className={cx("main-content-item-i-i")}
                      placeholder={item.title}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className={cx("footer")}>
          <div className={cx("footer-item")}>
            <input className={cx("footer-item-input")} type="checkbox" />
            <div className={cx("footer-item-content")}>
              Tôi đồng ý với điều khoản sử dụng
            </div>
          </div>
          <div className={cx("footer-btn")}>
            <Link to='/login' className={cx('link')}>
            <div className={cx("footer-btn-btn",'register')}>
              Đăng ký
            </div>
            </Link>
                <div className={cx("footer-btn-btn",'re-enter')}>
                  Nhập lại
                </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default Medical;
