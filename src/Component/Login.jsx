import { useState } from "react";
import { supabase } from "../lib/supabase.js";
import { useNavigate, Link } from "react-router-dom";
import { FaEnvelope, FaLock, FaArrowRight } from "react-icons/fa";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password: password.trim(),
    });

    setLoading(false);

    if (error) {
      alert(error.message);
    } else {
      navigate("/");
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#F7FBFD] flex items-center justify-center px-6">

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute -top-40 left-0 w-[450px] h-[450px] rounded-full bg-cyan-300/20 blur-[150px]" />

        <div className="absolute -bottom-40 right-0 w-[450px] h-[450px] rounded-full bg-sky-500/10 blur-[150px]" />

      </div>

      {/* Login Card */}

      <div className="relative z-10 w-full max-w-md">

        <div className="rounded-[32px] border border-white/60 bg-white/80 backdrop-blur-xl p-10 shadow-[0_30px_80px_rgba(0,0,0,0.08)]">

          {/* Heading */}

          <div className="text-center">

            <div className="inline-flex items-center rounded-full bg-[#EAF8FD] px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#0078AE]">
              Welcome Back
            </div>

            <h1 className="mt-6 text-4xl font-bold text-gray-900">
              Login
            </h1>

            <p className="mt-3 text-gray-500">
              Sign in to continue to your account.
            </p>

          </div>

          {/* Form */}

          <form
            onSubmit={handleLogin}
            className="mt-10 space-y-6"
          >

            {/* Email */}

            <div>

              <label className="mb-2 block text-sm font-medium text-gray-700">
                Email Address
              </label>

              <div className="flex items-center rounded-2xl border border-gray-200 bg-white px-4 focus-within:border-[#0078AE] focus-within:ring-4 focus-within:ring-[#0078AE]/10 transition">

                <FaEnvelope className="text-gray-400" />

                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent px-4 py-4 outline-none"
                />

              </div>

            </div>

            {/* Password */}

            <div>

              <label className="mb-2 block text-sm font-medium text-gray-700">
                Password
              </label>

              <div className="flex items-center rounded-2xl border border-gray-200 bg-white px-4 focus-within:border-[#0078AE] focus-within:ring-4 focus-within:ring-[#0078AE]/10 transition">

                <FaLock className="text-gray-400" />

                <input
                  type="password"
                  required
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-transparent px-4 py-4 outline-none"
                />

              </div>

            </div>

            {/* Forgot Password */}

            <div className="flex justify-end">

              <Link
                to="/forgot-password"
                className="text-sm font-medium text-[#0078AE] hover:underline"
              >
                Forgot Password?
              </Link>

            </div>

            {/* Button */}

            <button
              disabled={loading}
              className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-[#0078AE] py-4 font-semibold text-white transition duration-300 hover:scale-[1.02] hover:bg-[#005E87] disabled:opacity-70"
            >
              {loading ? (
                "Logging in..."
              ) : (
                <>
                  Login
                  <FaArrowRight className="transition group-hover:translate-x-1" />
                </>
              )}
            </button>

          </form>

          {/* Divider */}

          <div className="my-8 flex items-center gap-4">

            <div className="h-px flex-1 bg-gray-200"></div>

            <span className="text-sm text-gray-400">
              OR
            </span>

            <div className="h-px flex-1 bg-gray-200"></div>

          </div>

          {/* Signup */}

          <p className="text-center text-gray-600">

            Don't have an account?{" "}

            <Link
              to="/signup"
              className="font-semibold text-[#0078AE] hover:underline"
            >
              Create Account
            </Link>

          </p>

        </div>

      </div>

    </section>
  );
}