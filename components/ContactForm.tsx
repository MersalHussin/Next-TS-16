'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";


const ContactForm = () => {
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const [status, setStatus] = useState('')
    const router = useRouter()

    const handleForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setStatus("Loading")
        try {
            const res = await fetch('http://localhost:3001/api/contact', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, message })
            })

            const data = await res.json()
            if (!res.ok) {
                throw new Error(data.error || 'Something went wrong')
            }

            setStatus('Data Send')
            setMessage('')
            setName('')
            router.refresh()
        } catch  {
            setStatus("Network Problem")
        }
    }

    return (
        <form onSubmit={handleForm} action={'./'}>
                <input type="text"
                    name="name"
                    value={name}
                    placeholder="name"
                    onChange ={(e)=>setName(e.target.value)}
                    />
                <input type="text"
                    name="message"
                    placeholder="message"
                    value={message}
                    onChange ={(e)=>setMessage(e.target.value)}
                />
                <button type="submit">
                    Submit
                </button>

            {status}
            
        </form>
    );
}

export default ContactForm;
