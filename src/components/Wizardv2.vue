<template>
    <div class="wizard">
        <div class="wizard-components">
            <DogName
                v-if="stage === 1"
                :name.sync="pet.name"
                @nameSubmit="handleName"
            />
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
        handleNext() {
            this.blurred = false;
        },
        handleName() {
            console.log("name submitted");
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
