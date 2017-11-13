<template>
    <div>
        <template v-if="state">
            <span>{{name}}</span>
            <span v-test:aa.one.two="123+1">
                
            </span>
        </template>

</div>
</template>
<script>
    export default {
        name: "directive",
        data() {
            return {
                state: true,
                name: "lisi"
            }
        },
        directives: {
            test: {
                bind(el, binding, vnode, oldVnode) {
                    console.log("内部bind")
                    console.log(binding.name)
                    console.log(binding.value)
                    console.log(binding.expression)
                    console.log(binding.arg)
                    console.log(binding.modifiers)
                        // console.log(el, binding, vnode, oldVnode)
                },
                inserted() {
                    console.log("inserted")
                },
                update() {
                    console.log("update")
                },
                componentUpdated(el, binding) {
                    // console.log(bind)
                    console.log("componentUpdated")
                },
                unbind() {
                    console.log("unbind")
                }
            }
        },
        mounted() {
            console.log("mounted")
            this.name = "zhangsan"
                // this.state = false
            setTimeout(function() {
                this.state = false
            }.bind(this), 1000)
        }

    }
</script>
<style>

</style>