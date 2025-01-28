import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Checkout = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    pincode: "",
    instructions: ""
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Save order details
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const orderDetails = {
      ...formData,
      items: cart,
      date: new Date().toISOString(),
      total: cart.reduce((sum: number, item: any) => sum + item.price * item.quantity, 0),
    };
    
    // Save order to localStorage
    const orders = JSON.parse(localStorage.getItem("orders") || "[]");
    orders.push(orderDetails);
    localStorage.setItem("orders", JSON.stringify(orders));
    
    // Clear cart
    localStorage.setItem("cart", "[]");
    
    toast({
      title: "Order Placed Successfully!",
      description: "Thank you for shopping with NexGen FreshKart",
    });
    
    // Dispatch event to update cart count in header
    window.dispatchEvent(new Event("cartUpdated"));
    
    navigate("/order-confirmation", { state: { orderDetails } });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <img 
            src="/lovable-uploads/b6ef4f3b-2ab1-44fc-a68d-de7f0f2e6563.png" 
            alt="NexGen FreshKart Logo" 
            className="h-16 mx-auto mb-4"
          />
          <h1 className="text-2xl font-bold text-gray-800">Checkout</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
              Delivery Address
            </label>
            <Textarea
              id="address"
              name="address"
              required
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your full address"
              className="min-h-[100px]"
            />
          </div>

          <div>
            <label htmlFor="pincode" className="block text-sm font-medium text-gray-700 mb-1">
              Pincode
            </label>
            <Input
              id="pincode"
              name="pincode"
              type="text"
              required
              value={formData.pincode}
              onChange={handleChange}
              placeholder="Enter your pincode"
            />
          </div>

          <div>
            <label htmlFor="instructions" className="block text-sm font-medium text-gray-700 mb-1">
              Delivery Instructions (Optional)
            </label>
            <Textarea
              id="instructions"
              name="instructions"
              value={formData.instructions}
              onChange={handleChange}
              placeholder="Any special instructions for delivery"
              className="min-h-[80px]"
            />
          </div>

          <Button type="submit" className="w-full">
            Place Order
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;