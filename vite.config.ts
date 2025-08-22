import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import { componentTagger } from "lovable-tagger";

// Get __dirname equivalent in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig(({ mode }) => ({
    server: {
        host: "::", // listens on all addresses (IPv4 + IPv6)
        port: 8080,
    },
    plugins: [
        react(),
        mode === "development" && componentTagger(),
    ].filter(Boolean), // safely remove falsy values
    resolve: {
        alias: {
            "@": resolve(__dirname, "src"),
        },
    },
}));