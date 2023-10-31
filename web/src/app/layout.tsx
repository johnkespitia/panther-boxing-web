import './globals.css'
import Head from 'next/head';
import Header from "@/components/header";
import profileData from "@/data/profileData";
import Footer from "@/components/footer";

export const metadata = {
  title: 'John Espitia - Software and Tech Solutions',
  description: 'Software developer with 13 years of experience using PHP, Javascript, Golang, and more. I had worked on many projects for companies to improve their processes, and I had occupied important positions in these companies as Software Developer, Developer Team Leader, and TI Director.',
  keywords: "John Espitia, johnkespitia, golang, php, react, software, software development, Fullstack, developer, backend, frontend"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body>
      <Header name={profileData.name}
              profilePicture={profileData.profilePicture}
              tagline={profileData.tagline}
              altProfilePicture={profileData.profilePicture} email={profileData.email} phone={profileData.phone} socialMediaLinks={profileData.socialMediaLinks} />
      {children}
      <Footer />
      </body>
    </html>
  )
}
