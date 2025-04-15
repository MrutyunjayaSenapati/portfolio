import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Listen on all network interfaces
    port: 5173, 
    allowedHosts: ['4fc2-183-83-38-203.ngrok-free.app']     // Specify the port (change if needed)
  },
});
