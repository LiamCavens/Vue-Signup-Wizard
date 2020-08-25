<template>
    <div class="wizard">
        <div class="wizard-components">
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
            <button @click="checkPet">CHECK PET (For Testing Console)</button>
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
    directives: {
        focus: {
            inserted: (el) => {
                el.focus();
            },
        },
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
            console.log(this.pet.age);
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
</style>
