import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const TopPage = lazy(() => import('@/pages'))
const AnotherPage = lazy(() => import('@/pages/another'))
const FormPage = lazy(() => import('@/pages/form'))

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<TopPage />} />
          <Route path="another" element={<AnotherPage />} />
          <Route path="form" element={<FormPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
