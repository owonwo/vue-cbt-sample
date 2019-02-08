import Vue from 'vue';
import Questions from '@/components/Questions';

describe('Questions.vue', () => {
  const Constructor = Vue.extend(Questions);
  const vm = new Constructor().$mount();

  it('should have questions key', () => {
    expect(vm.questions.length).to.equal(0);
  });
});
