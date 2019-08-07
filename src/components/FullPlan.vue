<template>
    <article class="plan">
        <header>
            <h3 class="plan-title">
                {{planTitle}}
            </h3>
        </header>
        <main class="plan-content">
            <div class="shown-content">
                <slot name="shown-content"></slot>
            </div>
            <div class="hidden-content">
                <slot name="hidden-content"></slot>
            </div>
        </main>
        <footer>
            <Button :btnText="'Choose This Plan'" :btnLink="'/contact'" :btnWidth="'70%'"/>
        </footer>
    </article>
</template>

<script>
import Button from '@/components/Button.vue';

export default {
    data() {
        return {
            planName: 'Test'
        }
    },
    props: ['planTitle'],
    name: 'FullPlan',
    components: {
        Button
    }
}
</script>

<style lang="scss" scoped>
    
</style>
