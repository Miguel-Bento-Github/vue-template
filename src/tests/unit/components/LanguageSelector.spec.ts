import LanguageSelector from "@/components/LanguageSelector.vue";
import { createLocalVue, shallowMount } from "@vue/test-utils";

const localVue = createLocalVue();

describe("LanguageSelector.vue", () => {
  it("should change the state locale to a new string", () => {
    const wrapper = shallowMount(LanguageSelector, {
      localVue,
    });

    wrapper.setData({ language: "en" });
  });
});
