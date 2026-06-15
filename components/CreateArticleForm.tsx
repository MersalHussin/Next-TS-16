"use client";

import { useState } from "react";
import { createArticle } from "@/app/(blogs)/blog/action";

export default function CreateArticleForm() {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMsg("");

    const formData = new FormData(event.currentTarget);
    const result = await createArticle(formData);

    setLoading(false);
    if (result?.success) {
      setMsg("🎉 تم نشر المقال بنجاح!");
      event.currentTarget.reset(); // تفريغ الحقول بعد النجاح
    } else {
      setMsg(`❌ خطأ: ${result?.error || "فشل النشر"}`);
    }
  }

  return (
    <form 
      onSubmit={handleSubmit} 
      className="max-w-xl mx-auto w-full p-6 bg-white border border-gray-100 rounded-2xl flex flex-col gap-4 shadow-sm"
    >
      <div className="border-b border-gray-50 pb-2 mb-1">
        <h3 className="text-lg font-bold text-gray-800">كتابة مقال جديد ✨</h3>
        <p className="text-xs text-gray-400">شارك آخر التحديثات والمقالات الطبية</p>
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-500 mb-1">عنوان المقال:</label>
        <input 
          type="text" 
          name="title" 
          required 
          placeholder="مثال: فوائد حمض الهيالورونيك للبشرة"
          className="w-full border border-gray-200 p-3 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-colors" 
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-500 mb-1">محتوى المقال:</label>
        <textarea 
          name="content" 
          rows={5} 
          required 
          placeholder="اكتب تفاصيل المقال هنا..."
          className="w-full border border-gray-200 p-3 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none" 
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-500 mb-1">رابط الصورة الخارجي:</label>
        <input 
          type="url" 
          name="imageUrl" 
          placeholder="https://example.com/image.jpg"
          className="w-full border border-gray-200 p-3 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-colors text-left" 
          dir="ltr"
        />
      </div>

      <button 
        type="submit" 
        disabled={loading} 
        className="bg-blue-600 text-white p-3 rounded-xl font-medium text-sm hover:bg-blue-700 disabled:bg-gray-300 transition-colors mt-2"
      >
        {loading ? "جاري النشر..." : "نشر المقال الآن 🚀"}
      </button>

      {msg && (
        <p className={`text-center text-sm font-medium mt-2 ${msg.includes("نجاح") ? "text-green-600" : "text-red-500"}`}>
          {msg}
        </p>
      )}
    </form>
  );
}