import Counter from "@/components/Counter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Next.js Learn App",
};

export default async function Home() {
  await new Promise((resolve) => setTimeout(() => {
    resolve(console.log("done"));
  }, 500));

    // const randomError = Math.random() < 0.5

    // console.log(randomError);
    //  if(randomError){
       
    //    throw new error("this is a test error")
    //  }


  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
          Welcome to <span className="text-blue-600">Next.js Learn</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Build modern web applications with Next.js 15
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="card">
          <h3 className="text-xl font-bold mb-3 text-blue-600">Pages</h3>
          <p className="text-gray-600">Create multiple pages with dynamic routing</p>
        </div>
        <div className="card">
          <h3 className="text-xl font-bold mb-3 text-blue-600">Components</h3>
          <p className="text-gray-600">Reusable React components</p>
        </div>
        <div className="card">
          <h3 className="text-xl font-bold mb-3 text-blue-600">Metadata</h3>
          <p className="text-gray-600">SEO-friendly metadata for each page</p>
        </div>
      </div>

      <div className="flex justify-center items-center gap-6">
        <Counter />
      </div>
    </div>
  );
}
