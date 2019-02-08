<template>
  <section class="container">
    <h1>Questions</h1>
    <h4>My View of Me</h4>
    <p>This part measures the extend to which you have the traits that make an employee great.</p>
    <br>
    <h4 class="text-center">Scoring</h4>
    <div class="wg-options">
      <div><span>1</span>No, This is me</div>
      <div><span>2</span>Not Quite me</div>
      <div><span>3</span>Yes, this is me</div>
    </div>
    <QuestionBox
      v-for="(question, index) in questions"
      :key="index"
      :index="index + 1"
      :question="question"
      v-model="question.answer"
      @change="confirmAnswer(question)"/>
    <div class="wg-bottom-bar text-right">
      <div>
        <transition name="fade">
          <div v-show="errors.incomplete_question" class="notification is-danger">
            Please answer all the question.
          </div>
          </transition>
      </div>
      <button class="wg-btn" @click="validate()">
        Submit Answers
      </button>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import QuestionBox from '@/components/QuestionBox';

export default {
  name: 'Questions',
  components: { QuestionBox },
  created() {
    // making request to endpoint
    const config = Object.freeze({
      url: 'http://test.natterbase.com:3002/questions',
      headers: {
        'X-ACCESS-TOKEN': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiMDAwMDAwMDMiLCJpYXQiOjE1MzM2NDQwOTMsImV4cCI6MTU2NTA5MzY5M30.oMv_mQN6mAAmAVrRAozC7Ytk3omAye9P_TQ8Xyg3VOE',
      },
    });

    axios.get(config.url, config)
      .then(({ data: payload }) => payload.questions.map(this.makeQuestion))
      .then((questions) => {
        this.questions = questions;
      }).catch(() => {
        alert('An error occurred when trying to fetch questions.');
      });
  },
  data: () => ({
    questions: [],
    errors: {
      incomplete_question: false,
    },
  }),
  methods: {
    validate() {
      this.questions = this.questions
        .map(this.confirmAnswer)
        .map(this.markAsSubmitted);

      if (this.answeredAllQuestions()) {
        this.$router.push({ name: 'SuccessPage' });
      } else {
        this.errors.incomplete_question = true;
        setTimeout(() => {
          this.errors.incomplete_question = false;
        }, 3000);
      }
    },
    answeredAllQuestions() {
      return this.getUnansweredQuestion().length === 0;
    },
    getAnsweredQuestion() {
      return this.questions.filter(e => e.answered);
    },
    getUnansweredQuestion() {
      return this.questions.filter(e => !e.answered);
    },
    markAsSubmitted(question) {
      return Object.assign(question, {
        wasSubmitted: true,
      });
    },
    makeQuestion: question => ({
      id: Symbol('id'),
      text: question,
      answer: 0,
      answered: false,
      wasSubmitted: false,
    }),
    confirmAnswer(question) {
      return Object.assign(question, {
        answered: (!!question.answer),
      });
    },
  },
};
</script>
