"use client";

import { createArticle } from "@/app/blog/action";
import { useState } from "react";

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
      location.href = "/blog"
    } else {
      setMsg("❌ فشل النشر");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white border border-gray-100 rounded-2xl flex flex-col gap-4 shadow-sm">
      <h3 className="text-lg font-bold text-gray-800">كتابة مقال جديد ✨</h3>
      <input type="text" name="title" placeholder="عنوان المقال" required className="border border-gray-200 p-2.5 rounded-xl text-sm focus:outline-none focus:border-blue-500" />
      <textarea name="content" placeholder="محتوى المقال" rows={4} required className="border border-gray-200 p-2.5 rounded-xl text-sm focus:outline-none focus:border-blue-500" />
      <input type="url" name="imageUrl" placeholder="رابط الصورة الخارجي" className="border border-gray-200 p-2.5 rounded-xl text-sm focus:outline-none focus:border-blue-500 text-left" dir="ltr" />
      <button type="submit" disabled={loading} className="bg-blue-600 text-white p-2.5 rounded-xl font-medium text-sm hover:bg-blue-700 disabled:bg-gray-300 transition-colors">
        {loading ? "جاري النشر..." : "نشر المقال 🚀"}
      </button>
      {msg && <p className="text-center text-sm font-medium mt-2">{msg}</p>}
    </form>
  );
}