<template>
    <div class="dog-name">
        <p class="dog-name-label">What is your dog's name?</p>
        <input
            class="dog-name-input"
            type="text"
            :value="name"
            @input="$emit('update:name', $event.target.value)"
            @blur="$emit('blurred')"
            required
        />
    </div>
</template>

<script>
export default {
    name: "DogName",
    props: ["name"],
};
</script>

<style scoped>
.dog-name {
    color: #00263a;
    display: flex;
    flex-direction: column;
}

.dog-name-label {
    font-family: Montserrat-Bold;
    font-size: 22px;
    margin-bottom: 5px;
}

.dog-name-input {
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

.dog-name-input:focus {
    border: 1px solid #00263a;
    transition: 0.2s linear;
}
</style>
