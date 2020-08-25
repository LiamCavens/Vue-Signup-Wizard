<template>
    <div class="wizard">
        <div class="wizard-components">
            <DogName
                v-if="stage === 1"
                :name.sync="pet.name"
                @blurred="handleBlur"
            />
            <transition name="fade"
                ><button class="next-button" v-if="blurred" @click="handleNext">
                    Next
                </button></transition
            >
        </div>
    </div>
</template>

<script>
import DogName from "./DogName";
export default {
    name: "Wizardv2",
    components: {
        DogName,
    },
    props: {},
    data: () => {
        return {
            blurred: false,
            stage: 1,
            pet: {
                name: "",
                sex: "",
                age: {
                    years: "",
                    months: "",
                },
                breed: "",
                weight: "",
                activity: "",
                body: "",
                working: "",
                health: [],
                experience: "",
                foodPreference: "",
            },
        };
    },
    directives: {
        focus: {
            inserted: (el) => {
                el.focus();
            },
        },
    },
    methods: {
        handleBlur() {
            this.blurred = true;
        },
        handleNext() {
            this.blurred = false;
        },
        checkPet() {
            console.log("Liam: this.pet");
            console.log(this.pet);
        },
    },
};
</script>

<style>
.wizard {
    background-color: #00263a;
    color: #e1b77e;
    width: 100%;
    display: flex;
    justify-content: center;
    flex: 1;
}

.wizard-components {
    margin: 10px;
    padding: 10px;
    width: 350px;
    background-color: white;
    color: #00263a;
    border-radius: 10px;
}

.next-button {
    font-family: Montserrat;
    background-color: #789904;
    width: 300px;
    margin: 5px 0;
    padding: 5px 0;
    box-sizing: border-box;
    border: 1px solid #c2c2c2;
    box-shadow: 1px 1px 4px #ebebeb;
    border-radius: 3px;
    outline: none;
    height: 32px;
}

.fade-enter-active {
    transition: opacity 0.3s linear;
    transition-delay: 1s;
}
.fade-enter {
    opacity: 0;
}
</style>
