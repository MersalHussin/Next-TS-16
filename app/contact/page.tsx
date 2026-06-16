import ContactForm from "@/components/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact us page",
};

const ContactPage = () => {
    return (
        <div className="container py-12">
            <ContactForm/>
        </div>
    );
};

export default ContactPage;
