<script setup lang="ts">
import { onMounted, ref } from "vue";
import VersionsTable from "./components/VersionsTable.vue";

const items = ref([
  {
    versions: "1.0.0",
    build: "100",
    status: "Release",
    user: "system_travelist@appleworld.co.jp",
    releaseDate: "Dec 23, 2024 at 12:09 PM",
  },
  {
    versions: "1.2.0",
    build: "100",
    status: "Release",
    user: "system_travelist@appleworld.co.jp",
    releaseDate: "Dec 23, 2024 at 12:09 PM",
  },
  {
    versions: "1.3.0",
    build: "100",
    status: "Release",
    user: "system_travelist@appleworld.co.jp",
    releaseDate: "Dec 23, 2024 at 12:09 PM",
  },
  {
    versions: "1.4.0",
    build: "100",
    status: "Release",
    user: "system_travelist@appleworld.co.jp",
    releaseDate: "Dec 23, 2024 at 12:09 PM",
  },
  {
    versions: "1.5.0",
    build: "120",
    status: "Release",
    user: "system_travelist@appleworld.co.jp",
    releaseDate: "Dec 23, 2024 at 12:09 PM",
  },
  {
    versions: "1.7.0",
    build: "100",
    status: "Pending",
    user: "system_travelist@appleworld.co.jp",
    releaseDate: "Dec 23, 2024 at 12:09 PM",
  },
  {
    versions: "1.6.0",
    build: "110",
    status: "Pending",
    user: "system_travelist@appleworld.co.jp",
    releaseDate: "Dec 23, 2024 at 12:09 PM",
  },
  {
    versions: "1.8.0",
    build: "140",
    status: "Pending",
    user: "system_travelist@appleworld.co.jp",
    releaseDate: "Dec 23, 2024 at 12:09 PM",
  },
  {
    versions: "1.8.0",
    build: "150",
    status: "Pending",
    user: "system_travelist@appleworld.co.jp",
    releaseDate: "Dec 23, 2024 at 12:09 PM",
  },
]);

onMounted(async () => {});
</script>

<template>
  <div class="w-screen h-screen bg-white">
    <VersionsTable :items="items" />
  </div>
</template>

<style scoped></style>
