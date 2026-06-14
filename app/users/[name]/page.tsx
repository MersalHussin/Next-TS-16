import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Users",
  description: "User profiles",
};


const UsersPage = async ({ params }: { params: { name: string } }) => {
    const name = params.name;

    if (name === "ali") {
        return (
            <div className="container py-12">
                <div className="card max-w-md mx-auto text-center">
                    <h2 className="text-2xl font-bold text-red-600 mb-4">Not Found</h2>
                    <p className="text-gray-600">User :ALI: not found</p>
                </div>
            </div>
        );
    }

    return (
        <div className="container py-12">
            <div className="card max-w-md mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-gray-900">User Profile</h1>
                <div className="text-center">
                    <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                        {name.charAt(0).toUpperCase()}
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">{name}</h2>
                    <p className="text-gray-600 mt-2">Welcome to {name}s profile!</p>
                </div>
                
                <div className="mt-6">
                    <h3 className="text-lg font-bold mb-3 text-gray-900">Friends</h3>
                    <div className="space-y-2">
                        <a href={`/users/${name}/friends/omar`} className="block card text-blue-600 hover:bg-blue-50">
                            Omar
                        </a>
                        <a href={`/users/${name}/friends/sarah`} className="block card text-blue-600 hover:bg-blue-50">
                            Sarah
                        </a>
                        <a href={`/users/${name}/friends/mostafa`} className="block card text-blue-600 hover:bg-blue-50">
                            Mostafa
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UsersPage;
