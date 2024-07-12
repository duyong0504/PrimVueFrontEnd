<script setup lang="ts">
import { request } from '@/utils/instance'
import EventBus from '@/utils/EventBus'

type StoneHeaderMenu = {
  seq: number
  label: string
  icon?: string
  command?: () => void
}

const topMenus = ref([] as StoneHeaderMenu[]);

const selectMenu = ref(0)

const emits = defineEmits<{
  (event: 'getHeader', result: StoneHeaderMenu): void
}>()

function onGetHeaderMenu() {
  EventBus.emit('LOADING_SHOW')

  request.get('https://localhost:44356/api/Menu/zpCmmMenuHeaderLst')
  .then(_response => {
    const data = _response.data as StoneHeaderMenu[]

    for(const item of data) {
      item.command = () => {
        selectMenu.value = item.seq

        emits('getHeader', item)
      }
    }

    topMenus.value = data
    
    setTimeout(() => {
      EventBus.emit('LOADING_HIDE')
    }, 300)
  }).catch(_error => {

    EventBus.emit('LOADING_HIDE')
  });
}

onGetHeaderMenu()
</script>
<template>
  <!-- 헤더 메뉴 -->
  <div id="header_menu" class="col-12 grid justify-content-center pl-4" >
    <Menubar
      :model="topMenus"
      class="w-full"
    />
  </div>
</template>
<style scoped>

</style>