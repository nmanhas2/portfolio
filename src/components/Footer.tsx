import React from 'react'
import Stack from '../components/Stack'

export default function Footer() {
  return (
    <footer className="w-full bg-[#C60F7B] text-[#E2DBBE] p-4 text-lg flex flex-col items-center gap-2">
      <span>Website Stack:</span>
      <Stack />
      <span>© 2025 Nubal Manhas. All rights reserved.</span>
    </footer>
  )
}
