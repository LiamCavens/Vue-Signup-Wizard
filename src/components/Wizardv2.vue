<template>
    <div class="wizard">
        <div class="wizard-components">
            <transition name="slide-fade">
                <DogName
                    v-if="stage === 1"
                    :name.sync="pet.name"
                    @nameSubmit="handleName"
                />
                <DogGender
                    v-if="stage === 2"
                    :name="pet.name"
                    :gender.sync="pet.gender"
                    @genderSubmit="handleGender"
                />
                <DogAge
                    v-if="stage === 3"
                    :name="pet.name"
                    :age.sync="pet.age"
                    @ageSubmit="handleAge"
                />
            </transition>

            <!-- <button @click="checkPet">CHECK PET (For Testing Console)</button> -->
        </div>
    </div>
</template>

<script>
import DogAge from "./DogAge";
import DogName from "./DogName";
import DogGender from "./DogGender";

export default {
    name: "Wizardv2",
    components: {
        DogAge,
        DogName,
        DogGender,
    },
    props: {},
    data: () => {
        return {
            stage: 1,
            pet: {
                name: "",
                gender: "",
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
    methods: {
        handleName() {
            this.stage = 2;
        },
        handleGender(gender) {
            this.pet.gender = gender;
            this.stage = 3;
        },
        handleAge() {
            if (this.pet.age.years && this.pet.age.months) {
                this.stage = 4;
            }
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

.slide-fade-enter-active {
    transition: all 0.8s ease;
    transition-delay: 0.4s;
}
.slide-fade-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter {
    transform: translateX(10px);
    opacity: 0;
}

.slide-fade-leave-to {
    transform: translateX(-10px);
    opacity: 0;
}
</style>
