import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("the counter starts at 0", () => {
  // App 컴포넌트를 랜더링합니다.
  render(<App />);
  // screen object를 이용해서 원하는 엘레멘트에 접근(접근할 때 ID로 접근)
  const linkElement = screen.getByTestId("counter");
  // ID가 counter인 엘레멘트의 텍스트가 0인지 테스트
  expect(linkElement).toHaveTextContent(0);
});

test("minus button has correct text", () => {
  render(<App />);
  // 쿼리는 여러개가 있어서 getByTestId 가 정답이라고 할 순 없습니다.
  const buttonElement = screen.getByTestId("minus-button");
  expect(buttonElement).toHaveTextContent("-");
});

test("plus button has correct text", () => {
  render(<App />);
  const buttonElement = screen.getByTestId("plus-button");
  expect(buttonElement).toHaveTextContent("+");
});

test("when the + button is pressed, the counter changes to 1", () => {
  render(<App />);
  const buttonElement = screen.getByTestId("plus-button");
  // click plus button
  fireEvent.click(buttonElement);
  // 카운터가 0에서 +1되서 1이 됩니다.
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(1);
});

test("on/off button has blue color", () => {
  render(<App />);
  const buttonElement = screen.getByTestId("on/off-button");
  expect(buttonElement).toHaveStyle({ backgroundColor: "blue" });
});

test("prevent the -,+ button from being pressed when the on/off button is clicked", () => {
  render(<App />);
  const onOffButtonElement = screen.getByTestId("on/off-button");
  fireEvent.click(onOffButtonElement);

  const plusButtonElement = screen.getByTestId("plus-button");
  expect(plusButtonElement).toBeDisabled();
});
