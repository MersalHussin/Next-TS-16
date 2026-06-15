import { supabase } from "@/lib/supabase";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog layout",
};

//  Destracring (data) to articles
  const { data: articles } = await supabase
    .from("articles")
    .select("*")
    .order("created_at", { ascending: false });

    console.log(articles);

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
                  {articles?.map((article) => (
          <Link href={`/blog/${article.id}`} key={article.id} className="border border-gray-100 bg-white p-5 rounded-2xl shadow-sm flex flex-col gap-3">
            {article.image_url && (
              <img src={article.image_url} alt={article.title} className="w-full h-48 object-cover rounded-xl bg-gray-50" />
            )}
            <h3 className="text-lg font-bold text-gray-800">{article.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">{article.content}</p>
          </Link>
        ))}

        {(!articles || articles.length === 0) && (
          <p className="text-gray-400 text-center py-6 text-sm">لا توجد مقالات منشورة بعد.</p>
        )}
                </ul>
            </aside>
            <main className="flex-1">
                {children}
            </main>
        </div>
    </div>
  );
}
