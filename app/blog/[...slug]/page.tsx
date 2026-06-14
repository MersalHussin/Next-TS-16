const ArticalPage = async ({params}: {params: {slug:string[]}}) => {
    const parameters = await params
    const slug = parameters.slug
    console.log(parameters);
    console.log(slug.join("/"));
    return (
        <div>
            {/* {slug.length == 2 ? slug[1] : slug.join(',')} */}


<h2>
Author : {slug[0]}
</h2>
<h1>
Title : {slug[1].split('%20')}
</h1>

        </div>
    );
}

export default ArticalPage;
