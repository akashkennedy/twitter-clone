import Button from "../components/Button";
import Footer from "../components/Footer";

const Login = () => {
  return (
    <>
      <section className="container mx-auto px-10 lg:flex lg:items-center lg:justify-between lg:h-screen lg:gap-10 ">
        <div className="py-10">
          <img src="/logo.svg" className="size-14 lg:size-[26rem]" />
        </div>
        <div>
          <h1 className="text-5xl font-bold mb-10 md:text-7xl w-1/2 lg:w-full">
            Happening now
          </h1>
          <div className="md:w-1/2">
            {" "}
            <h2 className="text-3xl font-bold mb-5">Join today</h2>
            <div className="mb-12">
              <Button
                type="outline"
                text="Sign Up with Google"
                isSocial={true}
                img="/google.svg"
              />
              <Button
                type="outline"
                isSocial={true}
                text="Sign Up with Apple"
                img="/apple.svg"
              />
              <p className="text-center">or</p>
              <Button text="Create Account" type="filled" />
              <p className="text-sm text-twitter-gray text-left">
                By signing up, you agree to the{" "}
                <span className="text-twitter-blue cursor-pointer">
                  Terms of Service{" "}
                </span>
                and{" "}
                <span className="text-twitter-blue cursor-pointer">
                  Privacy Policy
                </span>
                , including{" "}
                <span className="text-twitter-blue cursor-pointer">
                  Cookie Use
                </span>
                .
              </p>
            </div>
            <h2 className="text-xl font-semibold mb-3">
              Already have an account
            </h2>
            <Button
              text="Sign in"
              type="outline"
              className="text-twitter-blue"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Login;
