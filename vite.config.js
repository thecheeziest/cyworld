import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // 서버 설정 추가
    mimeTypes: {
      "text/javascript": ["js", "jsx"],
      "text/jsx": ["jsx"]
    }
  }
})
