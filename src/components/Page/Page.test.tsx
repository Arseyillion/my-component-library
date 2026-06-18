// Adds custom Jest matchers such as:
// toBeInTheDocument(), toHaveStyle(), toHaveClass(), etc.
import "@testing-library/jest-dom";

// Import the component we want to test.
import Page from ".";

// render() is used to mount a React component
// into a virtual DOM created specifically for testing.
import { render } from "@testing-library/react";

// describe() groups related tests together.
// Think of it as a folder containing tests for the Page component.
describe("Page", () => {
  // A single test case.
  // The description should explain what behavior is being tested.
  it("renders title and children", () => {
    // ======================
    // Arrange
    // ======================

    // Sample title that will be passed to the component.
    const title = "Test Title";

    // Sample children content that will appear inside the component.
    const children = "Test Children";

    // Render the Page component.
    //
    // Example:
    // <Page title="Test Title">
    //   Test Children
    // </Page>
    //
    // render() returns helper functions that allow us
    // to search for elements inside the rendered component.
    const { getByText } = render(
      <Page title={title}>{children}</Page>
    );

    // ======================
    // Act
    // ======================

    // Search for an element containing the title text.
    // If no matching element is found, the test automatically fails.
    const titleElement = getByText(title);

    // Search for an element containing the children text.
    const childrenElement = getByText(children);

    // ======================
    // Assert
    // ======================

    // Verify that the title element exists in the rendered document.
    expect(titleElement).toBeInTheDocument();

    // Verify that the children element exists in the rendered document.
    expect(childrenElement).toBeInTheDocument();
  });

  // Another test case focused on styling.
  it("renders the correct styling", () => {
    // ======================
    // Arrange
    // ======================

    const title = "Test Title";
    const children = "Test Children";

    // Render the component again.
    //
    // getByTestId() allows us to find an element
    // using a data-testid attribute.
    //
    // Example:
    // <div data-testid="page-container">
    //   ...
    // </div>
    const { getByTestId } = render(
      <Page title={title}>{children}</Page>
    );

    // ======================
    // Act
    // ======================

    // Find the element with:
    // data-testid="page-container"
    const container = getByTestId("page-container");

    // ======================
    // Assert
    // ======================

    // Verify that the container has the expected CSS style.
    //
    // This checks whether the background color is #f5f5f5.
    expect(container).toHaveStyle(`
      background-color: #f5f5f5;
    `);
  });
});
