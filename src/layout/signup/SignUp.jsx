import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import SocialSignIn from "../signin/SocialSignIn";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useState } from "react";
import { TbLoader3 } from "react-icons/tb";

const SignUp = () => {
  const axiosPublic = useAxiosPublic();
  const [loading, setLoading] = useState(false);
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (formData) => {
    setLoading(true); // ✅ Set loading only when form is valid
    createUser(formData.email, formData.password)
      .then((result) => {
        const loggedUser = result.user;
        updateUserProfile(
          formData.username,
          "https://raw.githubusercontent.com/wapborhan/kushtiabd-client/refs/heads/main/public/images/avatar.png"
        )
          .then(() => {
            const userInfo = {
              username: formData.username,
              photo: formData.photoURL,
              email: formData.email,
              badge: "bronze",
              role: "user",
            };
            setLoading(false);
            console.log(userInfo);
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
            setLoading(false);
          });
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <div
      className="contact-sec5 spaces"
      data-bg-src="assets/img/bg/contact_bg_5.png"
      style={{
        backgroundImage: "url(assets/img/bg/contact_bg_7.png)",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-xl-1 text-center text-xl-start">
            <div className="title-area">
              <span className="sub-title2">
                <img
                  src="assets/img/theme-img/title_icon5_white.svg"
                  alt="shape"
                />
                কোন অ্যাকাউন্ট নেই?{" "}
                <Link
                  to="/signin"
                  className="underline"
                  style={{ color: "#fff" }}
                >
                  শুরু করুন!
                </Link>
              </span>{" "}
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="input-transparent ajax-contact"
            >
              <div className="row">
                <div className="form-group col-md-12">
                  <div className="d-flex justify-content-between align-items-center">
                    <label className="text-sm font-semibold ">ইউজারনেম</label>
                    {errors.username && (
                      <span style={{ color: "red" }}>ইউজারনেম আবশ্যক</span>
                    )}
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="ইউজারনেম"
                    name="username"
                    {...register("username", { required: true })}
                    autoFocus
                  />
                </div>
                <div className="form-group col-md-12">
                  <label className="text-sm font-semibold ">ইমেল</label>
                  <input
                    type="email"
                    // defaultValue="borhanuddin979@gmail.com"
                    className="form-control"
                    placeholder="ইমেল"
                    {...register("email", { required: true })}
                    name="email"
                    autoFocus
                  />{" "}
                  {errors.email && (
                    <span className="text-red-600">ইমেল আবশ্যক</span>
                  )}
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
                    {errors.password?.type === "required" && (
                      <p className="text-red-600">Password is required</p>
                    )}
                    {errors.password?.type === "minLength" && (
                      <p className="text-red-600">
                        Password must be 6 characters
                      </p>
                    )}
                    {errors.password?.type === "maxLength" && (
                      <p className="text-red-600">
                        Password must be less than 12 characters
                      </p>
                    )}
                    {errors.password?.type === "pattern" && (
                      <p className="text-red-600">
                        Password must have one Uppercase one lower case, one
                        number and one special character (!@#$&*).
                      </p>
                    )}
                  </div>
                  <input
                    type="password"
                    placeholder="Password"
                    className="form-control"
                    // defaultValue="Abc@123"
                    name="password"
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 12,
                      pattern:
                        /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                    })}
                  />
                </div>
                <div className="form-btn col-12">
                  <button
                    className="th-btn style3 rounded-10 w-100"
                    type="submit"
                    value="Login"
                    // onClick={() => setLoading(true)}
                  >
                    {loading ? (
                      <>
                        সাইন আপ হচ্ছে
                        <TbLoader3 className="text-[1.8rem] animate-spin  ms-2" />
                      </>
                    ) : (
                      <>
                        সাইন আপ <i className="far fa-arrow-right ms-2"></i>
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

export default SignUp;
