import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,  // Supprime les console.logs dans la version de production
      },
    },
    rollupOptions: {
      output: {
        // Découper certaines dépendances en chunks séparés
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom', 'recharts', 'styled-components'],  // Ajoute tes bibliothèques lourdes ici
        },
      },
      // Gérer les avertissements de module
      onwarn(warning, warn) {
        if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
          return;  // Ignore ce type d'avertissement
        }
        warn(warning);  // Affiche les autres avertissements
      },
    },
    // Ajuster la limite de taille des chunks
    chunkSizeWarningLimit: 1000,  // Fixe la limite à 1 Mo (1 000 Ko)
  },
});
