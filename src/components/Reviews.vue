<template>
  <div class="reviews">
    <!-- <div class="reviews-header">
      <p class="reviews-ourword">Don't take our word for it</p>
      <p class="reviews-happydogs">57,000 happy dogs uk-wide</p>
    </div> -->
    <div class="reviews-carousel">
      <div v-for="(review, index) in reviews" :key="index">
        <transition name="fade-down">
          <div class="reviews-review" v-if="index === currentReview">
            <p class="review-description">"{{ review.description }}"</p>
            <p class="reviews-name">{{ review.name }}</p>
            <img
              class="reviews-image"
              :src="require(`../assets/${review.imageUrl}`)"
              alt="Review owner image"
            />
          </div>
        </transition>
      </div>
    </div>
    <!-- <div class="reviews-controls">
      <button @click="prevReview">
        <font-awesome-icon :icon="['fas', 'backward']" />
      </button>
      <button v-if="!isPlaying" @click="playReview">
        <font-awesome-icon :icon="['fas', 'play']" />
      </button>
      <button v-if="isPlaying" @click="pauseReview">
        <font-awesome-icon :icon="['fas', 'pause']" />
      </button>
      <button @click="nextReview">
        <font-awesome-icon :icon="['fas', 'forward']" />
      </button>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "Reviews",
  props: {},
  data: () => {
    return {
      isPlaying: true,
      currentReview: 0,
      reviews: [
        {
          name: "Pepper & Sarah, Edinburgh",
          imageUrl: "Pepper.jpg",
          description: `Our rescue dog Pepper was disinterested at mealtimes and struggled 
          with high levels of anxiety. Since switching to Premium Adult Bella & Duke mealtimes 
          are totally different. As soon as she hears her bowl her tail starts wagging and the 
          dinner dance begins. Her bowl is always clean and we've noticed her anxiety levels have 
          improved as well as her coat and her energy levels. We couldn't be happier and neither 
          could Pepper!`,
        },
        // {
        //   name: "Smithy, Ozzy & Paul, Norf",
        //   imageUrl: "PaulPit.jpg",
        //   description: `I now feed both my dogs B&D Raw dog food,
        //   its the best thing ever, sometimes I help myself to some!
        //   I no longer suffer from tummy aches and I feel more energetic than ever,
        //   the dogs look more shiny too`,
        // },
        {
          name: "Alfie & Janice, London",
          imageUrl: "Alfie.jpg",
          description: `Alfie is new to Bella and Duke but he LOVES the premium Adult. 
          We’ve tried so many different foods to get on top of his itching and it feels 
          like we’ve finally found the perfect food! Thank you!`,
        },
        // {
        //   name: "Dexter & Ross, Jervie",
        //   imageUrl: "RossCat.jpg",
        //   description: `Duke & Bella's raw dog food is so good that I feed it to my cat,
        //     he suffered from explosive diarrhea over the carpets and now suffers no more,
        //     I cannot recommend any more`,
        // },
        {
          name: "Bertie & Maureen, Portsmouth",
          imageUrl: "Bertie.jpg",
          description: `This is Bertie he is 17 months old and on his 2nd order of Bella 
          and duke premium and he loves it....i was nervous at first but he is absolutely 
          loving it....he has so much energy his coat is shiny and he is happy..Maureen Skillander`,
        },
        // {
        //   name: "Babe & Jim, The Globe",
        //   imageUrl: "JimDog.jpg",
        //   description: `I can honestly say after a few days, Babe was a different dog,
        //     her stool is so firm I can now pick it up and throw it,
        //     it makes it a lot of fun taking the dog for longer walks, I rate 8/8`,
        // },
        {
          name: "Frankie, Beau & Liz, Scunthorpe",
          imageUrl: "Frankie&Beau.jpg",
          description: `Our two new rescue French bulldogs, Frankie and Beau have loved 
          the Premium range and the chicken treats. They look lick their bowls clean, 
          then lick each other’s bowls clean and then lick each other’s faces . Their coats are gleaming, 
          I’m so happy with the results even after such a short time`,
        },
        {
          name: "Lola & Lucy, Southend-on-sea",
          imageUrl: "Lola.jpg",
          description: `My little Lola is a rescue from Cyprus. When she arrived she was fed purely on 
          kibble. Her coat wasn’t shiny and she was really itchy. Since we’ve swapped her over to 
          Bella and Duke premium complete, not only does she get REALLY excited about her food, 
          her coat is so so shiny and soft, she is no longer itchy, there’s no dog smell (or dog breath) 
          and she’s super muscular and lean!! It’s like magic in a bowl! Lucy Yates`,
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
      this.isPlaying = true;
      this.playReviews = setInterval(() => {
        this.nextReview();
      }, 10000);
    },
    pauseReview() {
      clearInterval(this.playReviews);
      this.isPlaying = false;
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
  margin-bottom: 20px;
  /* height: 265px; */
}

.reviews-review {
  position: absolute;
  margin-bottom: 20px;
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
  font-size: 12px;
}

.reviews-controls {
  display: flex;
  justify-content: space-around;
  margin: 0 50px;
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
