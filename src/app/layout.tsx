import type {Metadata} from 'next'
import {Plus_Jakarta_Sans} from 'next/font/google'
import './globals.css'
import Header from "@/components/custom/header";
import FilterProvider from "@/context/filterProvider";

const inter = Plus_Jakarta_Sans({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'HumorHub',
    description: 'A quick break for humor',
    icons: {
        icon: '/icon.png',
    },
}

export default function RootLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <FilterProvider>
            <div className="bg-background">
                <Header/>
                {children}
            </div>
        </FilterProvider>
        </body>
        </html>
    )
}
