import Button from "../components/Button";
import Footer from "../components/Footer";

const Login = () => {
  return (
    <section className="container mx-auto px-10">
      <div className="py-10">
        <img src="/logo.svg" className="size-14" />
      </div>
      <div>
        <h1 className="text-5xl font-bold mb-10">Happening now</h1>
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
            <span className="text-twitter-blue">Terms of Service </span>and{" "}
            <span className="text-twitter-blue">Privacy Policy</span>, including{" "}
            <span className="text-twitter-blue">Cookie Use</span>.
          </p>
        </div>
        <h2 className="text-xl font-semibold mb-3">Already have an account</h2>
        <Button text="Sign in" type="outline" className="text-twitter-blue" />
      </div>
      <Footer />
    </section>
  );
};

export default Login;
