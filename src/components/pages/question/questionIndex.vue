<script>
import useLocalStorage from "@/actions/useLocalStorage";
import cContain from "@/components/cContain.vue";
import answerButton from "./components/answerButton.vue";
import getQuestions from "@/actions/getQuestions";
import timerBar from "./components/timerBar.vue";

export default {
  name: "questionIndex",
  components: {
    cContain,
    answerButton,
    timerBar,
  },
  data() {
    return {
      currentIndexQuestion: 0,
      currentQuestion: {},
      answerSelected: "",
      countCorrectAnswers: 0,
    };
  },
  computed: {
    getPlayerName() {
      return useLocalStorage.getGameConfig().playerName;
    },
    getCategory() {
      return useLocalStorage.getCategoryById(
        useLocalStorage.getGameConfig().category
      );
    },
    questions() {
      return useLocalStorage.getQuestions();
    },
  },
  methods: {
    nextQuestion() {
      this.currentIndexQuestion++;
      if (this.currentIndexQuestion >= this.questions.length) {
        this.$router.push("/results");
        return;
      }

      this.checkAnswer();
      this.currentQuestion = this.questions[this.currentIndexQuestion];
      this.answerSelected = {};
      this.setCountCorrectAnswers();
    },
    checkAnswer() {
      if (this.answerSelected === this.currentQuestion.correct_answer) {
        useLocalStorage.setCorrectAnswer(this.currentQuestion);
      }
    },
    selectedAnswer(answer) {
      this.answerSelected = answer;
    },
    setCountCorrectAnswers() {
      this.countCorrectAnswers = useLocalStorage.getCountCorrectAnswers();
    },
  },
  async mounted() {
    await getQuestions();
    this.currentQuestion = this.questions[this.currentIndexQuestion];
  },
};
</script>

<template>
  <div class="relative pt-20">
    <div class="absolute top-5 right-5">
      <div></div>
      <span
        >{{ getPlayerName }}:
        <b class="text-lg">{{ countCorrectAnswers }}ps</b></span
      >
    </div>

    <c-contain>
      <timer-bar @timeOut="nextQuestion" />

      <div class="flex flex-col gap-2">
        <span class="text-xs text-gray-500">{{ getCategory.name }}</span>

        <div>
          <strong
            class="text-xl text-white"
            v-html="currentQuestion.question"
          ></strong>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-10 text-xs">
            <answer-button
              v-for="(answer, i) in currentQuestion.answers"
              :key="i"
              :answer="answer"
              @selectAnswer="answerSelected = $event"
              :selected="answerSelected === answer"
              class="bg-black w-full"
            />
          </div>
        </div>
      </div>
    </c-contain>
  </div>
</template>
