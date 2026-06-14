import { notFound } from "next/navigation";


const Page = async ({params}: { params: { name: string } }) => {
    const parameters = await params
    const name = parameters.name

    console.log(parameters);
    if(name == "ali"){
        notFound()
    }
    return (
        <div>
            Welcome  {name}
        </div>
    );
}

export default Page;
