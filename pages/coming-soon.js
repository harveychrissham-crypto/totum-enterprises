import { useState } from "react";
import TotumEnterprisesLayout from "../components/Layout";

export default function ComingSoon() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      console.log("New subscriber:", email);
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <TotumEnterprisesLayout page="coming-soon">
      <section className="bg-gradient-to-r from-gray-700 to-gray-500 text-white py-32 px-6 text-center min-h-screen flex flex-col justify-center">
        <h1 className="text-6xl font-bold mb-6">Coming Soon 🚀</h1>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          More Totum branches are on the way! Stay tuned as we expand into new
          industries and create opportunities worldwide.
        </p>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="px-4 py-3 rounded-xl w-full sm:w-auto text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-6 py-3 rounded-xl transition"
            >
              Notify Me
            </button>
          </form>
        ) : (
          <p className="text-green-300 font-semibold mt-4">
            ✅ Thanks! You’ll be notified when we launch.
          </p>
        )}
      </section>
    </TotumEnterprisesLayout>
  );
}
