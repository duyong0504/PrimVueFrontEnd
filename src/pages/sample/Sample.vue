<script setup lang="ts">
import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";
import { request } from '@/utils/instance'
import EventBus from '@/utils/EventBus'

const confirm = useConfirm();
const toast = useToast();

const text = ref('')

function onClickBtn() {
  confirm.require({
    message: '조회하시겠습니까?',
    header: '확인',
    // icon: 'pi pi-exclamation-triangle',
    icon: 'pi pi-question-circle',
    rejectProps: {
        label: '취소',
        severity: 'secondary',
        outlined: true
    },
    acceptProps: {
      label: '확인'
    },
    accept: onGetData,
    // reject: () => {
    //     toast.add({ severity: 'error', summary: 'Rejected', detail: '조회에 실패했습니다.', life: 3000 });
    // }
  })
}

function onGetData() {
  EventBus.emit('LOADING_SHOW')

  request.get('https://localhost:7196/selectUsers')
  .then(_response => {
    const data: any[] = _response.data

    console.log('data', data)

    text.value = data.map(x => x.name).join(',')

    toast.add({ severity: 'info', summary: 'Confirmed', detail: '조회되었습니다.', life: 3000 });
    
    setTimeout(() => {
      EventBus.emit('LOADING_HIDE')
    }, 1000)
  }).catch(_error => {
    toast.add({ severity: 'info', summary: 'Confirmed', detail: '조회에 실패하였습니다.', life: 3000 });

    EventBus.emit('LOADING_HIDE')
  });
}
</script>

<template>
  <div class="grid">
    <div class="col-12">
      <Button
        label="Submit"
        @click="onClickBtn"
      />
      <Toast />
      <ConfirmDialog></ConfirmDialog>

      <div>
        {{ text }}
      </div>
    </div>
  </div>
</template>
