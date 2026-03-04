import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
<<<<<<< HEAD

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
=======


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),
],
>>>>>>> 20f9b6f (Navbar und Inputs angelegt)
})
