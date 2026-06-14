import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact us page",
};

const ContactPage = () => {
    return (
        <div className="container py-12">
            <div className="card max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-gray-900">Contact Us</h1>
                <p className="text-gray-600 mb-6">
                    Have questions or feedback? We would love to hear from you!
                </p>
                
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <span className="text-xl">📧</span>
                        <span className="text-gray-700">contact@example.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-xl">📞</span>
                        <span className="text-gray-700">+1 (123) 456-7890</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-xl">📍</span>
                        <span className="text-gray-700">123 Web Street, Internet City</span>
                    </div>
                </div>
            
                <form className="mt-8 space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <input 
                            type="text" 
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Your name"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input 
                            type="email" 
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="your.email@example.com"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                        <textarea 
                            rows={4}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Your message..."
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;
