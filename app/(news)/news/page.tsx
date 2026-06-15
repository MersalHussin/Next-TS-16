"use client";

import { useState } from "react";
import { subscribeToNewsletter } from "./action";

export default function Newsletter() {
  const [status, setStatus] = useState<{ success?: boolean; error?: string | null }>({});
  const [isPending, setIsPending] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsPending(true);
    setStatus({});

    const formData = new FormData(event.currentTarget);
    const result = await subscribeToNewsletter(formData);

    setIsPending(false);
    setStatus(result);
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-sm border border-gray-100 text-center">
      <h3 className="text-xl font-bold mb-2 text-gray-800">اشترك في نشرتنا البريدية ⚡</h3>
      <p className="text-sm text-gray-500 mb-4">كن أول من يعلم بالخدمات الجديدة والعروض الحصرية.</p>

      {status.success ? (
        // تأثير المفاجأة: شكل نجاح تفاعلي مريح جداً للعين عند اكتمال العملية
        <div className="p-4 bg-green-50 text-green-700 rounded-xl font-medium animate-fade-in">
          🎉 تم الاشتراك بنجاح! تفقد بريدك الإلكتروني الآن.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div className="relative">
            <input
              type="email"
              name="email"
              required
              placeholder="yourname@example.com"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-left"
              disabled={isPending}
            />
          </div>
          
          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-black text-white font-medium py-3 rounded-xl hover:bg-gray-800 transition-all disabled:bg-gray-400 flex items-center justify-center gap-2"
          >
            {isPending ? (
              <span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full"></span>
            ) : (
              "اشترك الآن"
            )}
          </button>

          {status.error && (
            <p className="text-xs text-red-500 mt-1 font-medium">{status.error}</p>
          )}
        </form>
      )}
    </div>
  );
}