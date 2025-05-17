
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 hero-gradient -z-10"></div>
      <div className="absolute inset-0 bg-grid opacity-10 -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            Ready to Transform Your Digital Marketing?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl mb-8 text-white/90"
          >
            Join hundreds of businesses already using BikinKonten.ai to create engaging content, optimize campaigns, and drive better results.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-10"
          >
            <Button size="lg" className="bg-white text-blue-600 hover:bg-white/90 rounded-full">
              Start Your Free Trial <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10 rounded-full">
              Schedule a Demo
            </Button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-6 text-white/90"
          >
            <div className="flex items-center justify-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center justify-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center justify-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>Cancel anytime</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
