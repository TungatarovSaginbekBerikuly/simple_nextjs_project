import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata = {
    title: "Serendale.ai – Быстрый блокчейн с AI-защитой данных",
    description:
        "Serendale.ai – высокоскоростная блокчейн-платформа с AI-защитой данных и Proof of Stake.",
    openGraph: {
        title: "Serendale.ai – Быстрый блокчейн с AI-защитой данных",
        description:
            "Скоростная блокчейн-платформа с AI-защитой данных и Proof of Stake.",
        url: "https://serendale.ai",
        type: "website",
    },
}

export default function RootLayout({ children }) {
    return (
    <html lang="en">
        <head>
            {/* Google Fonts */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100..900&display=swap"
            rel="stylesheet"
            />

            {/* FontAwesome */}
            <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"
            />
        </head>

        <body>
            <Header />
            {children}
            <Footer />
        </body>
    </html>
  )
}