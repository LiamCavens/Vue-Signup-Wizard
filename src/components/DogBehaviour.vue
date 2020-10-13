<template>
  <div class="dog-behaviour">
    <h2>Any behaviour issues?</h2>
    <div class="dog-behaviour-issues">
      <ul class="dog-behaviour-issues-list">
        <li
          class="dog-behaviour-issues-item"
          v-bind:class="{ active: issue.active }"
          v-for="(issue, index) in behaviourIssues"
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
    <button class="btn-green next-button" @click="handleBehaviourSubmit">
      Next
    </button>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  name: "DogBehaviour",
  props: {
    behaviour: Array,
  },
  data: () => {
    return {
      behaviourIssues: [
        { value: "aggression", label: "Aggression around food", active: false },
        { value: "destructive", label: "Chewing & destructive", active: false },
        { value: "fearful", label: "Fearful of loud noises", active: false },
        { value: "fussy", label: "Fussy", active: false },
        { value: "overExcitable", label: "Over-Excitable", active: false },
        { value: "pulling", label: "Pulling on the lead", active: false },
        { value: "anxiety", label: "Seperation anxiety", active: false },
      ],
    };
  },
  methods: {
    handleIssue(issue) {
      if (!issue.active) {
        issue.active = true;
        this.behaviour.push(issue.value);
      } else {
        issue.active = false;
        _.remove(this.behaviour, (i) => {
          return i === issue.value;
        });
      }
    },
    handleBehaviourSubmit() {
      this.$emit("behaviourSubmit");
    },
  },
  mounted() {
    // We iterate over behaviours to find values which equal behaviourIssues
    _.forEach(this.behaviour, (issue) => {
      let issueToFind = _.find(this.behaviourIssues, (behaviourIssue) => {
        return issue === behaviourIssue.value;
      });
      issueToFind.active = true;
    });
  },
};
</script>

<style scoped>
.dog-behaviour-issues-list {
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
}

.dog-behaviour-issues-item {
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

.list-span {
  padding-right: 5px;
}

.active {
  background-color: #789904;
  color: #fff;
  border: 1px solid #789904;
  transition: all 0.2s ease;
}

.next-button {
  margin: auto;
  width: 100%;
}
</style>
