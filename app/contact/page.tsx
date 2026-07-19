import ContactForm from "@/components/ContactForm";
// import { useEffect, useState } from "react";




const ContactPage = async() => {
    // const [messages,setMessages] = useState([])
    const messages = await fetch('http://localhost:3001/api/contact').then(res => res.json()).then(data => data.messages)

    // useEffect(()=>{
    //     fetch('http://localhost:3001/api/contact')
    //     .then((res) => res.json())
    //     .then((data)=> setMessages(data.messages))
    //     // console.log(messages);
    // },[])

    // console.log(messages);
    return (
        <div className="container py-12">
            <ContactForm/>
            {messages.map((message:{id: number, name: string, message: string}) => (
                <div key={message.id} className="card max-w-3xl mx-auto mt-8">
                    <h2 className="text-xl font-bold mb-2">{message.name}</h2>
                    <p className="text-gray-800 mt-4">{message.message}</p>
                </div>
            ))}
        </div>
    );
};

export default ContactPage;
