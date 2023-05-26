/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import IconGoogle from "../icons/IconGoogle";
import Logo from "../icons/Logo";
import { route } from "../utils/constants";
import TextInput from "./TextInput";
import { useState } from "react";
import IconAespa from "../icons/IconAespa";

function Signin() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [disabledBtn, setDisabledBtn] = useState(true);

  const handleSubmit = () => {};

  const checkDisabledBtn = (v) => {
    if (v.trim() !== '') {
      setDisabledBtn(false);
    } else {
      setDisabledBtn(true);
    }
  };

  const handleChangeEmail = (value) => {
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (value.match(validRegex)) {
      setEmailError('');
      setDisabledBtn(false);
    } else {
      setEmailError('Invalid email address!');
      setDisabledBtn(true);
    }
    setEmail(value);
  };

  const handleChangePassword = (value) => {
    setPassword(value);
    checkDisabledBtn(value);
  };

  return (
    <div className="main-layout">
      <div className="left-content">
        <div className="content">
          <div className="top">
            <Link to={route.HOME}><Logo /></Link>
            Giihan
          </div>
          <div className="title">Welcome back!</div>
          <div className="desc">The faster you fill up, the faster you get a ticket</div>
          <TextInput
            label="Email"
            placeholder="Enter your email"
            className="common-input"
            onChange={handleChangeEmail}
          />
          <span className="error">{emailError}</span>
          <TextInput
            label="Password"
            placeholder="*********"
            type="password"
            className="common-input"
            onChange={handleChangePassword}
          />
          <div className="remember">
            <div className="d-flex">
              <input type="checkbox" id="remember" value="" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <Link className="link" to={route.FORGOT_PASSWORD}>Forgot password</Link>
          </div>
          <button className={`common-btn ${disabledBtn ? "disabled" : ""}`} onClick={handleSubmit}>
            Sign in
          </button>
          <button className="common-btn google-btn">
            <IconGoogle /> Sign in with Google
          </button>
        </div>
        <div className="bottom">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <span className="desc">Don't have an account?&nbsp;&nbsp;</span>
          <Link className="link" to={route.SIGN_UP}>Sign up</Link>
        </div>
      </div>
      <div className="right-content">
        <div className="top"><IconAespa /></div>
        <div className="bottom">
          <div className="name">Karina 카리나</div>
          <div className="desc">
            aespa(에스파)는 SM 엔터테인먼트 소속의 대한민국 4인조 다국적 걸그룹이다. SMCU 프로젝트의 첫 주자로 나서게 되다.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
