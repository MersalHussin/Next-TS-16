import { supabase } from "@/lib/supabase";
import { notFound } from "next/navigation";
import Link from "next/link";

interface ArticlePageProps {
  params: {id: string };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const resolvedParams = await params;
  const id = resolvedParams.id; 

  console.log("Loading Article ID:", id);

  // 2️⃣ جلب بيانات المقال المحدد من سوبابيز باستخدام الـ id
  const { data: article, error } = await supabase
    .from("articles")
    .select("*")
    .eq("id", id) 
    .single(); 

  if (error) {
    console.error("Supabase error:", error.message);
    notFound();
  }

  if (!article) {
    notFound();
  }

  console.log(article);

  // 4️⃣ الـ Return الموحدة والوحيدة لعرض الصفحة بالكامل
  return (
    <main className="min-h-screen bg-white text-right p-6 md:p-12" dir="rtl">
      <div className="max-w-3xl mx-auto">
        
        {/* زر العودة للمدونة */}
        <Link 
          href="/blog" // أو المسار اللي يعجبك للرئيسية
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 font-medium transition-colors"
        >
          ← العودة للمدونة
        </Link>

        <article className="flex flex-col gap-8">
          
          {/* العنوان والتاريخ */}
          <header className="flex flex-col gap-4 border-b pb-8">
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              {article.title}
            </h1>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-bold">Bonn Med ☕</span>
              <span>•</span>
              <time>
                {new Date(article.created_at).toLocaleDateString("ar-EG", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
          </header>

          {/* الصورة الأساسية */}
          {article.image_url && (
            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-lg">
              <img 
                src={article.image_url} 
                alt={article.title} 
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* محتوى المقال */}
          <div className="prose prose-lg max-w-none text-gray-700 leading-loose whitespace-pre-line">
            {article.content}
          </div>

        </article>
      </div>
    </main>
  );
}