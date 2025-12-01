import LoginForm from "../Components/core/Auth/LoginForm";
import { useEffect } from "react";
import Footer from "../Components/core/Footer/Index";
const Login = () => {
     useEffect(() => {
       document.title = "Ritesh | Mishra | login";
     }, []);
  return (
    <section className="LoginPage min-h-screen flex items-center justify-center bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-evenly items-center gap-10">
          {/* Left Text Section */}
          <div className="flex flex-col items-center md:items-start justify-center py-10 max-w-md text-center md:text-left">
            <p className="text-4xl font-semibold capitalize mb-4">
              For using my services, you have to login
            </p>
            <p className="text-richblack-200">
              Please login to access all features and manage your account
              easily.
            </p>
          </div>

          {/* Login Form Section */}
          <div className="w-full max-w-md">
            <LoginForm />
          </div>
        </div>
      <Footer/>
      </div>
    </section>
  );
};

export default Login;
