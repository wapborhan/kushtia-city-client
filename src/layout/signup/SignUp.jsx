import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import SocialSignIn from "../signin/SocialSignIn";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SignUp = () => {
  const axiosPublic = useAxiosPublic();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (formData) => {
    createUser(formData.email, formData.password).then((result) => {
      const loggedUser = result.user;
      // console.log(loggedUser);
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
          console.log(userInfo);
          // axiosPublic.post("/user", userInfo).then((res) => {
          //   if (res.status === 200) {
          //     // console.log("user added to the database");
          //     // reset();
          //     navigate("/");
          //   }
          // });
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <div
      style={{
        backgroundImage: `url(/images/bg.png)`,
      }}
    >
      <div
        className="contact-sec5 space"
        data-bg-src="assets/img/bg/contact_bg_5.png"
        style={{
          backgroundImage: "url(assets/img/bg/contact_bg_7.png)",
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
                    <label className="text-sm font-semibold ">ইমেল</label>
                    <input
                      type="email"
                      name="email"
                      autoFocus
                      defaultValue="borhanuddin979@gmail.com"
                      className="form-control"
                      placeholder="ইমেল"
                    />
                  </div>
                  <div className="form-group col-md-12">
                    <label className="text-sm font-semibold ">ইমেল</label>
                    <input
                      type="email"
                      name="email"
                      autoFocus
                      defaultValue="borhanuddin979@gmail.com"
                      className="form-control"
                      placeholder="ইমেল"
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
                      // onClick={() => setLoading(true)}
                    >
                      {/* {loading ? (
                        <>
                          লগইন হচ্ছে
                          <TbLoader3 className="text-[1.8rem] animate-spin  ms-2" />
                        </>
                      ) : (
                        <>
                          লগইন <i className="far fa-arrow-right ms-2"></i>
                        </>
                      )} */}
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
      <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
        <div className="p-5 bg-white md:flex-1">
          <h3 className="my-4 text-2xl font-semibold text-gray-700">
            Create Account
          </h3>
          <form className="flex flex-col space-y-5">
            <div className="flex flex-col space-y-1">
              <label className="text-sm font-semibold text-gray-500">
                Username
              </label>
              <input
                type="text"
                {...register("username", { required: true })}
                name="username"
                autoFocus
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
              {errors.name && (
                <span className="text-red-600">Username is required</span>
              )}
            </div>
            <div className="flex flex-col space-y-1">
              <label className="text-sm font-semibold text-gray-500">
                Email address
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                name="email"
                autoFocus
                // defaultValue="borhanuddin979@gmail.com"
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-sm font-semibold text-gray-500"
                >
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 12,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
                placeholder="password"
                // defaultValue="Abc@123"
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-600">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600">Password must be 6 characters</p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-600">
                  Password must be less than 12 characters
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-600">
                  Password must have one Uppercase one lower case, one number
                  and one special character (!@#$&*).
                </p>
              )}
            </div>
            <div>
              <button
                type="submit"
                // disabled={disabled}
                value="Login"
                className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-primary rounded-md shadow hover:bg-secondary focus:outline-none focus:ring-blue-200 focus:ring-4"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
