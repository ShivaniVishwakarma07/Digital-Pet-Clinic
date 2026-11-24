import { useState } from "react";
import { supabase } from "../lib/supabase.js";
import { Link } from "react-router-dom";
import { FaEnvelope, FaArrowRight } from "react-icons/fa";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");

    const { error } = await supabase.auth.resetPasswordForEmail(email.trim(), {
      redirectTo: `${window.location.origin}/reset-password`,
    });

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    setMessage("Password reset link has been sent to your email.");
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#F7FBFD] flex items-center justify-center px-6">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-0 w-[450px] h-[450px] rounded-full bg-cyan-300/20 blur-[150px]" />
        <div className="absolute -bottom-40 right-0 w-[450px] h-[450px] rounded-full bg-sky-500/10 blur-[150px]" />
      </div>

      <div className="relative z-10 w-full max-w-md">
        <div className="rounded-[32px] border border-white/60 bg-white/80 backdrop-blur-xl p-10 shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
          <div className="text-center">
            <div className="inline-flex items-center rounded-full bg-[#EAF8FD] px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#0078AE]">
              Account Recovery
            </div>

            <h1 className="mt-6 text-4xl font-bold text-gray-900">
              Forgot Password?
            </h1>

            <p className="mt-3 text-gray-500">
              Enter your email and we'll send you a password reset link.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-10 space-y-6">
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

            {error && (
              <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
                {error}
              </p>
            )}

            {message && (
              <p className="rounded-xl bg-green-50 px-4 py-3 text-sm text-green-600">
                {message}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-[#0078AE] py-4 font-semibold text-white transition duration-300 hover:scale-[1.02] hover:bg-[#005E87] disabled:opacity-70"
            >
              {loading ? (
                "Sending..."
              ) : (
                <>
                  Send Reset Link
                  <FaArrowRight className="transition group-hover:translate-x-1" />
                </>
              )}
            </button>
          </form>

          <p className="mt-8 text-center text-gray-600">
            Remember your password?{" "}
            <Link
              to="/login"
              className="font-semibold text-[#0078AE] hover:underline"
            >
              Back to Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
