<template>
  <div class="question-box" :class="{'has-error': hasNoAnswer }">
      <div class="counter">{{$props.index}}</div>
      <div class="question-content">
        <h3 class="question-text"> {{ $props.question.text }} ?</h3>
        <div class="answers wg-btn-group">
          <button
            v-for="num in 3"
            :key="num"
            class="wg-btn is-flat"
            :class="{'is-white': !answerMatches(num) }"
            @click="setAnswer(num)">
            {{ num }}
          </button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuestionBox',
  props: {
    index: { type: [String, Number], required: true },
    question: { type: Object, required: true },
  },
  data: () => ({
    givenAnswer: 0,
  }),
  computed: {
    hasNoAnswer() {
      const { wasSubmitted, answered } = this.$props.question;
      return wasSubmitted ? !answered : false;
    },
  },
  model: {
    event: 'change',
    value: 'value',
  },
  methods: {
    setAnswer(answer) {
      this.givenAnswer = answer;
      this.$emit('change', answer);
    },
    answerIsPicked() {
      return this.givenAnswer !== 0;
    },
    answerMatches(num) {
      return this.givenAnswer === num;
    },
  },
};
</script>

<style scoped>
  .question-box {
    border: solid 1px #ddd;
    border-radius: 12px;
    box-sizing: border-box;
    margin: 15px 0;
    width: 100%;
    padding: 15px;
    display: flex;
    line-height: 1.6;
  }

  .question-box.has-error {
    border-color: crimson;
  }

  .question-box:hover {
    box-shadow: 0 0 3px rgba(0,0,0,0.3);
  }

  .question-box .counter {
    flex: 0 0 25px;
    text-align: center;
    line-height: 2;
  }

  .question-box > * {
    /*border: solid 1px black;*/
  }

  .question-box .question-content {
    padding-left: 5px;
    flex: 1 1 calc(100% - 50px);
  }
  .question-box .question-text {
     margin-top: 0;
  }
</style>
