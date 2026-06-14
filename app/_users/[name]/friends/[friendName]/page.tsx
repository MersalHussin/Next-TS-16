const Page = async({params}: {params:{name:string,friendName:string}}) => {
    const prameters = await params
    const friendName = prameters.friendName 
    const name = prameters.name 
    console.log(friendName);

    return (
        <div>
           {friendName} Freind of {name}
        </div>
    );
}

export default Page;
