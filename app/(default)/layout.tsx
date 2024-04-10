'use client'

import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

import PageIllustration from '@/components/page-illustration'
import Footer from '@/components/ui/footer'
import { LinkedInInsightTag } from 'nextjs-linkedin-insight-tag'
import { GoogleTagManager } from "@next/third-parties/google"



export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {  

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    })
  })

  return (
    <>
      <main className="grow">
    <GoogleTagManager gtmId="GTM-TK53DNXC" />

        <PageIllustration />

        {children}
    <LinkedInInsightTag />
      </main>

      {/* <Footer /> */}
    </>
  )
}
