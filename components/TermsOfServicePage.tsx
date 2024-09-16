'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, FileText } from "lucide-react"
import { useRouter } from 'next/navigation'

export function TermsOfServicePage() {
  const router = useRouter()

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-600 p-4">
      <Card className="w-full max-w-4xl">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center flex items-center justify-center">
            <FileText className="mr-2 h-8 w-8 text-blue-500" />
            Terms of Service
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-lg">
            Welcome to NicheNamer. By using our service, you agree to comply with and be bound by the following terms and conditions of use.
          </p>
          
          <section className="space-y-4">
            <h3 className="text-xl font-semibold">1. Acceptance of Terms</h3>
            <p>
              By accessing or using NicheNamer, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use our service.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold">2. Use of Service</h3>
            <p>
              You may use NicheNamer for lawful purposes only. You are prohibited from violating or attempting to violate the security of the service, including, without limitation, accessing data not intended for you or logging onto a server or account which you are not authorized to access.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold">3. Intellectual Property</h3>
            <p>
              The content, organization, graphics, design, compilation, magnetic translation, digital conversion and other matters related to NicheNamer are protected under applicable copyrights, trademarks and other proprietary rights. The copying, redistribution, use or publication by you of any such matters or any part of the service is strictly prohibited.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold">4. Disclaimer of Warranties</h3>
            <p>
              NicheNamer is provided on an &quot;as is&quot; and &quot;as available&quot; basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold">5. Limitation of Liability</h3>
            <p>
              In no event shall NicheNamer or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on NicheNamer, even if NicheNamer or a NicheNamer authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold">6. Changes to Terms</h3>
            <p>
              NicheNamer reserves the right to modify these terms of service at any time. We do so by posting and drawing attention to the updated terms on the site. Your decision to continue to visit and make use of the site after such changes have been made constitutes your formal acceptance of the new Terms of Service.
            </p>
          </section>

          <div className="mt-8 text-center">
            <Button variant="outline" onClick={() => router.push('/')} className="text-lg">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Home
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}