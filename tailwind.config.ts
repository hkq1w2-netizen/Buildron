import type { Config } from "tailwindcss";

/**
 * BUILDron light premium palette.
 * Names are inherited from the previous dark system deliberately (see
 * app/globals.css) so the whole component tree re-themes from one place.
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#F6F4EF",       // page ground — warm ivory
        graphite: "#FBF9F5",  // raised surface — bone
        charcoal: "#FFFFFF",  // panels, inputs
        line: "#E3DED4",      // hairline
        mist: "#6C7077",      // secondary text
        paper: "#14161A",     // primary text — near-black graphite
        volt: "#1E3AFF",      // the single accent — cobalt
        voltsoft: "#4B63FF",
        carbon: "#0B0B0C",    // the one dark cinematic scene
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      letterSpacing: { tightest: "-0.045em" },
      transitionTimingFunction: {
        // One authored easing curve, used everywhere motion happens.
        brand: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
