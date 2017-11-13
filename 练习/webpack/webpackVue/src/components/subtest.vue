<template>
    <ul>
        <li v-focus="name">
            <label for="name">姓名：</label>
            <input type="text" id="name" v-model.lazy="name.value" @blur="changeState(name)">
        </li>
         <li v-focus="pw">
            <label for="pw">密码：</label>
            <input type="text" id="pw" v-model.lazy="pw.value">
        </li>
         <li v-focus="phone">
            <label for="phone">手机号：</label>
            <input type="text" id="phone" v-model.lazy="phone.value" @blur="changeState(phone)">
        </li>
         <li v-focus="email">
            <label for="email">邮箱：</label>
            <input type="text" id="email" v-model.lazy="email.value">
        </li>
        <li>
           <button type="" @click="submit">提交</button>
           <button type="" @click="reset">重置</button>
        </li>
    </ul>
</template>
<script>
    export default {
        name: "directive",
        data() {
            return {
                name: {
                    value: "",
                    reg: /^[\u4e00-\u9fa5]+(·[\u4e00-\u9fa5]+)*$/,
                    msg: "您输入的姓名格式不正确",
                    required: true,
                    focuestate: false,
                    state: false
                },
                pw: {
                    value: "",
                    reg: /^[a-zA-Z]\w{5,17}$/,
                    msg: "您输入的密码格式不正确",
                    required: false,
                    state: false

                },
                phone: {
                    value: "",
                    reg: /^1[34578]\d{9}$/,
                    msg: "您输入的手机号格式不正确",
                    required: true,
                    focuestate: false,
                    state: false
                },
                email: {
                    value: "",
                    reg: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
                    msg: "您输入的邮箱格式不正确",
                    required: false,
                    state: false
                }

            }
        },
        methods: {
            changeState(data) {
                data.focuestate = true
            },
            submit() {
                if (this.name.state && this.pw.state && this.phone.state && this.email.state) {
                    console.log("ajax")
                } else {
                    alert("请输入内容")
                }

            },
            reset() {
                this.name.state = false;
                this.name.value = "";
                this.name.focuestate = false;
                this.pw.state = false;
                this.pw.value = "";
                this.phone.state = false;
                this.phone.value = "";
                this.phone.focuestate = false;
                this.email.state = false;
                this.email.value = "";
            }
        },

        directives: {
            focus: {
                componentUpdated(el, binding) {
                    let clearP = () => {
                        let $p = el.getElementsByTagName("p")[0]
                        console.log($p)
                        if ($p !== undefined) {
                            console.log(44)
                            el.removeChild($p)
                        }
                    }
                    let test = () => {
                        clearP()
                        if (binding.value.value !== "") {
                            if (!binding.value.reg.test(binding.value.value)) {
                                let $p = document.createElement("p");
                                $p.innerHTML = binding.value.msg
                                $p.style.color = "red"
                                el.appendChild($p)
                                binding.value.state = false
                            } else {
                                binding.value.state = true
                            }

                        }
                    }
                    let requiredFn = () => {
                        if (binding.value.value === "") {
                            clearP()
                            if (binding.value.focuestate) {
                                let $p = document.createElement("p");
                                $p.innerHTML = "不能为空"
                                $p.style.color = "red"
                                el.appendChild($p)
                            }

                        } else {
                            console.log(22)
                            test()
                        }
                    }

                    switch (binding.value.required) {
                        case true:
                            {
                                requiredFn()
                            }
                            break;
                        default:
                            {
                                test()
                            }
                    }



                    console.log(binding)
                },

            }
        },
        mounted() {

        }

    }
</script>
<style scoped>
    ul {
        list-style: none;
        width: 500px;
        margin: 20px auto;
    }
</style>