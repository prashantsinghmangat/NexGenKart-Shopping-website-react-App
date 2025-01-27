import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const Checkout = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    pincode: "",
    upiId: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      title: "Success",
      description: "Order placed successfully!",
    });
    
    navigate("/order-confirmation", { state: { orderDetails } });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>
      <form onSubmit={handleSubmit} className="max-w-md space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Full Name
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-1">
            Phone Number
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        
        <div>
          <label htmlFor="address" className="block text-sm font-medium mb-1">
            Delivery Address
          </label>
          <Input
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        
        <div>
          <label htmlFor="pincode" className="block text-sm font-medium mb-1">
            Pincode
          </label>
          <Input
            id="pincode"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            required
          />
        </div>
        
        <div>
          <label htmlFor="upiId" className="block text-sm font-medium mb-1">
            UPI ID
          </label>
          <Input
            id="upiId"
            name="upiId"
            value={formData.upiId}
            onChange={handleChange}
            required
          />
        </div>
        
        <Button type="submit" className="w-full">
          Confirm Order
        </Button>
      </form>
    </div>
  );
};

export default Checkout;