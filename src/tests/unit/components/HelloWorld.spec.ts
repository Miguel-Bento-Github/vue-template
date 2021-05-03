import HelloWorld from "@/components/HelloWorld.vue";
import { shallowMount } from "@vue/test-utils";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg },
      mocks: {
        $t: (key: string) => key,
      },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
