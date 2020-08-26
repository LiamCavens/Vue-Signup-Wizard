<template>
    <div class="dog-weight">
        <p class="dog-weight-label">What's {{ name }}'s weight?</p>
        <div class="weight-inputs">
            <input
                placeholder="Enter Weight"
                class="dog-weight-input"
                type="number"
                min="0"
                max="999"
                v-model="weight.amount"
                @blur="blurred = true"
                autofocus
            />
            <select
                name="dog-weight-units"
                id="weight-units"
                v-model="weight.unit"
            >
                <option class="unit-option" value="kg" default
                    >Kilograms</option
                >
                <option class="unit-option" value="lb">Pounds</option>
            </select>
        </div>
        <transition name="fade">
            <button class="next-button" v-if="blurred" @click="handleNext">
                Next
            </button>
        </transition>
    </div>
</template>

<script>
export default {
    name: "DogWeight",
    props: {
        name: String,
        weight: Object,
    },
    data: () => {
        return {
            blurred: false,
        };
    },
    methods: {
        handleNext() {
            if (!this.weight.amount) return alert("You must input a weight");
            this.$emit("weightSubmit");
        },
    },
    mounted() {
        window.addEventListener("keyup", (event) => {
            if (event.keyCode === 13) {
                this.$emit("weightSubmit");
            }
        });
    },
};
</script>

<style scoped>
.dog-weight {
    color: #00263a;
    display: flex;
    flex-direction: column;
}

.dog-weight-label {
    font-family: Montserrat-Bold;
    font-size: 22px;
    margin-bottom: 5px;
}

.dog-weight-input {
    box-sizing: border-box;
    border: 1px solid #c2c2c2;
    box-shadow: 1px 1px 4px #ebebeb;
    border-radius: 3px;
    height: 50px;
    width: 200px;
    padding: 7px;
    margin: 0 5%;
    outline: none;
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
    width: 315px;
}

.next-button:hover {
    cursor: pointer;
    background-color: #617a04;
    transition: 0.3s ease;
}

.dog-weight-input:focus {
    border: 1px solid #00263a;
    transition: 0.2s linear;
}

.weight-inputs {
    display: flex;
}

.weight-inputs select {
    font-family: Montserrat;
    color: #00263a;
    border: none;
    width: 100px;
}

.weight-inputs select:focus {
    outline: none;
}

.fade-enter-active {
    transition: opacity 0.3s linear;
    transition-delay: 0.5s;
}

.fade-enter {
    opacity: 0;
}
</style>
