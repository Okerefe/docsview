<template>
    <div>
        <pre>
            <div class="header">
                <div class="left-header">
                    <span class="type" v-if="type" v-text="type">GET</span>
                    <span v-text="info" class="info">/transactio</span>
                </div>
                <div class="right-header">
                    <select v-if="select">
                        <option v-text="select">Howdy</option>
                    </select>
                </div>
            </div>
            <div class="content">
                <slot></slot>
            </div>
        </pre>
    </div>
</template>

<script>
    export default {
        props:  ['type', 'info', 'select'],

        data() {
            return {

            }
        },

        methods: {

        },

        mounted() {
            $('li').click(function(){
                $(this).addClass('active').siblings().removeClass('active');
            });
        }
    }
</script>


<style scoped>
    pre{
        margin: 0 auto 0 2px;
        opacity: 0.9;
        border: 1px solid rgba(0, 0, 0, 0.06);
        border-radius: 8px;
        box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);
        color: white;
        width: 450px;
        height: 350px;
        /*white-space: pre-line;*/
        background: #011b33;
        overflow: auto;
    }


    .left-header {
        justify-content: flex-start;
        flex: 50%;
        display: inline-flex;
    }

    .info {
        font-weight: bolder;
    }
    select {
        display: inline-block;
        margin: 0px;
        padding: 0px;
    }
    .right-header {
        justify-content: flex-end;
        margin-top: -15px;
        padding: 0px;
    }

    .content {
        padding-left: 30px;
    }
    .header {
        background-color: rgba(1, 27, 51, 0.9);
        /*background-color: #f5f8f9;*/
        /*background: #011b33;*/
        width: 100%;
        border-radius: 8px;
        padding: 8px;
        margin: 0px;
        box-sizing: border-box;
        display: flex;
    }


    .type {
        background-color: rgb(199, 235, 255);
        color: rgb(1, 27, 51);
        font-size: 10px;
        font-weight: 500;
        padding: 4px 8px;
        margin-right: 6px;
        border-radius: 50%;
        text-transform: uppercase;
    }
</style>