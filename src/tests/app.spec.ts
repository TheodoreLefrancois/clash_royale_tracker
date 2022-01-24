//@ts-nocheck
// Todo fix types with the config exclude pattern
import App from "../App.vue";
import { render } from "@testing-library/vue";

test("test App.vue", async () => {
  const { getByTestId } = render(App);
  getByTestId("root-di");
});
