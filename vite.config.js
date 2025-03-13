import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        sourcemap: true, // Activer les sourcemaps
        rollupOptions: {
            output: {
                manualChunks: {
                    // Diviser les dépendances en chunks séparés
                    react: ['react', 'react-dom'],
                    radix: ['@radix-ui/react-tabs'],
                },
            },
        },
        chunkSizeWarningLimit: 1000, // Augmenter la limite d'avertissement si nécessaire
    },
});