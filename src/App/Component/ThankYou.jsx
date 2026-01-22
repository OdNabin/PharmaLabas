import { CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white  flex items-center justify-center px-5 py-16 sm:px-8" style={{marginTop:"100px"}}>
      {/* Very subtle decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-48 -right-48 h-[600px] w-[600px] rounded-full bg-green-50/40 blur-3xl" />
        <div className="absolute -bottom-56 -left-56 h-[500px] w-[500px] rounded-full bg-blue-50/30 blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-lg text-center">
        {/* Icon – slightly bigger + softer shadow for premium feel */}
        <div className="mb-12 flex justify-center">
          <div className="rounded-full bg-green-100/80 p-6 shadow-sm">
            <CheckCircle2
              className="text-green-600"
              size={96}
              strokeWidth={1.5}
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Main heading – stronger, more confident */}
        <h1 className="mb-5 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
          Message Received
        </h1>

        {/* Subheading / reassurance */}
        <p className="mb-4 text-xl font-medium text-gray-700 sm:text-2xl">
          Thank you for getting in touch!
        </p>

        {/* Body text – clearer, friendlier */}
        <p className="mb-12 text-lg leading-relaxed text-gray-600 sm:text-xl">
          We’ve received your message.<br className="sm:hidden" />
          Our team will review it and respond within{" "}
          <span className="font-semibold text-gray-800">1–2 business days</span>.
        </p>

        {/* Primary CTA – more inviting, modern button */}
        <button
          onClick={() => navigate('/')}
          className="btn btn-primary"
        >
          Return Home
        </button>

        {/* Trust / next-step note */}
        <p className="mt-14 text-base text-gray-500">
          A confirmation email is on its way to your inbox.
        </p>
      </div>
    </div>
  );
};

export default ThankYou;