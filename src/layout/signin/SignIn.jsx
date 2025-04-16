import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialSignIn from "./SocialSignIn";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { TbLoader3 } from "react-icons/tb";

const SignIn = () => {
  const { logIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    logIn(email, password)
      .then((result) => {
        const user = result.user;
        if (user) {
          navigate(location?.state ? location?.state : "/");
          setLoading(false);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div
      className="contact-sec5 spaces"
      data-bg-src="assets/img/bg/contact_bg_5.png"
      style={{
        backgroundImage: "url(assets/img/bg/contact_bg_5.png)",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-xl-5 text-center text-xl-start">
            <div className="title-area">
              <span className="sub-title2">
                <img
                  src="assets/img/theme-img/title_icon5_white.svg"
                  alt="shape"
                />
                কোন অ্যাকাউন্ট নেই?{" "}
                <Link
                  to="/signup"
                  className="underline"
                  style={{ color: "#fff" }}
                >
                  শুরু করুন!
                </Link>
              </span>{" "}
            </div>
            <form
              onSubmit={handleLogin}
              className="input-transparent ajax-contact"
            >
              <div className="row">
                <div className="form-group col-md-12">
                  <label className="text-sm font-semibold ">ইমেল</label>
                  <input
                    type="email"
                    name="email"
                    autoFocus
                    defaultValue="borhanuddin979@gmail.com"
                    className="form-control"
                    placeholder="Email Address"
                  />
                </div>
                <div className="form-group col-md-12">
                  <div
                    className="flex items-center justify-between"
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <label
                      htmlFor="password"
                      className="text-sm font-semibold text-gray-500"
                    >
                      পাসওয়ার্ড
                    </label>
                    <a
                      href="#"
                      className="text-sm text-primary hover:underline focus:text-secondary"
                    >
                      পাসওয়ার্ড ভুলে গেছেন?
                    </a>
                  </div>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form-control"
                    defaultValue="Abc@123"
                  />
                </div>
                <div className="form-btn col-12">
                  <button
                    className="th-btn style3 rounded-10 w-100"
                    type="submit"
                    value="Login"
                    onClick={() => setLoading(true)}
                  >
                    {loading ? (
                      <>
                        লগইন হচ্ছে
                        <TbLoader3 className="text-[1.8rem] animate-spin  ms-2" />
                      </>
                    ) : (
                      <>
                        লগইন <i className="far fa-arrow-right ms-2"></i>
                      </>
                    )}
                  </button>
                  <div
                    className="flex flex-col space-y-5"
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "1rem",
                      marginTop: "1rem",
                      color: "#fff",
                    }}
                  >
                    অথবা লগইন করুন
                    <div
                      className="flex flex-col space-y-4"
                      style={{ width: "100%" }}
                    >
                      <SocialSignIn />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
