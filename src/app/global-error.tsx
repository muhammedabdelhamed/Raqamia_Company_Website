"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="ar" dir="rtl">
      <body className="min-h-screen bg-[#050505] text-white flex items-center justify-center p-6 font-sans">
        <main className="max-w-lg text-center">
          <p className="text-[#95f8f2] font-bold mb-3">رقمية</p>
          <h1 className="text-3xl font-black mb-4">حدث خطأ غير متوقع</h1>
          <p className="text-gray-400 mb-8">
            لم نتمكن من عرض الصفحة الآن. يمكنك المحاولة مرة أخرى.
          </p>
          <button
            type="button"
            onClick={reset}
            className="min-h-12 rounded-full bg-[#95f8f2] px-8 py-3 font-bold text-black"
          >
            إعادة المحاولة
          </button>
        </main>
      </body>
    </html>
  );
}
