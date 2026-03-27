import type { Metadata } from "next";
import { GoogleAnalytics, GoogleTagManager } from "@/components/google";
import Hello from "@/components/hello";
import NavBar from "@/components/nav-bar";
import SideBar from "@/components/side-bar";
import config from "@/config";
import { roboto } from "./font";
import { WebVitals } from "@/components/web-vitals";
import { ProgressBar } from "@/components/progress-bar";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";

const {
  title, description,
  author, keywords,
  googleAnalyticId, googleTagManagerId,
  openGraph, about, avatar
} = config;
const {
  firstName,
  lastName,
  middleName,
  preferredName
} = about;

export const metadata: Metadata = {
  title: title,
  description: description,
  authors: [{ name: author }],
  creator: author,
  keywords: keywords,
  openGraph: {
    url: openGraph.url,
    type: "website",
    siteName: openGraph.siteName,
    title: openGraph.title,
    description: openGraph.description,
   
  },
  manifest: '/manifest.webmanifest',
  twitter: {
    card: "summary_large_image",
    title: "TAMANNA KHAN | Software Engineer ",
    description:
      "Hi, I’m TAMANNA KHAN, a visionary Visual Computing Engineer with a deep passion for AI 🤖, Computer Vision 👁️, Machine Learning 📊, and Generative AI 🎨. I specialize in crafting groundbreaking AI models, designing intelligent agents, and building AI-powered mobile applications 📱 that address real-world challenges. With a robust engineering foundation and an insatiable curiosity for deep learning and automation 🔧, I aim to redefine the boundaries of technology. Beyond my professional endeavors, I’m an open-source advocate 🌐, a dedicated mentor, and a lifelong learner 📚. When I’m not immersed in code, you’ll find me on the basketball court 🏀, exploring virtual worlds 🎮, capturing moments through photography 📸, or weaving stories 🎤. Let’s connect and create something extraordinary together!.",
   
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/logo.png',
    apple: [
      {
        url: '/logo.png',
        sizes: '192x192',
        type: 'image/png'
      }
    ],
  },
};

type RootLayoutProps = {
  children: React.ReactNode
}

function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${roboto.className}`}>
      <WebVitals gaId={googleAnalyticId} />
      <body>
        <ProgressBar className="fixed top-0 h-1 bg-yellow-500" >
          <Hello />
          <main>
            <SideBar
              avatar={avatar}
              firstName={firstName}
              lastName={lastName}
              middleName={middleName}
              preferredName={preferredName}
            />
            <div className="main-content">
              <NavBar />
              {children}
            </div>
          </main>
        </ProgressBar>
      </body>
      <GoogleAnalytics gaId={googleAnalyticId} />
      <GoogleTagManager gtmId={googleTagManagerId} />
      <Analytics />
    </html>
  );
}

export default RootLayout
