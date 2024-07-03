"use client"
import Invite from "@/components/cards/invite"
// import { redirect } from "next/navigation"

export default function InvitePage() {
    return <div className="w-screen h-screen bg-black text-white flex items-center justify-center">
        <Invite isOpen={true} onClose={() => { }} onSuccess={() => { 
            // redirect("/courses")
            window.location.href = "/courses"
        } } />
    </div>
}