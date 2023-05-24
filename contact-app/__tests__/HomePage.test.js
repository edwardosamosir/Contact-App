import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import HomePage from "../src/pages/HomePage";
import store from "../src/store";
import fetchMock from "jest-fetch-mock";

describe("HomePage", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  test("should render loading screen when loading is true", async () => {
    fetchMock.mockResponseOnce(JSON.stringify({ data: [] }));

    render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );

    const loadingScreen = screen.getByTestId("loading-screen");
    expect(loadingScreen).toBeInTheDocument();
  });

  test("should render table with contact rows when loading is false", async () => {
    const mockContacts = {
      data: [
        {
          id: 1,
          firstName: "John",
          lastName: "Doe",
          age: 30,
        },
        {
          id: 2,
          firstName: "Jane",
          lastName: "Smith",
          age: 25,
        },
      ],
    };
    fetchMock.mockResponseOnce(JSON.stringify(mockContacts));

    render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );

    const contactRows = await screen.findAllByTestId("contact-row");
    expect(contactRows).toHaveLength(2);
  });

  test("should filter contacts based on search query", async () => {
    const mockContacts = {
      data: [
        {
          id: 1,
          firstName: "John",
          lastName: "Doe",
          age: 30,
        },
        {
          id: 2,
          firstName: "Jane",
          lastName: "Smith",
          age: 25,
        },
      ],
    };
    fetchMock.mockResponseOnce(JSON.stringify(mockContacts));

    render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );

    const searchInput = screen.getByPlaceholderText("Search for contacts");
    const contactRows = await screen.findAllByTestId("contact-row");

    expect(contactRows).toHaveLength(2);

    // Perform search
    searchInput.value = "John";
    fireEvent.change(searchInput);

    const filteredContactRows = await screen.findAllByTestId("contact-row");
    expect(filteredContactRows).toHaveLength(1);
    expect(filteredContactRows[0]).toHaveTextContent("John Doe");
  });
});
