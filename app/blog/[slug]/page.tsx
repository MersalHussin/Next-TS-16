
export const generateMetadata = async({ params }: { params: {slug: string[] } })=>  {
        const parameters = await params;
    const slug = parameters.slug;
    console.log(slug);
    return{
        title: `${slug}`,
        description:`${slug}-Descrpestion`
    }
};

const ArticalPage = async ({ params }: { params: {slug: string[] } }) => {
    const parameters = await params;
    const slug = parameters.slug;
    return (
        <div className="flex flex-col relative  gap-2">
            <h2>
                Author: Mostafa
            </h2>
            <h1>
                Title: {slug}
            </h1>
        </div>
    );
}

export default ArticalPage;