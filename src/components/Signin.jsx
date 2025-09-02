import { useState } from "react";
import { Link } from "react-router-dom";

function SignIn() {
  const [values, setValues] = useState({ email: "", password: "" });
  const [showPwd, setShowPwd] = useState(false);
  const [attempted, setAttempted] = useState(false);

  const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
  const emailError =
    !values.email ? "Email is required"
    : !isEmail(values.email) ? "Enter a valid email"
    : "";

  const passwordError =
    !values.password ? "Password is required"
    : values.password.length < 8 ? "Password must be at least 8 characters"
    : "";

  const isValid = !emailError && !passwordError;

  const handleChange = (e) => {
    const { id, value } = e.target;
    setValues((s) => ({ ...s, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAttempted(true);

    if (!isValid) return;
    alert("✅ Signed in");
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-start text-center px-4 pt-24">
      <h1 className="font-pixelify text-4xl sm:text-5xl text-auto mt-10 mb-28">
        👤 Welcome back Player! 👤
      </h1>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 space-y-6 text-left"
      >
        <div>
          <label htmlFor="email" className="font-pixelify mb-1 block">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={values.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-md border 
              ${attempted && emailError
                ? "border-red-500 focus:ring-red-400"
                : "border-gray-300 dark:border-gray-600 focus:ring-amber-400"}
              bg-gray-50 dark:bg-gray-700 text-black dark:text-white
              focus:outline-none focus:ring-2`}
          />
          {attempted && emailError && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{emailError}</p>
          )}
        </div>

        <div>
          <label htmlFor="password" className="font-pixelify mb-1 block">
            Password
          </label>

          <div className="relative">
            <input
              id="password"
              type={showPwd ? "text" : "password"}
              placeholder="••••••••"
              value={values.password}
              onChange={handleChange}
              className={`w-full pr-14 px-4 py-3 rounded-md border 
                ${attempted && passwordError
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 dark:border-gray-600 focus:ring-amber-400"}
                bg-gray-50 dark:bg-gray-700 text-black dark:text-white
                focus:outline-none focus:ring-2`}
            />

            <button
              type="button"
              onClick={() => setShowPwd((s) => !s)}
              className="absolute inset-y-0 right-2 my-auto h-9 px-3 rounded-md
                         bg-gray-200 hover:bg-gray-300 text-black
                         dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white
                         text-sm"
            >
              {showPwd ? "Hide" : "Show"}
            </button>
          </div>

          {attempted && passwordError && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{passwordError}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={!isValid}
          className={`w-full py-3 font-pixelify font-bold rounded-md text-white bg-amber-500
            focus:outline-none focus:ring-2 focus:ring-amber-400
            ${!isValid ? "cursor-not-allowed" : "hover:bg-amber-600"}`}
        >
          Sign In
        </button>

        <div className="flex flex-col gap-3 pt-4">
          <Link
            to="/signup"
            className="w-full py-3 font-pixelify font-bold rounded-md 
                       bg-gray-200 hover:bg-gray-300 text-black
                       dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white
                       focus:outline-none focus:ring-2 focus:ring-amber-400
                       inline-block text-center"
          >
            Sign Up
          </Link>

          <Link
            to="/kata-gallery"
            className="w-full py-3 font-pixelify font-bold rounded-md 
                       bg-gray-200 hover:bg-gray-300 text-black
                       dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white
                       focus:outline-none focus:ring-2 focus:ring-amber-400
                       inline-block text-center"
          >
            Continue as Guest
          </Link>
        </div>
      </form>
    </section>
  );
}

export default SignIn;