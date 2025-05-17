
import React from "react";
import { motion } from "framer-motion";
import { 
  MessageSquare, 
  BarChart3, 
  Zap, 
  Globe, 
  Lightbulb, 
  Target, 
  Layers, 
  RefreshCw 
} from "lucide-react";

const features = [
  {
    icon: <MessageSquare className="h-10 w-10 text-blue-600" />,
    title: "AI Content Generation",
    description: "Create high-quality blog posts, social media content, and ad copy in seconds with our advanced AI technology."
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-purple-600" />,
    title: "Performance Analytics",
    description: "Track and analyze your marketing campaigns with detailed metrics and actionable insights."
  },
  {
    icon: <Zap className="h-10 w-10 text-yellow-600" />,
    title: "Automated Campaigns",
    description: "Set up and optimize marketing campaigns that run on autopilot, saving you time and resources."
  },
  {
    icon: <Globe className="h-10 w-10 text-green-600" />,
    title: "Multi-Channel Publishing",
    description: "Publish content across multiple platforms with a single click, maintaining consistent brand messaging."
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-orange-600" />,
    title: "Content Recommendations",
    description: "Get AI-powered suggestions for content topics and formats that resonate with your target audience."
  },
  {
    icon: <Target className="h-10 w-10 text-red-600" />,
    title: "Audience Targeting",
    description: "Identify and reach your ideal customers with precision targeting based on behavior and preferences."
  },
  {
    icon: <Layers className="h-10 w-10 text-indigo-600" />,
    title: "Content Library",
    description: "Organize and manage all your marketing assets in one centralized, searchable repository."
  },
  {
    icon: <RefreshCw className="h-10 w-10 text-teal-600" />,
    title: "A/B Testing",
    description: "Optimize your marketing efforts by testing different versions of your content and campaigns."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
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
            Powerful Features to <span className="gradient-text">Supercharge</span> Your Marketing
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            BikinKonten.ai combines cutting-edge AI technology with intuitive tools to help you create, optimize, and scale your digital marketing efforts.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="feature-card group"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
