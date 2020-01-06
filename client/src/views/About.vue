<template>
  <div class="about">
    <h1>About Page</h1>

    This App is a test-bed for making a bug tracker. This was done as part of
    the Boise CodeWorks Winter Project over the Christmas Break.
    <div class="row justify-content-center">
      <!-- brought back title withe named slot property, same modal, simple styling -->
      <button class="btn btn-danger" data-toggle="modal" data-target="#three">
        Modal 3
      </button>
      <BugModal id="three">
        <div slot="title" class="modalThree">
          <i class="fas fa-dragon mr-3"></i>Title
        </div>

        <br />
        <!-- added an input to the modal layout -->
        <input
          class="mt-5"
          type="text"
          placeholder="Input field?.. what the..."
          v-model="message"
        />
      </BugModal>
    </div>
    <div>
      <p class="mt-5">{{ message }}</p>
    </div>
    <h2>Other Modal</h2>
    <div class="row justify-content-center">
      <button class="btn btn-info" data-toggle="modal" data-target="#four">
        Modal four
      </button>
      <!-- bringing in modal again, adding title and a card to it -->
      <BugModal id="four">
        <div slot="title">
          <h3>More Stuff</h3>
        </div>
      </BugModal>
    </div>
  </div>
</template>

<script>
import BugModal from "../components/BugModal";

export default {
  name: "about",
  data() {
    return {
      message: ""
    };
  },
  computed: {},
  methods: {},
  components: { BugModal }
};
</script>

<style scoped>
.modalThree {
  color: blue;
  font-style: italic;
}
</style>
