import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import remarkUnwrapImages from "remark-unwrap-images";
import rehypeExternalLinks from "rehype-external-links";
import remarkSmartypants from "remark-smartypants";
import remarkMath from "remark-math";
import rehypeMathjax from "rehype-mathjax/chtml";
import expressiveCode from "astro-expressive-code";
import { expressiveCodeOptions } from "./src/site.config";
import { mathJaxMacros } from "./src/mathjax.macros";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  // site: "https://approximateinference.org",
  site: "https://approximateinference.github.io",
  // base: "approximateinference",
  prefetch: true,
  integrations: [
    expressiveCode(expressiveCodeOptions),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
    mdx(),
    icon(),
  ],
  markdown: {
    remarkPlugins: [
      [remarkSmartypants, { dashes: "oldschool" }],
      remarkUnwrapImages,
      remarkMath,
    ],
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: "_blank",
          rel: ["nofollow, noopener, noreferrer"],
        },
      ],
      [
        rehypeMathjax,
        {
          chtml: {
            fontURL:
              "https://cdn.jsdelivr.net/npm/mathjax@3/es5/output/chtml/fonts/woff-v2",
          },
          tex: {
            macros: mathJaxMacros,
          },
        },
      ],
    ],
    remarkRehype: {
      footnoteLabelProperties: {
        className: [""],
      },
    },
  },
});
