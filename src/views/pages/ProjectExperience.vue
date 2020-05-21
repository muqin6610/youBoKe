<template>
    <div class="project">
        <ProjectDropdown @ok="selectProject"/>
        <div class="content">
            <p class="content-title">{{title}}</p>
        </div>
    </div>
</template>

<script>
import ProjectDropdown from './modules/ProjectModules/ProjectDropdown'
export default {
    components: {
        ProjectDropdown
    },
    data() {
        return {
            title: ''
        }
    },
    methods: {
        selectProject(item) {
            console.log(item)
            this.title = item.lable
        }
    },
}
</script>

<style lang="scss" scoped>
.content {
    width: 1000px;
    margin: 20px auto;
    .content-title {
        text-align: center;
        font-weight: bold;
        font-size: 24px;
    }
}
</style>