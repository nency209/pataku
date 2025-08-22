export default function Register() {
  return (
    <div className="w-full bg-white py-24">
      <div className="max-w-lg mx-auto bg-surface  px-8  py-10 text-center">
        <h1 className="text-black">Register</h1>
        <p className="text-muted my-6">
          Please login using account detail below.
        </p>
        <form className="space-y-4">
          <div>
            <input
              className="bg-white placeholder-black px-3 py-2 text-sm outline-none w-full"
              placeholder="First Name"
            />
          </div>
          <div>
            <input
              className="bg-white placeholder-black px-3 py-2 text-sm outline-none w-full"
              placeholder="Last Name"
            />
          </div>
          <div>
            <input
              className="bg-white placeholder-black px-3 py-2 text-sm outline-none w-full"
              placeholder="Email"
            />
          </div>
          <div>
            <input
              className="bg-white placeholder-black px-3 py-2 text-sm outline-none w-full"
              placeholder="Password"
            />
          </div>
          <div className="flex">
            <button
              type="submit"
              className="bg-black text-white px-6 py-2  float-start"
            >
              Create
            </button>
          </div>
          <div className="text-sm text-gray-600">
            <a href="#" className="text-black hover:underline float-start">
              Return to store
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
