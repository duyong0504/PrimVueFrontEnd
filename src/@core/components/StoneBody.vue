<script setup lang="ts">

</script>
<template>
  <Card>
    <template #content>
      <Transition
        name="app"
        mode="out-in"
      >
        <RouterView v-slot="{ Component }">
          <Component :is="Component"/>
        </RouterView>
      </Transition>
    </template>
  </Card>
</template>
<style scoped>

</style>