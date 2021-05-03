import LanguageSelector from "@/components/LanguageSelector.vue";
import { createLocalVue, shallowMount } from "@vue/test-utils";

const localVue = createLocalVue();

describe("LanguageSelector.vue", () => {
  it("Should have languages and language defined in the state", () => {
    const wrapper = shallowMount(LanguageSelector, {
      localVue,
      mocks: {
        $t: (key: string) => key,
      },
    });

    expect(wrapper.vm.$data.languages).toBeTruthy();
    expect(wrapper.vm.$data.language).toBeDefined();
  });
});
