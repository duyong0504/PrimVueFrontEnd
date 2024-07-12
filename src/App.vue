<script setup lang="ts">
import 'primeicons/primeicons.css';
import StoneDefaultLayout from '@/@core/components/StoneDefaultLayout.vue';
import StoneBody from './@core/components/StoneBody.vue';

</script>

<template>
  <StoneDefaultLayout>
    <template #navigator="{ items }">
      <!-- :home="home" -->
      <Breadcrumb
        :model="items"
      />
    </template>
    <template #main>
      <StoneBody/>
    </template>
  </StoneDefaultLayout>
</template>
