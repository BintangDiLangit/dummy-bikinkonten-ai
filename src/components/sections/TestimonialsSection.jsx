
import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "Marketing Director",
    company: "TechSolutions Inc.",
    image: "professional-woman-marketing-director",
    content: "BikinKonten.ai has transformed our content creation process. We're now producing 3x more content with half the team, and the quality is consistently excellent. The AI understands our brand voice perfectly.",
    rating: 5
  },
  {
    name: "David Chen",
    position: "Social Media Manager",
    company: "GrowthHub",
    image: "professional-man-social-media-manager",
    content: "As a social media manager handling multiple accounts, BikinKonten.ai has been a game-changer. The platform helps me create engaging content for different brands, each with their unique voice and style.",
    rating: 5
  },
  {
    name: "Anita Patel",
    position: "E-commerce Entrepreneur",
    company: "StyleBoutique",
    image: "professional-woman-ecommerce-entrepreneur",
    content: "I was skeptical about AI-generated content, but BikinKonten.ai exceeded my expectations. The product descriptions it creates have significantly improved our conversion rates. Worth every penny!",
    rating: 4
  },
  {
    name: "Michael Rodriguez",
    position: "Content Strategist",
    company: "MediaPulse",
    image: "professional-man-content-strategist",
    content: "The analytics and insights from BikinKonten.ai have helped us refine our content strategy. We now know exactly what resonates with our audience, and our engagement metrics have improved by 45%.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
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
            What Our <span className="gradient-text">Customers</span> Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Discover how BikinKonten.ai is helping businesses transform their digital marketing strategies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="testimonial-card"
            >
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden">
                    <img  className="w-full h-full object-cover" alt={`Portrait of ${testimonial.name}`} src="https://images.unsplash.com/photo-1677696795873-ca21e7d76a51" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.position}, {testimonial.company}
                  </p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < testimonial.rating
                        ? "text-yellow-500 fill-yellow-500"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 italic">
                "{testimonial.content}"
              </p>
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
          <div className="p-8 rounded-xl bg-blue-50 dark:bg-blue-900/20 max-w-3xl mx-auto">
            <div className="flex justify-center mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-6 w-6 text-yellow-500 fill-yellow-500"
                  />
                ))}
              </div>
            </div>
            <p className="text-xl font-medium mb-4">
              "BikinKonten.ai has helped over 500+ businesses improve their digital marketing results."
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Join hundreds of satisfied customers who have transformed their marketing with our AI-powered solution.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
