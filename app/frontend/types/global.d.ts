// global.d.ts
// Need to import Page to get proper type union on Page<T> when calling usePage() (otherwise you just get Page<any>)
import type { Page } from "@inertiajs/core";

declare module "@inertiajs/core" {
  export interface InertiaConfig {
    flashDataType: {
      notice?: string;
      alert?: string;
      toast?: {
        type: "success" | "error";
        message: string;
      };
    };
  }
}
