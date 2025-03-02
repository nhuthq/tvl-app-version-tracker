<script lang="ts">
export default {
  name: "FilterRadios",
  props: {},
  emits: ["filterRelease"],
  methods: {
    handleChange(event: any) {
      this.$emit("filterRelease", event.target.value);
    },
  },
};
</script>

<template>
  <div class="flex items-end justify-between text-xm font-semibold">
    <label class="flex mr-4 items-center flex-nowrap">
      <input
        type="radio"
        name="show"
        value="All"
        checked
        @change="handleChange"
      />
      <span class="whitespace-normal ml-1">Show All</span>
    </label>
    <label class="flex mr-4 items-center flex-nowrap">
      <input type="radio" name="show" value="Release" @change="handleChange" />
      <span class="whitespace-normal ml-1">Release Only</span>
    </label>
  </div>
</template>
