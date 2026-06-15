"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function subscribeToNewsletter(formData: FormData) {
  const email = formData.get("email") as string;

  if (!email || !email.includes("@")) {
    return { error: "الرجاء إدخال بريد إلكتروني صحيح." };
  }

  try {
    // 1️⃣ إضافة الشخص إلى قائمة المشتركين (Contacts) في Resend
    const contact = await resend.contacts.create({
      email: email,
      unsubscribed: false,
      // audienceId: process.env.RESEND_AUDIENCE_ID as string,
    });

    if (contact.error) {
      console.error("Resend Contact Error:", contact.error);
      return { error: "فشل حفظ البيانات. تأكد من الـ Audience ID." };
    }

    // 2️⃣ إرسال إيميل ترحيبي فوري
    const emailRes = await resend.emails.send({
    from: "Mersal <helloa@mersal.top>", // استخدم هذا للاختبار إذا لم توثق نطاقك بعد
      to: email,
      subject: "مرحباً بك في Bonn! ✨",
      html: "<p>شكراً لاشتراكك في نشرتنا البريدية.</p>",
    });

    if (emailRes.error) {
       console.error("Email Send Error:", emailRes.error);
    }

    return { success: true };
  } catch (error) {
    console.error("Resend Error:", error);
    return { error: "حدث خطأ أثناء الاشتراك، حاول مجدداً." };
  }
}