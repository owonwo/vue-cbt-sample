import Vue from 'vue';
import HomePage from '@/components/HomePage';

describe('HomePage.vue', () => {
  const Constructor = Vue.extend(HomePage);
  const vm = new Constructor().$mount();
  it('should render correct contents', () => {
    expect(vm.$el.querySelector('#homepage > h1').textContent)
      .to.equal('9to5');
  });

  it('should have the Start quiz button', () => {
    expect(!!vm.$el.querySelector('#homepage .wg-btn'))
      .to.equal(true);
  });
});
