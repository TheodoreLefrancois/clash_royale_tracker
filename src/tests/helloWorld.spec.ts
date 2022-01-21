import HelloWorld from "../components/HelloWorld.vue";
import { mount } from "@vue/test-utils";

test("test HelloWorld.vue", async () => {
  expect(HelloWorld).toBeTruthy();
  const message = "This is test message";
  const wrapper = mount(HelloWorld, {
    props: {
      msg: message,
    },
  });
  expect(wrapper.text()).toContain(message);
});
