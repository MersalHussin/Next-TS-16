'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";

interface IProps{
    id: number,
    defaultValue: string,
    defaultMessage: string
}

const EditMessageForm = ({id,defaultValue,defaultMessage}:IProps) => {
    const [name, setName] = useState(defaultValue)
    const [message, setMessage] = useState(defaultMessage)
    const [status, setStatus] = useState('')
    const router = useRouter()

    const handleForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setStatus("Loading")
        try {
            const res = await fetch(`http://localhost:3001/api/contact/${id}`, {
                method: 'PUT',
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
            router.push('/contact')
        } catch  {
            setStatus("Network Problem")
        }
    }

    return (
        <form onSubmit={handleForm} action={'./'}>
                <input type="text"
                    name="name"
                    placeholder="name"
                    value={name}
                    onChange ={(e)=>setName(e.target.value)}
                    />
                <input type="text"
                    name="message"
                    value={message}
                    placeholder="message"
                    onChange ={(e)=>setMessage(e.target.value)}
                />
                <button type="submit">
                    Submit
                </button>

            {status}
            
        </form>
    );
}

export default EditMessageForm;
