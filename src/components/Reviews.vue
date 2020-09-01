<template>
  <div class="reviews">
    <div class="reviews-header">
      <p class="reviews-ourword">Don't take our word for it</p>
      <p class="reviews-happydogs">57,000 happy dogs uk-wide</p>
    </div>
    <div class="reviews-carousel">
      <div v-for="(review, index) in reviews" :key="index">
        <transition name="fade-down">
          <div class="reviews-review" v-if="index === currentReview">
            <p class="review-description">"{{review.description}}"</p>
            <p class="reviews-name">{{review.name}}</p>
            <img
              class="reviews-image"
              :src="require(`../assets/${review.imageUrl}`)"
              alt="Review owner image"
            />
          </div>
        </transition>
      </div>
      <button class="previous-chevron" @click="handlePrev">
        <font-awesome-icon :icon="['fas', 'chevron-left']" />
      </button>
      <button class="next-chevron" @click="handleNext">
        <font-awesome-icon :icon="['fas', 'chevron-right']" />
      </button>
    </div>
    <div class="reviews-controls">
      <button @click="prevReview">
        <font-awesome-icon :icon="['fas', 'backward']" />
      </button>
      <button @click="playReview">
        <font-awesome-icon :icon="['fas', 'play']" />
      </button>
      <button @click="pauseReview">
        <font-awesome-icon :icon="['fas', 'pause']" />
      </button>
      <button @click="nextReview">
        <font-awesome-icon :icon="['fas', 'forward']" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Reviews",
  props: {},
  data: () => {
    return {
      currentReview: 0,
      reviews: [
        {
          name: "Smithy, Ozzy & Paul, North",
          imageUrl: "PaulPit.jpg",
          description: `I now feed both my dogs B&D Raw dog food, 
          its the best thing ever, sometimes I help myself to some! 
          I no longer suffer from tummy aches and I feel more energetic than ever, 
          the dogs look more shiny too`,
        },
        {
          name: "Dexter & Ross, Jervie",
          imageUrl: "RossCat.jpg",
          description: `Duke & Bella's raw dog food is so good that I feed it to my cat, 
            he suffered from explosive diarrhea over the carpets and now suffers no more, 
            I cannot recommend any more`,
        },
        {
          name: "Babe & Jim, The Globe",
          imageUrl: "JimDog.jpg",
          description: `I can honestly say after a few days, Babe was a different dog, 
            her stool is so firm I can now pick it up and throw it, 
            it makes it a lot of fun taking the dog for longer walks, I rate 8/8`,
        },
      ],
    };
  },
  methods: {
    prevReview() {
      this.currentReview--;
      if (this.currentReview < 0) {
        this.currentReview = this.reviews.length - 1;
      }
    },
    nextReview() {
      this.currentReview++;
      if (this.currentReview > this.reviews.length - 1) {
        this.currentReview = 0;
      }
    },
    playReview() {
      this.playReviews = setInterval(() => {
        this.nextReview();
      }, 7500);
    },
    pauseReview() {
      clearInterval(this.playReviews);
    },
    handleNext() {
      this.$emit("handleNext");
    },
    handlePrev() {
      this.$emit("handlePrev");
    },
  },
  mounted() {
    this.playReview();
  },
};
</script>

<style scoped>
.reviews {
  display: flex;
  flex-direction: column;
  position: relative;
}
.reviews-header {
  border-bottom: 1px #d1d1d1 solid;
  max-width: 275px;
  margin: 0 auto;
}
.reviews-carousel {
  display: flex;
  flex-direction: row;
  height: 265px;
}

.reviews-review {
  position: absolute;
}

.reviews-ourword {
  font-weight: 700;
  font-size: 20px;
  margin: 5px;
}

.reviews-happydogs {
  margin: 2px 2px 10px;
  font-size: 14px;
}

.reviews-name {
  font-weight: 700;
  font-size: 12px;
  margin: 5px;
}

.review-description {
  padding: 5px 15px;
  margin: 5px;
  max-width: 300px;
}

.reviews-controls {
  display: flex;
  justify-content: space-around;
  margin: 0 30px;
  padding: 10px;
}

.reviews-controls button {
  color: white;
  background-color: #789904;
  border: 1px solid #789904;
  padding: 4px 12px;
  border-radius: 500px;
}

.reviews-image {
  align-self: center;
  border-radius: 50%;
  height: 100px;
  width: 100px;
}

.next-chevron {
  font-size: 30px;
  color: orange;
  align-self: center;
  margin-left: auto;
  background-color: white;
  border: none;
}

.previous-chevron {
  font-size: 30px;
  color: orange;
  align-self: center;
  float: left;
  background-color: white;
  border: none;
}

@media screen and (max-width: 340px) {
  .reviews-carousel {
    height: 300px;
  }
}
</style>

<style >
.fade-down-enter-active {
  transition: all 0.2s ease;
  transition-delay: 0.4s;
}
.fade-down-leave-active {
  transition: all 0.2s ease;
}
.fade-down-enter {
  transform: translateY(-10px);
  opacity: 0;
}

.fade-down-leave-to {
  transform: translateY(10px);
  opacity: 0;
}
</style>
