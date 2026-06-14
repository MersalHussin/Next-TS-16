
import { error } from "console";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description: "Our latest blog posts",
};

const BlogPage = () => {
    return (
        <div className="container py-12">
            <h1 className="text-3xl font-bold mb-8 text-gray-900">Latest Blog Posts</h1>
            
            <div className="space-y-6">
                <Link 
                    href="/blog/frist-blog?lang=en&filter=java"
                    className="block card hover:border-blue-500 transition-colors"
                >
                    <h3 className="text-xl font-semibold mb-2 text-blue-600">First Blog</h3>
                    <p className="text-gray-600">Explore Java programming concepts</p>
                </Link>
                
                <Link 
                    href="/blog/second-blog?lang=ar&filter=react"
                    className="block card hover:border-blue-500 transition-colors"
                >
                    <h3 className="text-xl font-semibold mb-2 text-blue-600">Second Blog</h3>
                    <p className="text-gray-600">React development best practices</p>
                </Link>
                
                <Link 
                    href="/blog/third-blog?lang=en&filter=js"
                    className="block card hover:border-blue-500 transition-colors"
                >
                    <h3 className="text-xl font-semibold mb-2 text-blue-600">Third Blog</h3>
                    <p className="text-gray-600">JavaScript tips and tricks</p>
                </Link>
            </div>
        </div>
    );
};

export default BlogPage;