import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog layout",
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container py-12">
        <div className="flex flex-col md:flex-row gap-6">
            <aside className="w-full md:w-56 bg-gray-50 rounded-lg p-4">
                <h3 className="font-bold text-gray-900 mb-4">Blog Categories</h3>
                <ul className="space-y-2">
                    <li><a href="/blog?filter=java" className="nav-link block text-sm">Java</a></li>
                    <li><a href="/blog?filter=react" className="nav-link block text-sm">React</a></li>
                    <li><a href="/blog?filter=js" className="nav-link block text-sm">JavaScript</a></li>
                    <li><a href="/blog?filter=nextjs" className="nav-link block text-sm">Next.js</a></li>
                </ul>
            </aside>
            <main className="flex-1">
                {children}
            </main>
        </div>
    </div>
  );
}
