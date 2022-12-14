import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../src/theme/default";

export const decorators = [
  Story => (
    <ThemeProvider theme={defaultTheme}>
      <Story />
    </ThemeProvider>
  )
];
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const argTypes = { theme: { control: 'select', options: ['light', 'dark'] } };
