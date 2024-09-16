import '@/app/globals.css'

export const metadata = {
  title: 'NicheNamer',
  description: 'AI-powered business name generator',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
