<template>
  <header class="sticky top-0 z-10 bg-white">
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <a href="#" class="-m-1.5 p-1.5 uppercase">
        Dr <span class="sr-only md:not-sr-only">Flavio</span> Cajiao, DDS
      </a>
      <div class="flex gap-x-12">
        <a
          v-for="item in navigation"
          :key="item.name"
          :href="item.href"
          class="text-sm font-semibold leading-6 text-gray-900"
          >{{ item.name }}</a
        >
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue";

const navigation = [
  { name: "About", href: "#" },
  { name: "Contact", href: "#" },
];

const mobileMenuOpen = ref(false);
</script>
