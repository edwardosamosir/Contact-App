import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter, Route } from "react-router-dom";
import DeleteContactPage from "../src/pages/DeleteContactPage";
import store from "../src/store";
import fetchMock from "jest-fetch-mock";

describe("DeleteContactPage", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  test("should delete contact and navigate to home page on confirmation", async () => {
    const mockContactId = "1";
    fetchMock.mockResponseOnce(JSON.stringify({}));

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[`/delete/${mockContactId}`]}>
          <Route path="/delete/:contactId">
            <DeleteContactPage />
          </Route>
          <Route path="/">
            <div>Home Page</div>
          </Route>
        </MemoryRouter>
      </Provider>
    );

    const deleteButton = screen.getByText("Yes, I'm sure");
    fireEvent.click(deleteButton);

    expect(fetchMock).toHaveBeenCalledWith(
      `http://your-api-url/${mockContactId}`,
      {
        method: "DELETE",
      }
    );

    // Wait for the navigate function to be called
    await screen.findByText("Home Page");
    expect(screen.queryByText("Are you sure you want to delete this contact?")).not.toBeInTheDocument();
  });

  test("should navigate to home page on cancellation", async () => {
    const mockContactId = "1";

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[`/delete/${mockContactId}`]}>
          <Route path="/delete/:contactId">
            <DeleteContactPage />
          </Route>
          <Route path="/">
            <div>Home Page</div>
          </Route>
        </MemoryRouter>
      </Provider>
    );

    const cancelButton = screen.getByText("No, cancel");
    fireEvent.click(cancelButton);

    await screen.findByText("Home Page");
    expect(screen.queryByText("Are you sure you want to delete this contact?")).not.toBeInTheDocument();
  });
});
