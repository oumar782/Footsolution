import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    // Diviser les dépendances en chunks séparés
                    react: ['react', 'react-dom'],
                    reactRouter: ['react-router-dom'],
                    // Ajoutez d'autres dépendances ici
                },
            },
        },
        chunkSizeWarningLimit: 1000, // Augmenter la limite d'avertissement si nécessaire
    },
});