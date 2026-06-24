import { defineConfig, globalIgnores } from "eslint/config";
import { FlatCompat } from "@eslint/eslintrc";

// 1. Compatibility layer taiyar karein taaki Next.js config array format mein badal sake
const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const eslintConfig = defineConfig([
  // 2. ✅ core-web-vitals ko compat layer ke sath failayein (Ab yeh sahi se iterate hoga)
  ...compat.extends("next/core-web-vitals"),

  // 3. Aapke custom ignores
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;