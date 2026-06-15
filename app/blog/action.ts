"use server";

import { supabase } from "@/lib/supabase";
import { revalidatePath } from "next/cache";

export async function createArticle(formData: FormData) {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const imageUrl = formData.get("imageUrl") as string; // لقطنا الرابط الخارجي كنص

  // هنا بنقول لسوبابيز ادخل جدول articles واعمل إدخال
  const { error } = await supabase
    .from("articles")
    .insert([{ title, content, image_url: imageUrl }]);

  if (error) {
    console.error("خطأ في قاعدة البيانات:", error.message);
    return { error: "فشل حفظ المقال" };
  }

  revalidatePath("/blog"); // دي بتحدث الصفحة فوراً عشان المقال الجديد يظهر
  
  return { success: true };
}