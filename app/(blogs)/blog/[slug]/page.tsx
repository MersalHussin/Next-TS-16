'use client'

import { Metadata } from "next";
import { useParams, useSearchParams } from "next/navigation";
import { useState } from "react";

// export const metadata: Metadata = {
//   title: "Article",
//   description: "Blog article page",
// };

const ArticalPage = () => {
    const parameters = useParams();
    const slug = parameters.slug;
    const [counter, setCounter] = useState(0);
    const searchParameters = useSearchParams();
    const filter = searchParameters.get('filter');
    const lang = searchParameters.get('lang');
    
    return (
        <div className="container py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="card">
                    <h3 className="text-lg font-bold mb-3 text-gray-900">Counter</h3>
                    <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-blue-600">{counter}</span>
                        <div className="flex gap-2">
                            <button 
                                onClick={() => setCounter(prev => prev + 1)}
                                className="btn btn-primary"
                            >
                                +
                            </button>
                            <button 
                                onClick={() => setCounter(prev => prev - 1)}
                                className="btn btn-secondary"
                            >
                                -
                            </button>
                        </div>
                    </div>
                </div>
                
                <div className="md:col-span-2 card">
                    <h1 className="text-3xl font-bold mb-4 text-gray-900">
                        {slug}
                    </h1>
                    <div className="flex gap-4 mb-4">
                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                            Language: {lang || 'en'}
                        </span>
                        <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                            Category: {filter || 'general'}
                        </span>
                    </div>
                    <p className="text-gray-600">
                        This is the article content. Add your article details here.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ArticalPage;