import Link from 'next/link';

const NotFound = () => {
    return (
        <div className="container py-12">
            <div className="max-w-md mx-auto text-center">
                <div className="text-8xl mb-6">404</div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                    Page Not Found
                </h1>
                <p className="text-gray-600 mb-8">
                    عذراً، الصفحة التي تبحث عنها غير موجودة.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/" className="btn btn-primary">
                        🏠 الرئيسية
                    </Link>
                    <Link href="/blog" className="btn btn-secondary">
                        📝 المدونة
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
