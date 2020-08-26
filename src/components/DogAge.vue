<template>
    <div class="dog-age">
        <p class="dog-age-label">What age is {{ name }}?</p>
        <div class="dog-age-selects">
            <select
                class="dog-age-select"
                v-model="age.years"
                name="years"
                id="age-years"
                @change="ageSubmit"
            >
                <option value="" disabled selected>Years</option>
                <option value="0">0 Years</option>
                <option v-for="n in 22" :key="n.id" :value="n"
                    >{{ n }} Years</option
                >
            </select>

            <select
                class="dog-age-select"
                v-model="age.months"
                name="months"
                id="age-months"
                @change="ageSubmit"
            >
                <option value="" disabled selected>Months</option>
                <option value="0">0 Months</option>
                <option v-for="n in 11" :key="n.id" :value="n"
                    >{{ n }} Months</option
                >
            </select>
        </div>
        <transition name="fade">
            <button
                class="next-button"
                v-if="ageSubmitted"
                @click="handleNext"
                key="next-button"
            >
                Next
            </button>
        </transition>
    </div>
</template>

<script>
export default {
    name: "DogAge",
    props: {
        name: String,
        age: {
            years: Number,
            months: Number,
        },
    },
    data: () => {
        return {
            ageSubmitted: false,
        };
    },
    methods: {
        ageSubmit() {
            if (this.age.years && this.age.months) {
                this.ageSubmitted = true;
            }
        },
        handleNext() {
            this.$emit("ageSubmit");
        },
    },
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

.dog-age-select {
    font-family: Montserrat;
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

.dog-age-select:focus {
    border: 1px solid #00263a;
    transition: 0.2s linear;
}

.next-button {
    font-family: Montserrat;
    background-color: #789904;
    margin: 10px auto;
    padding: 5px 0;
    box-sizing: border-box;
    border: 1px solid #c2c2c2;
    box-shadow: 1px 1px 4px #ebebeb;
    border-radius: 3px;
    outline: none;
    height: 32px;
    transition: 0.3s ease;
    width: 300px;
}

.next-button:hover {
    cursor: pointer;
    background-color: #617a04;
    transition: 0.3s ease;
}
</style>
