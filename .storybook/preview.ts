import type { Preview } from "@storybook/angular";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    // All stories expect a theme arg
    argTypes: { theme: { control: 'select', options: ['light', 'dark'] } },
    // The default value of the theme arg to all stories
    args: { theme: 'light' },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
