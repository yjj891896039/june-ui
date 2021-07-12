<template>
    <div>
        <h2>基础用法</h2>
        <checkbox v-model="checked1">内容1</checkbox>
        <checkbox v-model="checked2">内容2</checkbox>
        <h2>自定义选中与未选中图标</h2>
        <checkbox checkedColor="#1778F9" :checkedIcon="require('@/assets/images/checked.svg')" :unCheckedIcon="require('@/assets/images/unChecked.svg')" v-model="checked3">内容1</checkbox>
        <checkbox checkedColor="#1778F9" :checkedIcon="require('@/assets/images/checked.svg')" :unCheckedIcon="require('@/assets/images/unChecked.svg')" v-model="checked4">内容2</checkbox>
    </div>
</template>

<script>
import checkbox from '@/components/all/june-checkbox/june-checkbox.vue'
    export default {
        components: {
            checkbox
        },
        data() {
            return {
                checked1: false,
                checked2: false,
                checked3: false,
                checked4: false,
            }
        },
    }
</script>

<style lang="scss" scoped>
h2{
    margin-bottom: 20px;
    margin-top: 20px;
}
</style>