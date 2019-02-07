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
    <div class="text-right">
      <button class="wg-btn" @click="validate()">
        Submit Answers
      </button>
    </div>
  </section>
</template>

<script>
import QuestionBox from '@/components/QuestionBox';

export default {
  name: 'Questions',
  components: { QuestionBox },
  created() {
    // make the request with axios
    const payload = {
      status: true,
      questions: [
        'Nigeria is a great country',
        'I love doing what i do',
        'The most important aspect in any body life is to own a laptop and a iphone and a house and a school',
        'Good to know',
        'This is testing me',
      ],
    };
    const makeQuestion = question => ({
      id: Symbol('id'),
      text: question,
      answer: 0,
      answered: false,
      wasSubmitted: false,
    });

    this.questions = payload.questions.map(makeQuestion);
  },
  data: () => ({
    questions: [],
  }),
  methods: {
    validate() {
      this.questions = this.questions
        .map(this.confirmAnswer)
        .map(this.markAsSubmitted);
      if (this.questions.filter(e => !e.answered).length === 0) {
        this.$router.push({ name: 'SuccessPage' });
      }
    },
    markAsSubmitted(question) {
      question.wasSubmitted = true;
      return question;
    },
    confirmAnswer(question) {
      question.answered = (!!question.answer);
      return question;
    },
  }
};
</script>
