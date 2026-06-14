import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Login",
  description: "Login page",
};

const LoginPage = () => {
    return (
        <form className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                    type="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input 
                    type="password" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your password"
                />
            </div>
            <button type="submit" className="btn btn-primary w-full">
                Sign In
            </button>
            <p className="text-center text-sm text-gray-600 mt-4">
                Dont have an account? <Link href="/regstire" className="text-blue-600 hover:underline">Register</Link>
            </p>
        </form>
    );
};

export default LoginPage;
