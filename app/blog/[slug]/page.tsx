
export const generateMetadata = async({ params }: { params: {slug: string[] } })=>  {
        const parameters = await params;
    const slug = parameters.slug;
    console.log(slug);
    return{
        title: `${slug}`,
        description:`${slug}-Descrpestion`
    }
};

const ArticalPage = async ({ params, searchParams}: { params: {slug: string[] }, searchParams: {filter?: string, lang?: string}}) => {
    const parameters = await params;
    const {filter , lang} = await searchParams
    const slug = parameters.slug;
    return (
        <div className="flex flex-col relative  gap-2">
            <h2>
                lanugaue: {lang}
                {/* en */}
            </h2>
            <h1>
                Title: {slug} 
                {/* frist-blog */}
            </h1>
            <h1>
                Category: {filter}
                {/* React  */}
            </h1>
        </div>
    );
}

export default ArticalPage;