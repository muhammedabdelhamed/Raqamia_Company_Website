import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen bg-[#050505] text-white flex items-center justify-center p-6" dir="rtl">
      <div className="max-w-lg text-center">
        <p className="text-[#95f8f2] text-lg font-bold mb-3">404</p>
        <h1 className="text-4xl font-black mb-4">الصفحة غير موجودة</h1>
        <p className="text-gray-400 mb-8">
          ربما تم نقل الرابط أو تغييره. يمكنك العودة إلى الصفحة الرئيسية.
        </p>
        <Link href="/" className="inline-flex min-h-12 items-center rounded-full bg-[#95f8f2] px-8 py-3 font-bold text-black">
          العودة للرئيسية
        </Link>
      </div>
    </section>
  );
}
