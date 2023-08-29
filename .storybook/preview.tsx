import { MantineProvider } from "@mantine/core";
import type { Preview } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import "../src/index.css";
import { myCache, theme } from "./theme";

function ThemeWrapper(props: { children: React.ReactNode }) {
  return (
    <MantineProvider
      emotionCache={myCache}
      theme={theme}
      withGlobalStyles
      withNormalizeCSS
    >
      {props.children}
    </MantineProvider>
  );
}

export const decorators = [
  (renderStory: Function) => (
    <MemoryRouter initialEntries={["/"]}>
      <ThemeWrapper>{renderStory()}</ThemeWrapper>
    </MemoryRouter>
  ),
];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
