import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About us page",
};

const AboutPage = () => {
    return (
        <div className="container py-12">
            <div className="card max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-gray-900">About Us</h1>
                <p className="text-gray-600 mb-4">
                    Welcome to our Next.js learning application! We are building this app to learn modern web development concepts and best practices.
                </p>
                <p className="text-gray-600">
                    This project demonstrates various Next.js features including dynamic routing, metadata management, and component composition.
                </p>
            </div>
        </div>
    );
};

export default AboutPage;
