import type {Metadata} from 'next'
import {Plus_Jakarta_Sans} from 'next/font/google'
import './globals.css'
import Header from "@/components/custom/header";

const inter = Plus_Jakarta_Sans({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'HumorHub',
    description: 'A quick break for humor',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <div className="bg-secondary h-[100vh] w-[100vw] flex flex-col place-content-center">
            <div className="mx-[15%]">
            <Header/>
            {children}
            </div>
        </div>
        </body>
        </html>
    )
}
