import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { NeonButton } from "@components/NeonButton";

test("NeonButton triggers onPress", () => {
  const fn = jest.fn();
  const { getByText } = render(<NeonButton title="Test" onPress={fn} />);
  fireEvent.press(getByText("Test"));
  expect(fn).toHaveBeenCalled();
});
