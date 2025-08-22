export default function Login() {
  return (
    <div className="w-full bg-white py-24">
      <div className="max-w-lg mx-auto bg-gray-50  px-8  py-10 text-center">
        {/* Title */}
        <h1 className="text-2xl font-semibold text-gray-800 my-2">Login</h1>
        <p className="text-muted my-6">
          Please login using account detail below.
        </p>

        {/* Login Form */}
        <form className="bg-white shadow py-8 px-6 rounded text-left space-y-4">
          <div className="">
            <input
              type="email"
              className="w-full px-3 py-2 text-sm outline-none placeholder-black"
              placeholder="Email"
            />
          </div>

          <div className="">
            <input
              type="password"
              className="w-full text-black outline-none px-3 py-2 text-sm placeholder-black"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex justify-between items-center mb-4 text-sm">
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
            >
              Sign In
            </button>
            <a href="#" className="text-muted hover:underline">
              Forgot your password?
            </a>
          </div>

          <div className="text-sm text-gray-600">
            Don’t have an account?{" "}
            <a href="#" className="text-black hover:underline">
              Create account
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
