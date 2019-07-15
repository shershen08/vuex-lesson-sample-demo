<template>
    <div>
        operand1: <input type="text" v-model="operand1">
        operand2: <input type="text" v-model="operand2">
        <button @click="saveValue">Save</button>
        <button @click="incrementAsync">Start timer</button>

    </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex';

export default {
    name: 'Form',
    data(){
        return {
            operand2: 0,
        }
    },
    computed: {
        operand1: {
            get(){
                return this.$store.getters.getOperand1
            },
            set(value){
                this.changeOperand({
                    operand1: value,
                    operand2: this.operand2
                })
            }
        }
    },
    methods: {
        ...mapActions(['incrementAsync']),
        ...mapMutations(['changeOperand']),
        saveValue(){
            this.changeOperand({
                operand1: this.operand1,
                operand2: this.operand2,
            })
        }
    }
}
</script>
