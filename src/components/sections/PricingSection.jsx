
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for individuals and small businesses just getting started.",
    price: "Rp 299k",
    billing: "per month",
    features: [
      "5 AI-generated content pieces/month",
      "Basic analytics dashboard",
      "2 social media channels",
      "Email support",
      "Content library access"
    ],
    limitations: [
      "No advanced AI customization",
      "Limited revision options",
      "No team collaboration"
    ],
    cta: "Start Free Trial",
    popular: false
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses with active marketing needs.",
    price: "Rp 599k",
    billing: "per month",
    features: [
      "20 AI-generated content pieces/month",
      "Advanced analytics & reporting",
      "5 social media channels",
      "Priority email & chat support",
      "Content library access",
      "A/B testing capabilities",
      "Brand voice customization",
      "Basic team collaboration"
    ],
    limitations: [],
    cta: "Start Free Trial",
    popular: true
  },
  {
    name: "Enterprise",
    description: "For organizations with complex marketing requirements.",
    price: "Rp 1,299k",
    billing: "per month",
    features: [
      "Unlimited AI-generated content",
      "Comprehensive analytics suite",
      "Unlimited social media channels",
      "24/7 priority support",
      "Advanced content library",
      "Advanced A/B testing",
      "Custom brand voice profiles",
      "Advanced team collaboration",
      "API access",
      "Custom integrations",
      "Dedicated account manager"
    ],
    limitations: [],
    cta: "Contact Sales",
    popular: false
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-dots opacity-50 -z-10"></div>
      <div className="absolute top-1/4 -right-64 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 -left-64 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Choose the plan that fits your marketing needs. All plans include a 14-day free trial with no credit card required.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`pricing-card ${plan.popular ? 'popular' : ''}`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">{plan.description}</p>
              
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-600 dark:text-gray-400 ml-2">{plan.billing}</span>
              </div>
              
              <Button 
                className={`w-full mb-8 ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
                variant={plan.popular ? 'default' : 'outline'}
              >
                {plan.cta}
              </Button>
              
              <div className="space-y-4">
                <p className="font-medium">What's included:</p>
                <ul className="space-y-2">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {plan.limitations.length > 0 && (
                  <>
                    <p className="font-medium mt-6">Limitations:</p>
                    <ul className="space-y-2">
                      {plan.limitations.map((limitation, idx) => (
                        <li key={idx} className="flex items-start">
                          <X className="h-5 w-5 text-red-500 mr-2 mt-0.5 shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300 text-sm">{limitation}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Need a custom solution for your enterprise?
          </p>
          <Button variant="outline" size="lg">
            Contact Our Sales Team
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
