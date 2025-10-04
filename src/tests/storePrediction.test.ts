import { act } from "react-test-renderer";
import { usePredictionStore } from "@state/usePredictionStore";

test("setLocalPrediction updates store", () => {
  const { setLocalPrediction } = usePredictionStore.getState();
  act(() => {
    setLocalPrediction("gp1", { podium: ["VER","HAM","LEC"] });
  });
  expect(usePredictionStore.getState().predictions["gp1"].podium).toEqual(["VER","HAM","LEC"]);
});
