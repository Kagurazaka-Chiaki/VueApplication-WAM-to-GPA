<template>
  <div>
    <li>
      {{ name }} {{ wam }} {{ uoc }}
      <button @click="$emit('remove')">移除课程</button>
    </li>
  </div>
</template>

<script>
export default {
  name: "RemoveCourse",
  props: {
    name: String,
    wam: Number,
    uoc: Number,
  },
  emits: ["remove"],
  methods: {
    remove: function () {
      console.log("Hello");
    },
  },
};
</script>

<style></style>
