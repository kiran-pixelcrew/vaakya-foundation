import PaymentForm from "../../components/PaymentForm";

export const metadata = {
  title: "Support Our Mission | Vaakya Foundation",
  description:
    "Make a difference in children's lives. Support Vaakya Foundation with a secure donation via Razorpay.",
};

export default function PaymentsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-amber-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <PaymentForm />
      </div>
    </div>
  );
}
