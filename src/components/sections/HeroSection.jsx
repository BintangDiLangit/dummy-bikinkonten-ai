
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="home" className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid -z-10"></div>
      <div className="absolute top-1/3 -left-64 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-800 font-medium text-sm mb-6 dark:bg-blue-900/30 dark:text-blue-300">
                AI-Powered Digital Marketing Solution
              </span>
            </motion.div>
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Transform Your <span className="gradient-text">Digital Marketing</span> with AI
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-600 mb-8 dark:text-gray-300"
            >
              BikinKonten.ai helps businesses create engaging content, optimize campaigns, and boost ROI with advanced AI technology. Streamline your marketing workflow and achieve better results.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4 mb-8"
            >
              <Button size="lg" className="rounded-full">
                Get Started Free <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-full">
                Book a Demo
              </Button>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-sm text-gray-600 dark:text-gray-400">No credit card required</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-sm text-gray-600 dark:text-gray-400">14-day free trial</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-sm text-gray-600 dark:text-gray-400">Cancel anytime</span>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800">
              <img  className="w-full h-auto" alt="BikinKonten.ai dashboard showing AI content generation interface" src="https://images.unsplash.com/photo-1677696795198-5ac0e21060ed" />
            </div>
            
            {/* Floating elements */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg border border-gray-200 dark:border-gray-700 z-20"
            >
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center dark:bg-green-900/30">
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="text-sm font-medium">Content Generated</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">10x faster than manual creation</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg border border-gray-200 dark:border-gray-700 z-20"
            >
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center dark:bg-blue-900/30">
                  <svg className="h-5 w-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium">Engagement Rate</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Increased by 45%</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
