
import React, { useState, useEffect } from 'react';

interface Post {
  category: string;
  date: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

const BlogFeed: React.FC = () => {
  // To connect your real blog, you would use a state for posts and a useEffect to fetch them
  const [posts, setPosts] = useState<Post[]>([
    {
      category: "Strategic Frameworks",
      date: "August 19, 2025",
      title: "Strategic Imperatives for Marketing Leaders, Product Teams, and Founders in the Age of AI Search",
      description: "Essential strategic frameworks for leadership teams navigating the fundamental shift from traditional search to AI-powered discovery.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
      link: "https://blog.georankers.co/strategic-imperatives"
    },
    {
      category: "AI Search & GEO",
      date: "August 15, 2025",
      title: "Generative Engine Optimization: Building Blocks of AI-Ready Content",
      description: "Master the fundamental building blocks that make your content discoverable and recommendable by AI engines.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
      link: "https://blog.georankers.co/geo-building-blocks"
    },
    {
      category: "AI Search & GEO",
      date: "August 8, 2025",
      title: "GEO vs SEO: What is Real, What is Hype, and What You Actually Need to Track",
      description: "Cut through the noise and understand the practical differences between traditional SEO and generative engine optimization.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      link: "https://blog.georankers.co/geo-vs-seo"
    }
  ]);

  /* 
  EXAMPLE: How to connect your actual blog via API
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Replace with your actual Blog API URL (e.g. WordPress, Ghost, or rss2json)
        const response = await fetch('https://blog.georankers.co/wp-json/wp/v2/posts?per_page=3&_embed');
        const data = await response.json();
        // Map your API data to the Post interface here
        // setPosts(mappedData);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    };
    // fetchPosts();
  }, []);
  */

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-[800] text-slate-900 mb-6 tracking-tight">
            Latest <span className="text-gradient">AI Search Insights</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
            Discover proven strategies and frameworks to dominate AI search across ChatGPT, Gemini, and Perplexity
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <div 
              key={idx} 
              className="group flex flex-col bg-white rounded-[1.5rem] border border-slate-100 hover-lift shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] overflow-hidden transition-all duration-300"
            >
              {/* Card Image */}
              <div className="relative h-60 overflow-hidden bg-slate-100">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800";
                  }}
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/95 backdrop-blur-md rounded-lg text-[10px] font-black text-slate-900 uppercase tracking-widest shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8 flex flex-col flex-grow">
                <p className="text-[13px] font-bold text-slate-400 mb-4 tracking-tight">{post.date}</p>
                <h3 className="text-[1.35rem] font-[800] text-slate-900 mb-4 leading-[1.3] group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-[15px] text-slate-500 leading-relaxed mb-8 flex-grow font-medium">
                  {post.description}
                </p>
                
                <div className="pt-4 mt-auto border-t border-slate-50">
                  <a 
                    href={post.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[15px] font-black text-blue-600 hover:text-blue-700 transition-colors group/link"
                  >
                    Read More
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogFeed;
