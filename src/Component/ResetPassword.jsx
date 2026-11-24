import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase.js";
import { useNavigate } from "react-router-dom";
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [checkingSession, setCheckingSession] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const handleRecovery = async () => {
      const { data } = await supabase.auth.getSession();

      if (data.session) {
        setCheckingSession(false);
        return;
      }

      const hash = window.location.hash;

      if (hash.includes("access_token")) {
        const params = new URLSearchParams(hash.substring(1));
        const accessToken = params.get("access_token");
        const refreshToken = params.get("refresh_token");

        if (accessToken && refreshToken) {
          const { error } = await supabase.auth.setSession({
            access_token: accessToken,
            refresh_token: refreshToken,
          });

          if (!error) {
            setCheckingSession(false);
            return;
          }
        }
      }

      setCheckingSession(false);
      alert("Invalid or expired password reset link.");
      navigate("/forgot-password");
    };

    handleRecovery();
  }, [navigate]);

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.updateUser({
      password,
    });

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    await supabase.auth.signOut();

    alert("Password updated successfully.");
    navigate("/login");
  };

  if (checkingSession) {
    return (
      <section className="min-h-screen bg-[#F7FBFD] flex items-center justify-center">
        <p className="text-gray-500">Verifying reset link...</p>
      </section>
    );
  }

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
              Reset Password
            </h1>

            <p className="mt-3 text-gray-500">Enter your new password below.</p>
          </div>

          <form onSubmit={handleResetPassword} className="mt-10 space-y-6">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                New Password
              </label>

              <div className="flex items-center rounded-2xl border border-gray-200 bg-white px-4 focus-within:border-[#0078AE] focus-within:ring-4 focus-within:ring-[#0078AE]/10 transition">
                <FaLock className="text-gray-400" />

                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="Enter new password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-transparent px-4 py-4 outline-none"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-gray-400 hover:text-[#0078AE]"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Confirm Password
              </label>

              <div className="flex items-center rounded-2xl border border-gray-200 bg-white px-4 focus-within:border-[#0078AE] focus-within:ring-4 focus-within:ring-[#0078AE]/10 transition">
                <FaLock className="text-gray-400" />

                <input
                  type={showConfirmPassword ? "text" : "password"}
                  required
                  placeholder="Confirm new password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full bg-transparent px-4 py-4 outline-none"
                />

                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="text-gray-400 hover:text-[#0078AE]"
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-2xl bg-[#0078AE] py-4 font-semibold text-white transition duration-300 hover:bg-[#005E87] disabled:opacity-70"
            >
              {loading ? "Updating Password..." : "Update Password"}
            </button>
          </form>

          <p className="mt-8 text-center text-gray-600">
            Remember your password?{" "}
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="font-semibold text-[#0078AE] hover:underline"
            >
              Back to Login
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}
