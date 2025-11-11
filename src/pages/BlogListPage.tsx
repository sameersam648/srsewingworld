import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { posts } from '../blogData';
import SEO from '../components/SEO';

const BlogListPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Blog - SR Sewing World"
        description="Explore articles, guides, and tips from the sewing experts at SR Sewing World. Stay updated on the latest trends and machine maintenance."
      />
      <section id="blog" className="relative py-16 lg:py-24 bg-gradient-to-br from-[#f6faff] via-[#f9f6ff] to-[#fff6f6] overflow-hidden">
          {/* Decorative background */}
          <div className="absolute inset-0 z-0 opacity-[0.15]">
              <div className="absolute top-10 -left-10 w-80 h-80 bg-cyan-200 rounded-full filter blur-3xl animate-blob"></div>
              <div className="absolute bottom-10 -right-10 w-72 h-72 bg-emerald-200 rounded-full filter blur-3xl animate-blob animation-delay-3000"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              {/* Header */}
              <div className="text-center space-y-4 mb-12">
                  <motion.h1
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.7 }}
                      transition={{ delay: 0.1, duration: 0.7 }}
                      className="text-3xl lg:text-4xl font-bold text-gray-900 drop-shadow-lg"
                  >
                      Insights & Expertise from Our Blog
                  </motion.h1>
                  <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.7 }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                      className="text-lg text-gray-600 max-w-3xl mx-auto"
                  >
                      Stay updated with the latest news, tips, and trends in the world of sewing. Our experts share their knowledge to help you get the most out of your machines and projects.
                  </motion.p>
              </div>

              {/* Blog Grid */}
              <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={{
                      hidden: {},
                      visible: { transition: { staggerChildren: 0.1 } }
                  }}
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                  {posts.map((post, index) => (
                      <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden group border border-[#ff416c]/10 hover:border-[#ff416c]/30 transition-all duration-300 flex flex-col"
                      >
                          <div className="relative">
                              <Link to={`/blog/${post.id}`}>
                                <img src={post.image} alt={post.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                              </Link>
                              <div className="absolute top-4 left-4 bg-gradient-to-r from-[#ff416c] to-[#ff4b2b] text-white px-3 py-1 rounded-full text-xs font-semibold">
                                  {post.category}
                              </div>
                          </div>
                          <div className="p-6 flex flex-col flex-1">
                              <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                              <h2 className="text-lg font-bold text-gray-900 mb-2 flex-1">
                                <Link to={`/blog/${post.id}`} className="hover:text-[#ff416c] transition-colors">
                                  {post.title}
                                </Link>
                              </h2>
                              <p className="text-gray-600 mb-4">{post.excerpt}</p>
                              <Link to={`/blog/${post.id}`} className="font-semibold text-[#ff416c] hover:text-red-700 mt-auto flex items-center group-hover:gap-3 transition-all duration-300">
                                  Read More <ArrowRight className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                              </Link>
                          </div>
                      </motion.div>
                  ))}
              </motion.div>
          </div>
      </section>
    </>
  );
};

export default BlogListPage;
