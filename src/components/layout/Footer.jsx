
import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <span className="text-2xl font-bold gradient-text">BikinKonten.ai</span>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xs">
              AI-powered digital marketing solution by PT Aira Teknologi Indonesia. Transform your marketing strategy with advanced AI tools.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-100">
              Quick Links
            </p>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#home" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#features" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-100">
              Legal
            </p>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  GDPR Compliance
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-100">
              Contact Us
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="text-blue-600 mt-0.5" />
                <span className="text-gray-600 dark:text-gray-400">
                  Jakarta, Indonesia
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} className="text-blue-600" />
                <span className="text-gray-600 dark:text-gray-400">+62 123 4567 890</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} className="text-blue-600" />
                <span className="text-gray-600 dark:text-gray-400">info@bikinkonten.ai</span>
              </li>
            </ul>
            <div className="mt-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Subscribe to our newsletter</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 w-full border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700"
                />
                <Button className="rounded-l-none">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} PT Aira Teknologi Indonesia. All rights reserved.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
            BikinKonten.ai - Powered by advanced AI technology
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
