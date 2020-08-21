<template>
  <div>
    <div>
      <p v-if="pet.name && stage >= 2">
        I am a
        <span class="bold" v-if="pet.sex">{{pet.sex}}</span>
        dog named
        <span class="bold">{{pet.name}}</span>.
      </p>
      <p v-if="pet.breed && stage >= 4">
        My breed is
        <span class="bold">{{pet.breed}}</span>.
      </p>
      <p v-if="pet.age && stage >= 5">
        I am
        <span class="bold">{{pet.age}} years</span> old
        <span v-if="pet.weight && stage >= 6">
          and weigh
          <span class="bold">{{pet.weight}}kg</span>
        </span>.
      </p>
      <p v-if="stage >= 7">
        In temperment, I'm
        <span
          class="bold"
          v-if="pet.activity === 'potato'"
        >a bit of a couch potato</span>
        <span class="bold" v-if="pet.activity === 'notso'">not very active</span>
        <span class="bold" v-if="pet.activity === 'active'">an active dog</span>
        <span class="bold" v-if="pet.activity === 'more'">more active than most</span>
        <span class="bold" v-if="pet.activity === 'super'">super active</span>

        <span v-if="stage >= 8">
          and
          <span class="bold" v-if="pet.body === 'underweight'">very underweight</span>
          <span class="bold" v-if="pet.body === 'slightlyunder'">slightly underweight</span>
          <span class="bold" v-if="pet.body === 'average'">average</span>
          <span class="bold" v-if="pet.body === 'slightlyover'">slightly overweight</span>
          <span class="bold" v-if="pet.body === 'overweight'">very overweight</span>
        </span>
      </p>
      <p v-if="stage >= 9">
        I am
        <span class="bold">{{pet.working ? "a working dog" : "not a working dog"}}</span>
      </p>
    </div>

    <h2>{{ message }}</h2>
    <form v-if="stage === 1" v-on:submit.prevent="handleNameInput">
      <input type="text" name="name" placeholder="Name" v-model="pet.name" required v-focus />
    </form>
    <form v-if="stage === 2">
      <select name="sex" id="sexSelect" @change="handleSexSelect" v-model="pet.sex" v-focus>
        <option disabled selected value>Select Sex</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </form>
    <form v-if="stage === 3" v-on:submit.prevent="handleBreedInput">
      <input type="text" name="breed" placeholder="Breed" v-model="pet.breed" required v-focus />
    </form>
    <form v-if="stage === 4" v-on:submit.prevent="handleAgeInput">
      <input type="number" name="age" placeholder="Age" v-model="pet.age" required autofocus />
    </form>
    <form v-if="stage === 5" v-on:submit.prevent="handleWeightInput">
      <input
        type="number"
        name="weight"
        placeholder="Weight(kg)"
        v-model="pet.weight"
        required
        autofocus
      />
    </form>
    <form v-if="stage === 6">
      <select
        name="active"
        id="activeSelect"
        @change="handleActivitySelect"
        v-model="pet.activity"
        required
      >
        <option disabled selected value>Select Activity Level</option>
        <option value="potato">Couch Potato</option>
        <option value="notso">Not so active</option>
        <option value="active">Active</option>
        <option value="more">More active</option>
        <option value="super">Super active</option>
      </select>
    </form>
    <form v-if="stage === 7">
      <select name="body" id="bodySelect" @change="handleBodySelect" v-model="pet.body" required>
        <option disabled selected value>Select Body Type</option>
        <option value="underweight">Very underweight</option>
        <option value="slightlyunder">Slightly underweight</option>
        <option value="average">Average</option>
        <option value="slightlyover">Slightly overweight</option>
        <option value="overweight">Very overweight</option>
      </select>
    </form>
    <form v-if="stage === 8">
      <button v-on:click="handleWorkingDog(false)">Not a Working Dog</button>
      <button v-on:click="handleWorkingDog(true)">Working Dog</button>
    </form>
    <form class="wizard-health" v-if="stage === 9" v-on:submit.prevent="doPhysical">
      <ul class="wizard-list">
        <li>
          <input type="checkbox" name="health" id="health0" value="bloat" />
          <label for="health0">None</label>
        </li>
        <li>
          <input type="checkbox" name="health" id="health1" value="bloat" v-model="pet.health" />
          <label for="health1">Bloat</label>
        </li>
        <li>
          <input type="checkbox" name="health" id="health2" value="blocked" v-model="pet.health" />
          <label for="health2">Blocked Anal Glands</label>
        </li>
        <li>
          <input type="checkbox" name="health" id="health3" value="breathing" v-model="pet.health" />
          <label for="health3">Breathing Issues / BRS</label>
        </li>
        <li>
          <input type="checkbox" name="health" id="health4" value="digestive" v-model="pet.health" />
          <label for="health4">Digestive Problems (IBS/IBD)</label>
        </li>
        <li>
          <input
            type="checkbox"
            name="health"
            id="health5"
            value="inflammation"
            v-model="pet.health"
          />
          <label for="health5">Inflammation</label>
        </li>
        <li>
          <input type="checkbox" name="health" id="health6" value="joint" v-model="pet.health" />
          <label for="health6">Joint Issues / Arthritis</label>
        </li>
        <li>
          <input type="checkbox" name="health" id="health7" value="parasites" v-model="pet.health" />
          <label for="health7">Parasites (Worms or other)</label>
        </li>
        <li>
          <input type="checkbox" name="health" id="health8" value="skinissues" v-model="pet.health" />
          <label for="health8">Skin Issues eg. itchy</label>
        </li>
        <li>
          <input type="checkbox" name="health" id="health9" value="spayed" v-model="pet.health" />
          <label for="health9">Spayed/Neutered</label>
        </li>
        <li>
          <input
            type="checkbox"
            name="health"
            id="health10"
            value="tearstains"
            v-model="pet.health"
          />
          <label for="health10">Tear Stains</label>
        </li>
        <li>
          <input type="checkbox" name="health" id="health11" value="teeth" v-model="pet.health" />
          <label for="health11">Teeth & Gums</label>
        </li>
        <li>
          <input type="checkbox" name="health" id="health12" value="ticks" v-model="pet.health" />
          <label for="health12">Ticks & Fleas</label>
        </li>
      </ul>
      <button>To behavioral issues</button>
    </form>
    <form class="wizard-health" v-if="stage === 10" v-on:submit.prevent="doBehavioral">
      <ul class="wizard-list">
        <li>
          <input type="checkbox" name="health" id="health00" value="bloat" />
          <label for="health00">None</label>
        </li>
        <li>
          <input
            type="checkbox"
            name="health"
            id="health13"
            value="aggressionAroundFood"
            v-model="pet.health"
          />
          <label for="health13">Aggression around Food</label>
        </li>
        <li>
          <input type="checkbox" name="health" id="health14" value="chewing" v-model="pet.health" />
          <label for="health14">Chewing & Destructive</label>
        </li>
        <li>
          <input type="checkbox" name="health" id="health15" value="fearful" v-model="pet.health" />
          <label for="health15">Fearful of Fireworks or Thunderstorms</label>
        </li>
        <li>
          <input type="checkbox" name="health" id="health16" value="fussy" v-model="pet.health" />
          <label for="health16">Fussy Dog</label>
        </li>
        <li>
          <input
            type="checkbox"
            name="health"
            id="health17"
            value="overExcitable"
            v-model="pet.health"
          />
          <label for="health17">Over-Excitable</label>
        </li>
        <li>
          <input type="checkbox" name="health" id="health17" value="pulling" v-model="pet.health" />
          <label for="health17">Pulling on the Lead</label>
        </li>
        <li>
          <input
            type="checkbox"
            name="health"
            id="health18"
            value="seperation"
            v-model="pet.health"
          />
          <label for="health18">Separation Anxiety</label>
        </li>
      </ul>
      <button>To diseases</button>
    </form>
    <form class="wizard-health" v-if="stage === 11" v-on:submit.prevent="doDiseases">
      <li>
        <input type="checkbox" name="health" id="health" />
        <label for="health">None</label>
      </li>
      <li>
        <input
          type="checkbox"
          name="health"
          id="health"
          value="cardiomyopathy"
          v-model="pet.health"
        />
        <label for="health">Cardiomyopathy (DCM)</label>
      </li>
      <li>
        <input type="checkbox" name="health" id="health" value="chronicKidney" v-model="pet.health" />
        <label for="health">Chronic Kidney Disease</label>
      </li>
      <li>
        <input type="checkbox" name="health" id="health" value="cushings" v-model="pet.health" />
        <label for="health">Cushing's Disease</label>
      </li>
      <li>
        <input type="checkbox" name="health" id="health" value="diabetes" v-model="pet.health" />
        <label for="health">Diabetes</label>
      </li>
      <li>
        <input type="checkbox" name="health" id="health" value="epilespy" v-model="pet.health" />
        <label for="health">Epilepsy</label>
      </li>
      <li>
        <input type="checkbox" name="health" id="health" value="hipDysplasia" v-model="pet.health" />
        <label for="health">Hip Dysplasia</label>
      </li>
      <li>
        <input
          type="checkbox"
          name="health"
          id="health"
          value="hyperthyroidism"
          v-model="pet.health"
        />
        <label for="health">Hyperthyroidism</label>
      </li>
      <li>
        <input
          type="checkbox"
          name="health"
          id="health"
          value="hypothyroidism"
          v-model="pet.health"
        />
        <label for="health">Hypothyroidism</label>
      </li>
      <li>
        <input
          type="checkbox"
          name="health"
          id="health"
          value="luxatingPatella"
          v-model="pet.health"
        />
        <label for="health">Luxating Patella</label>
      </li>
      <li>
        <input type="checkbox" name="health" id="health" value="pancreatitus" v-model="pet.health" />
        <label for="health">Pancreatitis</label>
      </li>
    </form>
    <form v-if="stage === 13">
      <button v-on:click="handleRawExperience('new')">Yes</button>
      <button v-on:click="handleRawExperience('occasional')">Occasional</button>
      <button v-on:click="handleRawExperience('experienced')">Experienced</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Wizardv1",
  props: {},
  data: () => {
    return {
      message: "What is your dogs name?",
      stage: 1,
      pet: {
        name: "",
        sex: "",
        age: "",
        breed: "",
        weight: "",
        activity: "",
        body: "",
        working: "",
        health: [],
        experience: "",
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
    handleClick() {},
    handleNameInput() {
      this.stage = 2;
      this.message = `What sex is ${this.pet.name}?`;
    },
    handleSexSelect() {
      this.stage = 3;
      this.message = `What breed is ${this.pet.name}?`;
    },
    handleBreedInput() {
      this.stage = 4;
      this.message = `What age is ${this.pet.name}`;
    },
    handleAgeInput() {
      this.stage = 5;
      this.message = `What does ${this.pet.name} weigh?`;
    },
    handleWeightInput() {
      this.stage = 6;
      this.message = `How active is ${this.pet.name}?`;
    },
    handleActivitySelect() {
      this.stage = 7;
      this.message = `What is ${this.pet.name}s body type?`;
    },
    handleBodySelect() {
      this.stage = 8;
      this.message = `Is ${this.pet.name} a working dog?`;
    },
    handleWorkingDog(isWorking) {
      this.pet.working = isWorking;
      this.stage = 9;
      this.message = `Does ${this.pet.name} suffer from any if these health issues?`;
    },
    doPhysical() {
      console.log(this.pet.health);
      this.stage = 10;
      this.message = `Does ${this.pet.name} suffer from any of these physical issues?`;
    },
    doBehavioral() {
      this.stage = 11;
      this.message = `Does ${this.pet.name} suffer from any of these diseases?`;
    },
    doDiseases() {
      this.stage = 12;
      this.message = "Is this your first time using raw dog food?";
    },
    handleRawExperience(experience) {
      this.pet.experience === experience;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.wizard-health {
  display: flex;
  justify-content: center;
}
.wizard-list {
  list-style: none;
  text-align: left;
}

.bold {
  font-weight: 700;
}
</style>
