<script>
export default {
  data() {
    return {
      seconds: 6,
    };
  },
  methods: {
    setTimer() {
      setInterval(() => {
        if (this.seconds > 0) {
          this.seconds--;
        } else {
          this.seconds = 6;
          this.$emit("timeOut");
        }
      }, 1000);
    },
  },
  mounted() {
    this.setTimer();
  },
};
</script>
<template>
  <div class="w-full flex items-center gap-2">
    <div>{{ seconds }}s</div>

    <div class="rounded-lg flex w-full h-3 bg-gray-300">
      <div
        v-for="i in 6 - seconds"
        :key="i"
        class="w-1/6 h-full bg-blue-800"
        :class="[i === 6 ? 'rounded-r-lg' : '', i === 1 ? 'rounded-l-lg' : '']"
      ></div>
    </div>
  </div>
</template>
