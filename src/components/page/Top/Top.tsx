import React from 'react'
import { Link } from 'react-router-dom'

export const Top = () => {
  return (
    <main>
      <h1>Top</h1>
      <Link to="/another">Another</Link>
      <br />
      <Link to="/form">Form</Link>
    </main>
  )
}
