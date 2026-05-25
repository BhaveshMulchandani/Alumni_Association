import React from "react";
import axios from "axios";

function PaymentButton({ amount, donationType, message }) {
  const handlePayment = async () => {
    try {
      // Step 1: Create order on backend
      const { data: order } = await axios.post(
        "http://localhost:3000/payment/createorder",
        {
          amount,
          donationtype: donationType,
          message,
        },
        { withCredentials: true },
      );

      // Step 2: Razorpay options
      const options = {
        key: "rzp_test_Stgo0SDhvRs3xL",
        amount: order.amount,
        currency: order.currency,
        name: "My Company",
        description: "Test Transaction",
        order_id: order.id,
        handler: async function (response) {
          const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
            response;
          try {
            await axios.post(
              "http://localhost:3000/payment/verify",
              {
                razorpayOrderId: razorpay_order_id,
                razorpayPaymentId: razorpay_payment_id,
                signature: razorpay_signature,
                amount,
                donationtype: donationType,
                message,
              },
              { withCredentials: true },
            );
            alert("Payment successful!");
          } catch {
            alert("Payment verification failed!");
          }
        },
        prefill: {
          name: "Test User",
          email: "test@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#db2777",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <button
      onClick={handlePayment}
      style={{
        padding: "10px 20px",
        background: "#db2777",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
      }}
    >
      Donate Now
    </button>
  );
}

export default PaymentButton;
