<script setup lang="ts">
import router from '@/router';

interface LeftMenusProps {
  items: {
    seq: number
    label: string
    icon?: string
    path?: string
    command?: () => void
  }[]
}

const props = defineProps<LeftMenusProps>()

const emits = defineEmits<{
  (event: 'getLabel', result: string): void
}>()

const leftMenus = ref([] as LeftMenusProps['items']);

const selected = ref()

watch(() => props.items, newValue => {
  for(const menu of newValue) {
    menu.command = () => {
      selected.value = menu

      if(menu.path)
        router.push(menu.path)

      console.log('menu', menu)
      emits('getLabel', menu.label)
    }
  }

  leftMenus.value = newValue

  if(leftMenus.value[0] && leftMenus.value[0].path)
    router.push(leftMenus.value[0].path)
})
</script>
<template>
  <!-- 왼쪽 메뉴 -->
  <div id="menu_items" class="col-2 flex flex-column mt-1 pl-3 gap-6">
    <Menu :model="leftMenus" orientation="vertical" :style="{ minHeight: '1350px' }"/>
  </div>
</template>
<style scoped>

</style>