import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  	plugins: [
		react(),
		tailwindcss(), //Adicionando o plugin do tailwind no vite, para utilizá-lo pelo css do projeto
	],
})
