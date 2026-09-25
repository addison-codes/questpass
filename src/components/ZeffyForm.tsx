'use client'

import Script from 'next/script'
import React, { useState } from 'react'

export function ZeffyForm() {
  const [showFallback, setShowFallback] = useState(false)

  return (
    <div className="w-full max-w-sm">
      <div
        data-zeffy-embed
        data-form-url="/en-US/embed/newsletter-form/sign-up-for-our-newsletter-4406"
      />

      {showFallback && (
        <div style={{ position: 'relative', overflow: 'hidden', height: '280px', width: '100%' }}>
          <iframe
            title="Signup form powered by Zeffy"
            style={{
              position: 'absolute',
              border: 0,
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              width: '100%',
              height: '100%',
            }}
            src="https://www.zeffy.com/en-US/embed/newsletter-form/sign-up-for-our-newsletter-4406"
            allowTransparency={true}
          />
        </div>
      )}

      <Script
        src="https://www.zeffy.com/embed/v2/zeffy-embed.js"
        strategy="lazyOnload"
        onError={() => setShowFallback(true)}
      />
    </div>
  )
}
