<script setup lang="ts">
import router from '@/router'

const topBars = ref([
  'pi pi-inbox',
  'pi pi-print',
  'pi pi-bars',
])

const profileMenu = ref()

const profileMenus = ref([
    {
        label: '유저 프로필',
        items: [
            {
              label: '로그아웃',
              icon: 'pi-sign-out',
              command: () => {
                console.log('로그아웃')

                router.push('/login')
              },
            },
        ],
    }
])

const onClickProfile = (event: Event, item: string) => {
  if (item === topBars.value[topBars.value.length-1])
    profileMenu.value.toggle(event)
};

</script>
<template>
  <div
    class="flex justify-content-end col-2 col-offset-9 gap-1 pr-3"
  >
    <Button
      v-for="(item, index) in topBars"
      type="button"
      :key="index"
      :icon="item"
      @click="(event) => onClickProfile(event, item)"
      aria-haspopup="true"
      aria-controls="overlay_menu"
    />
    <Menu ref="profileMenu" id="overlay_menu" :model="profileMenus" :popup="true" />
  </div>
</template>
<style scoped>

</style>