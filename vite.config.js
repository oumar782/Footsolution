import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        // Découper certaines dépendances en chunks séparés
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom', 'recharts', 'styled-components'],  // Ajoute tes bibliothèques lourdes ici
        },
      },
    },
    // Ajuster la limite de taille des chunks
    chunkSizeWarningLimit: 1000,  // Fixe la limite à 1 Mo (1 000 Ko)
  },
});
