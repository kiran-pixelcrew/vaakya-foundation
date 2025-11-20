"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { loadScript, formatCurrency } from "../lib/utils";
import { motion, AnimatePresence } from "motion/react";

interface CheckoutResult {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

interface RazorpayCheckoutOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description?: string;
  order_id: string;
  prefill?: { name?: string; email?: string };
  handler: (response: CheckoutResult) => void | Promise<void>;
  theme?: { color?: string };
}

declare global {
  interface Window {
    Razorpay: new (options: RazorpayCheckoutOptions) => {
      open: () => void;
      on: (
        event: string,
        handler: (resp: { error?: { description?: string } }) => void
      ) => void;
    };
  }
}

// const quickAmounts = [100, 500, 1000, 2500, 5000];

export const PaymentForm: React.FC = () => {
  const [amount, setAmount] = useState<number>(0);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [donatedAmount, setDonatedAmount] = useState<number>(0);
  const [paymentId, setPaymentId] = useState<string>("");

  useEffect(() => {
    if (paymentSuccess) {
      // Confetti effect simulation
      const timer = setTimeout(() => {
        // Auto-reset after 10 seconds
        // setPaymentSuccess(false);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [paymentSuccess]);

  // const handleQuickAmount = (value: number) => {
  //   setAmount(value);
  //   setCustomAmount("");
  //   setErrorMessage(null);
  // };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    const numValue = Number(value);
    if (numValue > 0) {
      setAmount(numValue);
    }
    setErrorMessage(null);
  };

  async function handlePay(e: React.FormEvent) {
    e.preventDefault();
    setErrorMessage(null);

    if (!amount || amount <= 0) {
      setErrorMessage("Please enter a valid amount");
      return;
    }

    if (amount < 10) {
      setErrorMessage("Minimum donation amount is ₹10");
      return;
    }

    if (amount > 100000) {
      setErrorMessage(
        "Maximum donation amount is ₹1,00,000 (1 lakh). For larger donations, please contact us directly at info@vaakyafoundation.org"
      );
      return;
    }

    setLoading(true);
    try {
      const ok = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );
      if (!ok) {
        throw new Error(
          "Failed to load Razorpay SDK. Please check your internet connection."
        );
      }

      const res = await fetch("/api/razorpay/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, name, email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Order creation failed");

      const { order, key } = data as {
        order: { id: string; amount: number; currency: string };
        key: string;
      };

      const options: RazorpayCheckoutOptions = {
        key,
        amount: order.amount,
        currency: order.currency,
        name: "Vaakya Foundation",
        description: "Support our mission to empower children",
        order_id: order.id,
        prefill: { name, email },
        handler: async (response: CheckoutResult) => {
          setLoading(true);
          const verifyRes = await fetch("/api/razorpay/verify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(response),
          });
          const verifyData: { valid: boolean } = await verifyRes.json();
          if (verifyData.valid) {
            setPaymentSuccess(true);
            setDonatedAmount(amount);
            setPaymentId(response.razorpay_payment_id);
          } else {
            setErrorMessage(
              "Payment verification failed. Please contact support."
            );
          }
          setLoading(false);
        },
        theme: { color: "#FFD45C" },
      };

      const rzp = new window.Razorpay(options);
      rzp.on("payment.failed", (resp) => {
        setErrorMessage(
          resp.error?.description || "Payment failed. Please try again."
        );
        setLoading(false);
      });
      rzp.open();
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Unexpected error occurred";
      setErrorMessage(message);
    } finally {
      setLoading(false);
    }
  }

  const resetForm = () => {
    setPaymentSuccess(false);
    setAmount(500);
    setCustomAmount("");
    setName("");
    setEmail("");
    setErrorMessage(null);
    setDonatedAmount(0);
    setPaymentId("");
  };

  if (paymentSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl mx-auto p-8"
      >
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-8 shadow-xl">
          {/* Success Icon with Animation */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="flex justify-center mb-6"
          >
            <div className="relative">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                  times: [0, 0.3, 0.6, 1],
                }}
                className="bg-green-500 rounded-full p-4"
              >
                <svg
                  className="w-16 h-16 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </motion.div>
              {/* Ripple Effect */}
              <motion.div
                initial={{ scale: 1, opacity: 0.5 }}
                animate={{ scale: 2.5, opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0 bg-green-400 rounded-full"
              />
            </div>
          </motion.div>

          {/* Success Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center space-y-4"
          >
            <h2 className="text-3xl font-bold text-gray-800">
              Thank You for Your Generosity! 🎉
            </h2>
            <p className="text-xl text-gray-700">
              Your donation of{" "}
              <span className="font-bold text-green-600">
                {formatCurrency(donatedAmount * 100)}
              </span>{" "}
              will make a real difference
            </p>
            <p className="text-gray-600">
              You&apos;re helping us create a safer, brighter future for
              children. Every contribution counts!
            </p>

            {/* Impact Message */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-lg p-6 mt-6 border border-green-200"
            >
              <h3 className="font-semibold text-gray-800 mb-2">Your Impact:</h3>
              <p className="text-gray-600 text-sm">
                {donatedAmount >= 5000
                  ? "🌟 You've sponsored multiple workshop sessions!"
                  : donatedAmount >= 2500
                  ? "🎓 You've helped fund a complete workshop!"
                  : donatedAmount >= 1000
                  ? "📚 You've contributed to educational materials for many children!"
                  : donatedAmount >= 500
                  ? "🤝 You've helped support counseling sessions!"
                  : "💚 You've helped us continue our mission!"}
              </p>
            </motion.div>

            {/* Payment Details */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-sm text-gray-500 space-y-1"
            >
              <p>Payment ID: {paymentId}</p>
              <p>A receipt has been sent to {email}</p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex gap-4 justify-center mt-8"
            >
              <button
                onClick={resetForm}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg"
              >
                Donate Again
              </button>
              <Link
                href="/"
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg font-semibold transition-all"
              >
                Back to Home
              </Link>
            </motion.div>

            {/* Social Share */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="text-sm text-gray-500 mt-6"
            >
              Share your support and inspire others! 💙
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto"
    >
      <form onSubmit={handlePay} className="space-y-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Make a Difference Today
          </h2>
          <p className="text-gray-600">
            Your contribution helps us empower and protect children
          </p>
        </div>

        {/* Quick Amount Selection */}
        {/* <div className="space-y-3">
          <label className="block text-sm font-semibold text-gray-700">
            Select Amount
          </label>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
            {quickAmounts.map((value) => (
              <motion.button
                key={value}
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleQuickAmount(value)}
                className={`py-3 px-4 rounded-lg font-semibold transition-all ${
                  amount === value && !customAmount
                    ? "bg-[#FFD45C] text-gray-900 shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                ₹{value}
              </motion.button>
            ))}
          </div>
        </div> */}

        {/* Custom Amount */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">
            Enter Donation Amount
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-lg">
              ₹
            </span>
            <input
              type="number"
              min={10}
              max={100000}
              value={customAmount}
              onChange={(e) => handleCustomAmountChange(e.target.value)}
              placeholder="Enter amount (Min: ₹10, Max: ₹1,00,000)"
              className="w-full pl-8 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FFD45C] focus:ring-2 focus:ring-[#FFD45C]/20 transition-all outline-none"
            />
          </div>
          <div className="flex justify-between items-center text-xs text-gray-500">
            <span>Min: ₹10</span>
            <span>Max: ₹1,00,000</span>
          </div>
          <p className="text-sm text-gray-500">
            You&apos;re donating:{" "}
            <span className="font-semibold text-gray-700">
              {formatCurrency(amount * 100)}
            </span>
          </p>
        </div>

        {/* Donor Details */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700">
              Your Name *
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FFD45C] focus:ring-2 focus:ring-[#FFD45C]/20 transition-all outline-none"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700">
              Email Address *
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="john@example.com"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FFD45C] focus:ring-2 focus:ring-[#FFD45C]/20 transition-all outline-none"
              required
            />
          </div>
        </div>

        {/* Error Message */}
        <AnimatePresence>
          {errorMessage && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-start gap-2"
            >
              <svg
                className="w-5 h-5 mt-0.5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm">{errorMessage}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={loading}
          whileHover={{ scale: loading ? 1 : 1.02 }}
          whileTap={{ scale: loading ? 1 : 0.98 }}
          className={`w-full py-4 rounded-lg font-bold text-lg transition-all shadow-lg ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-[#FFD45C] hover:bg-[#FFB800] text-gray-900"
          }`}
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <svg
                className="animate-spin h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Processing...
            </span>
          ) : (
            "Proceed to Payment"
          )}
        </motion.button>

        {/* Security Badge */}
        <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
              clipRule="evenodd"
            />
          </svg>
          <span>Secure payment powered by Razorpay</span>
        </div>

        {/* Trust Indicators */}
        <div className="bg-gray-50 rounded-lg p-4 text-center">
          <p className="text-xs text-gray-600">
            🛡️ Your data is encrypted and secure
            <br />
            💳 All major payment methods accepted
            <br />
            📧 Instant email receipt
            <br />
            💰 Donation limits: Min ₹10 - Max ₹1,00,000
          </p>
        </div>
      </form>
    </motion.div>
  );
};

export default PaymentForm;
