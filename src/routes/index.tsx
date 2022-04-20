import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const TopPage = lazy(() => import('@/pages'))
const AnotherPage = lazy(() => import('@/pages/another'))

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<TopPage />} />
          <Route path="another" element={<AnotherPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
