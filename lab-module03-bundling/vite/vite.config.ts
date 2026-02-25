import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import { analyzer } from "vite-bundle-analyzer";
import viteCompression from "vite-plugin-compression";

export default defineConfig({
    plugins: [
        checker({ typescript: true }),
        analyzer(),
        viteCompression({
            verbose: true,       
            disable: false,      
            deleteOriginFile: false, 
            threshold: 0,        
            algorithm: "gzip",   
            ext: ".gz"           
        }),
        viteCompression({
            verbose: true,
            disable: false,
            deleteOriginFile: false,
            threshold: 0,
            algorithm: "brotliCompress", 
            ext: ".br"                   
        })
    ]
})