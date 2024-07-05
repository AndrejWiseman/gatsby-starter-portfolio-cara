import { GatsbyConfig } from 'gatsby';
import 'dotenv/config';

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE === 'true';

type PluginRef = {
  resolve: string;
  options: any;
};

const config: GatsbyConfig = {
  siteMetadata: {
    siteTitle: `Cara`,
    siteTitleAlt: `Cara - Gatsby Starter Portfolio`,
    siteHeadline: `Cara - Gatsby Theme from @lekoarts`,
    siteUrl: `https://cara.lekoarts.de`,
    siteDescription: `Playful and Colorful One-Page portfolio featuring Parallax effects and animations`,
    siteImage: `/banner.jpg`,
    siteLanguage: `en`,
    author: `@lekoarts_de`,
  },
  // Postavka trailingSlash kako bi se dodao trailing slash na kraju svakog URL-a
  trailingSlash: 'always',
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cara - @lekoarts/gatsby-theme-cara`,
        short_name: `Cara`,
        description: `Danijelina podrska`,
        start_url: `/`,
        background_color: `#141821`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    // Conditionally add plugin based on shouldAnalyseBundle
    ...(shouldAnalyseBundle
        ? [
          {
            resolve: `gatsby-plugin-webpack-bundle-analyzer`,
            options: {
              analyzerPort: 3000,
              production: true,
              disable: !shouldAnalyseBundle,
            },
          },
        ]
        : []),
  ],
};

export default config;

