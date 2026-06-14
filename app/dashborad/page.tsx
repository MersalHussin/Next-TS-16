'use client'

import { useRouter } from "next/navigation";

const Dashboard = () => {

    const router = useRouter()
    return (
        <div>
            <button onClick={() => router.push("/")}>Home</button>
            <button onClick={() => router.replace("/")}>Home with Replace (not save history)</button>
            <button onClick={() => router.back()}>Back</button>
            <button onClick={() => router.refresh()}>reload(for DB)</button>
        </div>
    );
}

export default Dashboard;
