import { supabase } from "@/lib/supabase";
import CreateArticleForm from "@/components/CreateArticleForm";

export default async function HomePage() {
  // جلب كافة المقالات من سوبابيز مرتبة من الأحدث للأقدم
  const { data: articles } = await supabase
    .from("articles")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <main className="p-6 md:p-12 flex flex-col gap-12 bg-gray-50/40 min-h-screen text-right" dir="rtl">
      

      {/* قسم عرض البيانات */}
      <div className="max-w-xl mx-auto w-full flex flex-col gap-6">
        <div className="flex items-center justify-between border-r-4 border-blue-600 pr-3">
          <h2 className="text-xl font-bold text-gray-800">المقالات المنشورة 📚</h2>
          <span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full font-medium">
            العدد: {articles?.length || 0}
          </span>
        </div>
        
        <div className="flex flex-col gap-6">
          {articles?.map((article) => (
            <div 
              key={article.id} 
              className="border border-gray-100 bg-white p-5 rounded-2xl shadow-sm flex flex-col gap-4 hover:shadow-md transition-shadow"
            >
              {/* عرض الصورة فقط لو العميل حط رابط */}
              {article.image_url && (
                <img 
                  src={article.image_url} 
                  alt={article.title} 
                  className="w-full h-52 object-cover rounded-xl bg-gray-50"
                  loading="lazy"
                />
              )}
              
              <div className="flex flex-col gap-1.5">
                <h3 className="text-lg font-bold text-gray-900 leading-snug">
                  {article.title}
                </h3>
                <p className="text-gray-500 text-xs">
                  {new Date(article.created_at).toLocaleDateString("ar-EG", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                {article.content}
              </p>
            </div>
          ))}

          {(!articles || articles.length === 0) && (
            <div className="text-center py-12 bg-white border border-dashed border-gray-200 rounded-2xl">
              <p className="text-gray-400 text-sm">لا توجد مقالات منشورة بعد. كن أول من ينشر! ✍️</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}