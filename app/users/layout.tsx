import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Users",
  description: "Users page",
};

const UsersLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="container py-12">
            <div className="flex flex-col md:flex-row gap-6">
                <aside className="w-full md:w-48 bg-gray-50 rounded-lg p-4">
                    <h3 className="font-bold text-gray-900 mb-4">Users Navigation</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="/users" className="nav-link block text-sm">
                                All Users
                            </a>
                        </li>
                        <li>
                            <a href="/users/mostafa" className="nav-link block text-sm">
                                Mostafa
                            </a>
                        </li>
                        <li>
                            <a href="/users/ali" className="nav-link block text-sm">
                                Ali
                            </a>
                        </li>
                    </ul>
                </aside>
                <main className="flex-1">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default UsersLayout;
