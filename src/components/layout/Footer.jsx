import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import secanLogoFooter from "@/assets/secan-logo-square.png";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-2 mb-12">
          {/* Column 1: SECAN Info */}
          <div className="md:col-span-2 lg:col-span-2 flex gap-3">
            {/* Logo */}
            <Link to="/" className="flex items-start gap-2 w-15 flex shrink-0">
              <img src={secanLogoFooter} alt="SECAN Logo" />
            </Link>
            <div className="text-xs">
                <h3 className="text-lg font-bold mb-2">SECAN</h3>
                <p className=" text-white/80 mb-2">
                  The leading professional body for anatomists in Nigeria, committed
                  to excellence in anatomical science.
                </p>
                {/* <p className="text-sm text-white/80">
                  <strong>Founded:</strong> 1995
                </p> */}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="text-xs">
            <h3 className="text-lg font-bold mb-4">QUICK LINKS</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="#"
                  className="text-white/80 hover:text-white transition"
                >
                  About SECAN
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-white/80 hover:text-white transition"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-white/80 hover:text-white transition"
                >
                  Career Center
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-white/80 hover:text-white transition"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Membership */}
          <div>
            <h3 className="text-lg font-bold mb-4">MEMBERSHIP</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="#"
                  className="text-white/80 hover:text-white transition"
                >
                  Join SECAN
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-white/80 hover:text-white transition"
                >
                  Membership Benefits
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-white/80 hover:text-white transition"
                >
                  Member Categories
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-white/80 hover:text-white transition"
                >
                  Renewal
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Publications */}
          <div>
            <h3 className="text-lg font-bold mb-4">PUBLICATIONS</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="#"
                  className="text-white/80 hover:text-white transition"
                >
                  JECA
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-white/80 hover:text-white transition"
                >
                  Position Statements
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-white/80 hover:text-white transition"
                >
                  Regional News
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Contact & Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">CONTACT US</h3>
            <div className="space-y-3 text-sm mb-6">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <p className="text-white/80">
                  Department of Anatomy, University of Nigeria, Nsukka, Enugu
                  State, Nigeria
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <a
                  to="mailto:info@secanigeria.org"
                  className="text-white/80 hover:text-white transition"
                >
                  info@secanigeria.org
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <a
                  to="tel:+234800000000"
                  className="text-white/80 hover:text-white transition"
                >
                  +234 800 000 0000
                </a>
              </div>
            </div>
          </div>

          {/* Column 6: Newsletter */}
          <div className="">
            <h4 className="font-semibold mb-3">NEWSLETTER</h4>
            <form onSubmit={handleSubscribe} className="flex gap-2 flex-col">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 px-3 py-2 rounded text-gray-900 text-sm bg-white"
                required
              />
              <button
                type="submit"
                className="bg-red-400 hover:bg-secondary/90 text-white px-4 py-2 rounded font-semibold transition transform hover:scale-105"
              >
                {subscribed ? "✓" : "SUBSCRIBE"}
              </button>
            </form>
            {subscribed && (
              <p className="text-sm text-green-300 mt-2">
                Thank you for subscribing!
              </p>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/80">
            <p>
              &copy; {currentYear} Society of Experimental and Clinical
              Anatomists of Nigeria (SECAN). All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link to="#" className="hover:text-white transition">
                Privacy Policy
              </Link>
              <Link to="#" className="hover:text-white transition">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
