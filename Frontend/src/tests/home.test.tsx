import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, it } from "vitest";
import { Home } from "../pages/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const HomeQueryClientProvider = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
};

describe("Home", (): void => {
  afterEach(cleanup);

  it("should render", (): void => {
    render(<HomeQueryClientProvider />);
  });
  it("should render Correctly", (): void => {
    render(<HomeQueryClientProvider />);
    screen.getByText("Welcome to KnockNote");
  });
});
