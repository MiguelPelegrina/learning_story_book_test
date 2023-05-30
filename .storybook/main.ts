import type { StorybookConfig } from "@storybook/angular";
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-actions"
  ],
  framework: {
    name: "@storybook/angular",
    options: {},
  },
  docs: {
    autodocs: "tag",
    defaultName: 'Documentation'
  },
  staticDirs: ['../public'], //👈 Configures the static asset folder in Storybook
};
export default config;
