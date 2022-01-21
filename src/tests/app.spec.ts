import App from "../App.vue";
import { mount } from "@vue/test-utils";

test("test App.vue", async () => {
  expect(App).toBeTruthy();
  const wrapper = mount(App);
  expect(wrapper.attributes("test-id")).toBe("root-di");
});
