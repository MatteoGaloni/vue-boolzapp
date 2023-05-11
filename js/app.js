const { createApp } = Vue;

createApp({
  data() {
    return {
      //   newTask: {
      //     text: "",
      //     done: false,
      //   },

      convarsazioni: [
        // {
        //   text: "Gettare la spazzatura",
        //   done: true,
        // },
      ],
    };
  },
  methods: {
    // addTask() {
    //   this.tasks.push({
    //     ...this.newTask,
    //   });
    //   this.newTask.text = "";
    // },
  },
}).mount("#app");
