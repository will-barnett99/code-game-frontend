import { useState } from "react";

function Signup() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [attempted, setAttempted] = useState(false);

  const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
  const errors = {
    firstName: !values.firstName ? "First name is required" : "",
    lastName: !values.lastName ? "Last name is required" : "",
    email: !values.email
      ? "Email is required"
      : !isEmail(values.email)
      ? "Enter a valid email"
      : "",
    password: !values.password
      ? "Password is required"
      : values.password.length < 8
      ? "Password must be at least 8 characters"
      : "",
  };

  const isValid = !Object.values(errors).some(Boolean);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setValues((s) => ({ ...s, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAttempted(true);

    if (!isValid) return;
    alert("✅ Account created");
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-start text-center px-4 pt-24">
      <h1 className="font-pixelify text-4xl sm:text-5xl text-auto mt-10 mb-28">
        📝 Create your account 📝 
      </h1>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 space-y-6 text-left"
      >
        <div>
          <label htmlFor="firstName" className="font-pixelify mb-1 block">
            First Name
          </label>
          <input
            id="firstName"
            type="text"
            placeholder="Jane"
            value={values.firstName}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-md border 
              ${attempted && errors.firstName
                ? "border-red-500 focus:ring-red-400"
                : "border-gray-300 dark:border-gray-600 focus:ring-amber-400"}
              bg-gray-50 dark:bg-gray-700 text-black dark:text-white
              focus:outline-none focus:ring-2`}
          />
          {attempted && errors.firstName && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.firstName}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName" className="font-pixelify mb-1 block">
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            placeholder="Doe"
            value={values.lastName}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-md border 
              ${attempted && errors.lastName
                ? "border-red-500 focus:ring-red-400"
                : "border-gray-300 dark:border-gray-600 focus:ring-amber-400"}
              bg-gray-50 dark:bg-gray-700 text-black dark:text-white
              focus:outline-none focus:ring-2`}
          />
          {attempted && errors.lastName && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.lastName}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="font-pixelify mb-1 block">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={values.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-md border 
              ${attempted && errors.email
                ? "border-red-500 focus:ring-red-400"
                : "border-gray-300 dark:border-gray-600 focus:ring-amber-400"}
              bg-gray-50 dark:bg-gray-700 text-black dark:text-white
              focus:outline-none focus:ring-2`}
          />
          {attempted && errors.email && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="password" className="font-pixelify mb-1 block">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="••••••••"
            value={values.password}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-md border 
              ${attempted && errors.password
                ? "border-red-500 focus:ring-red-400"
                : "border-gray-300 dark:border-gray-600 focus:ring-amber-400"}
              bg-gray-50 dark:bg-gray-700 text-black dark:text-white
              focus:outline-none focus:ring-2`}
          />
          {attempted && errors.password && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.password}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={!isValid}
          className={`w-full py-3 font-pixelify font-bold rounded-md text-white bg-amber-500
            focus:outline-none focus:ring-2 focus:ring-amber-400
            ${!isValid ? "cursor-not-allowed" : "hover:bg-amber-600"}`}
        >
          Sign Up
        </button>
      </form>
    </section>
  );
}

export default Signup;