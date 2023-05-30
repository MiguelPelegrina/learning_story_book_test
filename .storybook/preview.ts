import type { Preview } from "@storybook/angular";

import { initialize, mswDecorator } from 'msw-storybook-addon';

initialize();

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    // All stories expect a theme arg
    argTypes: { theme: { control: 'select', options: ['light', 'dark'] } },
    // The default value of the theme arg to all stories
    args: { theme: 'light' },
    decorators: [mswDecorator],
    parameters: {
      actions: { argTypesRegex: '^on[A-Z].*' },
      controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  },
};

export default preview;
