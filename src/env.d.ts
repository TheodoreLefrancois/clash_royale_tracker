/// <reference types="vite/client" />

// https://vitejs.dev/guide/env-and-mode.html#intellisense-for-typescript
interface ImportMetaEnv {
  readonly VITE_TOKEN: string;
  readonly VITE_TOKEN_PROXY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
declare module "*.vue" {
  import { DefineComponent } from "vue";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
