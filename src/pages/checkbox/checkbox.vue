<template>
    <div>
        <h2>基础用法</h2>
        <j-checkbox v-model="checked1">内容1</j-checkbox>
        <j-checkbox v-model="checked2">内容2</j-checkbox>
        <h2>自定义选中与未选中图标与字体颜色</h2>
        <j-checkbox checkedColor="#1778F9" :checkedIcon="require('@/assets/images/checked.svg')" :unCheckedIcon="require('@/assets/images/unChecked.svg')" v-model="checked3">内容1</j-checkbox>
        <j-checkbox checkedColor="#1778F9" :checkedIcon="require('@/assets/images/checked.svg')" :unCheckedIcon="require('@/assets/images/unChecked.svg')" v-model="checked4">内容2</j-checkbox>
    </div>
</template>

<script>
import jCheckbox from '@/components/all/june-checkbox/june-checkbox.vue'
    export default {
        components: {
            jCheckbox
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