<template>
  <div class="dog-health">
    <h2>Any health issues?</h2>
    <div class="dog-health-issues">
      <ul class="dog-health-issues-list">
        <li
          class="dog-health-issues-item"
          v-bind:class="{ active: issue.active }"
          v-for="(issue, index) in healthIssues"
          :key="index"
          @click="handleIssue(issue)"
        >
          <span>
            <span class="list-span">{{ issue.label }}</span>
            <font-awesome-icon v-if="!issue.active" :icon="['fas', 'plus']" />
            <font-awesome-icon v-if="issue.active" :icon="['fas', 'minus']" />
          </span>
        </li>
      </ul>
    </div>
    <button class="btn-green next-button" @click="handleHealthSubmit">
      Next
    </button>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  name: "DogHealth",
  props: {
    health: Array,
  },
  data: () => {
    return {
      healthIssues: [
        { value: "bloat", label: "Bloat", active: false },
        {
          value: "blockedAnalGlands",
          label: "Blocked anal glands",
          active: false,
        },
        { value: "breathing", label: "Breathing issues", active: false },
        { value: "cardio", label: "Cardiomyopathy (DCM)", active: false },
        {
          value: "chronicKidney",
          label: "Chronic Kidney Disease",
          active: false,
        },
        { value: "cushings", label: "Cushing's Disease", active: false },
        { value: "digestive", label: "Digestive problems", active: false },
        { value: "epilepsy", label: "Epilepsy", active: false },
        {
          value: "arthiritis",
          label: "Joint issues/arthiritis",
          active: false,
        },
        { value: "hipDysplasia", label: "Hip Dusplasia", active: false },
        { value: "hyperthyroidism", label: "Hyperthyroidism", active: false },
        { value: "inflammation", label: "Inflammation", active: false },
        { value: "parasites", label: "Parasites (worms ect.)", active: false },
        { value: "skin", label: "Skin issues eg. itchy", active: false },
        { value: "tearStains", label: "Tear stains", active: false },
        { value: "teeth", label: "Teeth & gums", active: false },
        { value: "ticks", label: "Ticks & fleas", active: false },
      ],
    };
  },
  methods: {
    handleIssue(issue) {
      if (!issue.active) {
        issue.active = true;
        this.health.push(issue.value);
      } else {
        issue.active = false;
        _.remove(this.health, (i) => {
          return i === issue.value;
        });
      }
    },
    handleHealthSubmit() {
      this.$emit("healthSubmit");
    },
  },
  mounted() {
    // We iterate over health to find values which equal healthIssues
    _.forEach(this.health, (issue) => {
      let issueToFind = _.find(this.healthIssues, (healthIssue) => {
        return issue === healthIssue.value;
      });
      issueToFind.active = true;
    });
  },
};
</script>

<style scoped>
.dog-health-issues-list {
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
}

.dog-health-issues-item {
  border: 1px solid #00263a;
  font-size: 10px;
  padding: 14px 6px;
  margin: 5px;
  flex: 1 1 auto;
  cursor: pointer;
  transition: all 0.2s ease;
  border-radius: 3px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
}

.dog-health-issues-item:hover {
  border: 1px solid #789904;
  /* color: #789904; */
}

.list-span {
  padding-right: 5px;
}

.active {
  background-color: #789904;
  color: #fff;
  border: 1px solid #789904;
  transition: all 0.2s ease;
}
/* 
.active:hover {
  color: #00263a;
} */

.next-button {
  margin: auto;
  width: 100%;
}
</style>
