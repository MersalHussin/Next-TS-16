import { supabase } from "@/lib/supabase";
import Link from "next/link";

export default async function HomePage() {
  const { data: articles } = await supabase
    .from("articles")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <main className="p-8 flex flex-col gap-10 bg-gray-50/50 min-h-screen">
      <div className="max-w-xl mx-auto w-full grid grid-cols-1 gap-6">
        <h2 className="text-xl font-bold text-gray-800 border-r-4 border-blue-600 pr-2">المقالات المنشورة 📚</h2>
        
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
      </div>
    </main>
  );
}