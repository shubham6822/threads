import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import { title } from "process";

export const metadata = {
    title: "Threads",
    description: "Threads is a platform for creating and managing threads",
}

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={`${inter.className} bg-dark-1 `}>
                    <main>
                        {children}
                    </main>
                </body>
            </html>
        </ClerkProvider>
    )
}