import { mount } from '@vue/test-utils';
import QuestionBox from '@/components/QuestionBox';

describe('QuestionBox.vue', () => {
  const index = '1';
  const question = {
    text: 'What are you doing?',
    answered: false,
    answer: 0,
  };

  const wrapper = mount(QuestionBox, {
    propsData: { question, index },
  });

  it('renders a div', () => {
    expect(wrapper.props().question).to.equal(question);
  });

  // it('change value when button is clicked', () => {
  //   wrapper
  //     .find('.answers .wg-btn:first-child')
  //     .trigger('click');

  //   expect(wrapper.givenAnswer).toContain('1');
  // });

  it('should render Question', () => {
    expect(wrapper.find('.question-text').text())
      .to.contain(`${question.text}?`);
  });

  it('should have three buttons', () => {
    const answers = wrapper.vm.$el.querySelector('.answers');
    expect(answers.children.length).to.equal(3);
  });
});
