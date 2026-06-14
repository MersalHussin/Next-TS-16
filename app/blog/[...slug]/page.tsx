const ArticalPage = async ({ params }: { params: Promise<{ slug: string[] }> }) => {
    const parameters = await params;
    const slug = parameters.slug;

    // تأمين الكود في حال لم يكن هناك عنصر ثاني في الـ slug لحمايته من الـ Crash
    const author = slug[0] ? decodeURIComponent(slug[0]) : "Unknown";
    const title = slug[1] ? decodeURIComponent(slug[1]) : "No Title";

    return (
        <div className="flex flex-col relative  gap-2">
            <h2>
                Author: {author}
            </h2>
            <h1>
                Title: {title}
            </h1>
        </div>
    );
}

export default ArticalPage;