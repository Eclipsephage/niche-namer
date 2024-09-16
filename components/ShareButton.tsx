import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog"
import { Share2, Copy } from "lucide-react"

interface ShareButtonProps {
  shareLink: string;
}

export function ShareButton({ shareLink }: ShareButtonProps) {
  const [isShareDialogOpen, setIsShareDialogOpen] = useState(false)

  const handleShare = () => {
    setIsShareDialogOpen(true)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(shareLink)
      .then(() => {
        console.log('Link copied to clipboard')
        // You can add a toast notification here if you want
      })
      .catch(err => {
        console.error('Failed to copy link: ', err)
      })
  }

  return (
    <>
      <Button
        onClick={handleShare}
        className="h-14 sm:h-16 px-4 text-lg sm:text-xl font-medium text-white bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 hover:brightness-110 rounded-lg shadow-md"
        aria-label="Share this page"
      >
        <Share2 className="h-6 w-6" />
      </Button>

      <Dialog open={isShareDialogOpen} onOpenChange={setIsShareDialogOpen}>
        <DialogContent className="bg-white dark:bg-gray-800">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-gray-900 dark:text-gray-100">Share this page</DialogTitle>
          </DialogHeader>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Copy the link below to share this page with others:
          </p>
          <div className="flex items-center space-x-2">
            <Input
              value={shareLink}
              readOnly
              className="flex-grow bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            />
            <Button
              onClick={handleCopy}
              className="shrink-0 bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Copy className="h-4 w-4 mr-2" />
              Copy
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}