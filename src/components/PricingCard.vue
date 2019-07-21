<template>
    <div class="pricing-card">
        <h3>{{cardTitle}}</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, perferendis.</p>
        <ul>
            <slot></slot>
        </ul>
        <h6>{{cardPrice}}</h6>
        <Button :btnText="'Choose This Plan'" :btnLink="'/plans'" :btnWidth="'70%'"/>
    </div>
</template>

<script>
// Imports
import Button from "./Button";

export default {
    name: "PricingCard",
    props: ['cardTitle', 'cardPrice'],
    components: {
        Button
    }
}
</script>

<style lang="scss" scoped>
    .pricing-card {
        padding: 2rem 1rem;
        background-color: #eeeeee;
        box-shadow: 2px 2px 5px #6b6b6b;
        margin: .5rem 1.5rem;
        text-align: center;
        h3, ul, li, h6 {
            width: 100%;
            padding: 0 0 .5rem 0;
        }
        h3 {
            text-decoration: underline;
        }
        p {
            width: 95%;
            margin: 0 auto;
            padding: 0 0 .5rem 0;
        }
        ul {
            list-style-type: none;
        }
        h6 {
            font-size: 1.5rem;
            padding-bottom: 1.5rem;
        }
    }
</style>
