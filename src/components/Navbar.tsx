import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary">
            ShopHub
          </Link>
          <div className="flex items-center space-x-6">
            <Link to="/products" className="text-gray-600 hover:text-primary">
              Products
            </Link>
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-600 hover:text-primary" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;