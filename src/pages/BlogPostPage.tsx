import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { posts } from '../blogData';
import SEO from '../components/SEO';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';

const BlogPostPage: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const navigate = useNavigate();
  const post = posts.find(p => p.id === postId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!post) {
    return (
        <div className="flex flex-col items-center justify-center text-center py-24">
            <h1 className="text-4xl font-bold mb-4">Post not found</h1>
            <p className="text-lg text-gray-600 mb-8">Sorry, we couldn't find the post you're looking for.</p>
            <button
                onClick={() => navigate('/blog')}
                className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-full font-semibold"
            >
                Back to Blog
            </button>
        </div>
    );
  }

  return (
    <>
      <SEO
        title={`${post.title} - SR Sewing World Blog`}
        description={post.excerpt}
        product={{
            name: post.title,
            price: 0,
            description: post.excerpt,
            image: post.image
        }}
      />
      <article className="relative py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="mb-8">
                    <Link to="/blog" className="flex items-center text-red-600 hover:text-red-800 font-semibold transition-colors">
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to all posts
                    </Link>
                </div>
                
                <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                    {post.title}
                </h1>
                
                <div className="flex items-center space-x-6 text-gray-500 mb-8">
                    <div className="flex items-center space-x-2">
                        <Calendar className="h-5 w-5" />
                        <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Tag className="h-5 w-5" />
                        <span>{post.category}</span>
                    </div>
                </div>

                <img src={post.image} alt={post.title} className="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-xl mb-12" />

                <div 
                    className="prose lg:prose-xl max-w-none"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

            </motion.div>
        </div>
      </article>
    </>
  );
};

export default BlogPostPage; 