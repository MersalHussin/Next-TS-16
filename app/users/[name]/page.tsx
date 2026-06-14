

const Page = async ({params}: { params: { name: string } }) => {
    const parameters = await params
    const name = parameters.name

    console.log(parameters);
    return (
        <div>
            Welcome  {name}
        </div>
    );
}

export default Page;
