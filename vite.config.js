import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // 💥 ADDED THIS LINE TO FIX BLANK PAGE ISSUE ON GITHUB PAGES
  base: "/Kartik-Pawar-2nd-Portfolio-/", 
  plugins: [react()],
})