import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, it } from "vitest";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Archived } from "../pages/Archived";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const ArchivedQueryClientProvider = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Archived />
    </QueryClientProvider>
  );
};

describe("Archived", (): void => {
  afterEach(cleanup);

  it("should render", (): void => {
    render(<ArchivedQueryClientProvider />);
  });
  it("should render Correctly", (): void => {
    render(<ArchivedQueryClientProvider />);
    screen.getByText("KnockNote Archived Notes");
  });
});
