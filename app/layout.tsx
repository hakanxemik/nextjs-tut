import '../styles/globals.css'
import Header from "./Header"

export default function RootLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode,
  }) {
    return (
        <html lang="en">
            <head>
                <title>NextJS Todo Tut</title>
            </head>
            <body>
                <Header></Header>
                {children}
            </body>
        </html>
    );
  }