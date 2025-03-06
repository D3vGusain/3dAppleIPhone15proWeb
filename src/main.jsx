import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import React from 'react'
import * as Sentry from "@sentry/react";
import { replayIntegration } from '@sentry/react'

Sentry.init({
  dsn: "https://b6f089de5572de6fc9cd4fa082047a22@o4508866926084096.ingest.us.sentry.io/4508866928508928",
  integrations: [
    Sentry.browserTracingIntegration(),
    
    Sentry.reactRouterV6BrowserTracingIntegration({
      useEffect: React.useEffect,
    }),
    Sentry.replayIntegration({
      maskAllText: false,
      blockAllMedia: false,
    }),
  ],
 
  tracesSampleRate: 1.0, 

  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],

  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0, 
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
