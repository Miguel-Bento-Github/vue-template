import HelloWorld from "@/components/HelloWorld.vue";
import { createLocalVue, shallowMount } from "@vue/test-utils";

const localVue = createLocalVue();

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "hello";
    const wrapper = shallowMount(HelloWorld, {
      localVue,
      propsData: { msg },
      mocks: {
        $t: (key: string) => key,
      },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
