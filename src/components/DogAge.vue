<template>
    <div class="dog-age">
        <p class="dog-age-label">What age is {{ name }}?</p>
        <select v-model="age.years" name="years" id="age-years">
            <option v-for="n in 22" :key="n.id">{{ n }}</option>
        </select>

        <transition name="fade"
            ><button class="next-button" v-if="blurred" @click="handleNext">
                Next
            </button></transition
        >
    </div>
</template>

<script>
export default {
    name: "DogAge",
    props: {
        age: {
            years: Number,
            months: Number,
        },
    },
    data: () => {
        return {
            blurred: false,
        };
    },
    methods: {},
    computed: {},
};
</script>

<style scoped>
.dog-age {
    color: #00263a;
    display: flex;
    flex-direction: column;
}

.dog-age-label {
    font-family: Montserrat-Bold;
    font-size: 22px;
    margin-bottom: 5px;
}

.dog-age-input {
    flex: 1;
    box-sizing: border-box;
    border: 1px solid #c2c2c2;
    box-shadow: 1px 1px 4px #ebebeb;
    border-radius: 3px;
    padding: 7px;
    margin: 0 5%;
    outline: none;
    transition: 0.2s linear;
}

.dog-age-input:focus {
    border: 1px solid #00263a;
    transition: 0.2s linear;
}
</style>
