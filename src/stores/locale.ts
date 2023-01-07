import { persistentAtom } from "@nanostores/persistent";

export type Locale = "español" | "english";

export const locale = persistentAtom<Locale>("locale", "español", {
  encode: JSON.stringify,
  decode: JSON.parse,
});
