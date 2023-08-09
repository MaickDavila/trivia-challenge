<script>
export default {
  name: "customTitle",
  props: {
    title: {
      type: String,
      required: true,
      default: "Title Here!",
    },
  },
};
</script>

<template>
  <h1 class="text-4xl font-black text-blue-600">{{ title }}</h1>
</template>
