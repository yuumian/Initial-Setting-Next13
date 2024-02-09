import React from "react";
import type { Preview } from "@storybook/react";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@/styles/globals.css";

const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      retry: 0,
    },
  },
});

const preview: Preview = {
  decorators: [
    (storyFn) => {
      return (
        <>
          <RecoilRoot>
            <QueryClientProvider client={queryClient}>
              {storyFn()}
            </QueryClientProvider>
          </RecoilRoot>
        </>
      );
    },
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      sort: "requiredFirst",
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      story: {
        height: "500px",
      },
    },
  },
};

export default preview;