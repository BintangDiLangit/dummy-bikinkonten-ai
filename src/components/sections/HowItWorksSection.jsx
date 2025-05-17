
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const steps = [
  {
    id: "analyze",
    title: "Analyze",
    description: "Our AI analyzes your brand, audience, and industry to understand your unique marketing needs.",
    image: "marketing-analysis-dashboard",
    benefits: [
      "Comprehensive market analysis",
      "Competitor benchmarking",
      "Audience insights and segmentation",
      "Content gap identification"
    ]
  },
  {
    id: "create",
    title: "Create",
    description: "Generate high-quality, engaging content tailored to your brand voice and marketing objectives.",
    image: "ai-content-creation-interface",
    benefits: [
      "AI-powered content generation",
      "Brand voice customization",
      "Multi-format content creation",
      "SEO optimization built-in"
    ]
  },
  {
    id: "distribute",
    title: "Distribute",
    description: "Publish your content across multiple channels with optimal timing for maximum engagement.",
    image: "content-distribution-calendar",
    benefits: [
      "Multi-channel publishing",
      "Automated scheduling",
      "Social media integration",
      "Email marketing campaigns"
    ]
  },
  {
    id: "optimize",
    title: "Optimize",
    description: "Track performance and continuously improve your marketing strategy with AI-driven insights.",
    image: "performance-optimization-dashboard",
    benefits: [
      "Real-time performance analytics",
      "A/B testing automation",
      "Content optimization suggestions",
      "ROI tracking and reporting"
    ]
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/3 -left-64 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 -right-64 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How <span className="gradient-text">BikinKonten.ai</span> Works
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Our streamlined process helps you create, distribute, and optimize your marketing content with minimal effort and maximum results.
          </p>
        </motion.div>

        <Tabs defaultValue="analyze" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-transparent h-auto p-0 mb-8">
            {steps.map((step, index) => (
              <TabsTrigger 
                key={step.id} 
                value={step.id}
                className="data-[state=active]:bg-white data-[state=active]:shadow-md dark:data-[state=active]:bg-gray-800 rounded-lg py-4 px-6 border border-gray-200 dark:border-gray-700 h-full flex flex-col items-center text-center gap-2"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-semibold dark:bg-blue-900/30 dark:text-blue-400">
                  {index + 1}
                </span>
                <span className="font-medium text-base">{step.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          
          {steps.map((step) => (
            <TabsContent key={step.id} value={step.id} className="mt-0">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div className="order-2 lg:order-1">
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                    {step.description}
                  </p>
                  
                  <div className="space-y-3">
                    {step.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="order-1 lg:order-2 relative">
                  <div className="rounded-xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-800">
                    <img  className="w-full h-auto" alt={`BikinKonten.ai ${step.title} interface`} src="https://images.unsplash.com/photo-1675023112817-52b789fd2ef0" />
                  </div>
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default HowItWorksSection;
