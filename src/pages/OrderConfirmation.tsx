import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const OrderConfirmation = () => {
  const location = useLocation();
  const { orderDetails } = location.state || {};

  if (!orderDetails) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p>No order details found.</p>
        <Link to="/">
          <Button className="mt-4">Return to Home</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto text-center">
        <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
        <h1 className="text-2xl font-bold mb-4">Order Confirmed!</h1>
        <p className="text-gray-600 mb-6">
          Thank you for your order. We'll send you a confirmation email shortly.
        </p>
        
        <div className="bg-gray-50 p-6 rounded-lg mb-6 text-left">
          <h2 className="font-semibold mb-4">Order Details</h2>
          <div className="space-y-2">
            <p><span className="font-medium">Name:</span> {orderDetails.name}</p>
            <p><span className="font-medium">Phone:</span> {orderDetails.phone}</p>
            <p><span className="font-medium">Address:</span> {orderDetails.address}</p>
            <p><span className="font-medium">Total:</span> ${orderDetails.total.toFixed(2)}</p>
          </div>
        </div>
        
        <Link to="/">
          <Button>Continue Shopping</Button>
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirmation;