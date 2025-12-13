const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // Method 1: Use data saved via event handler
      // this.message = this.currentUserInput;

      // Method 2: Access DOM element value directly with $refs (recommended)
      this.message = this.$refs.userText.value;
    },
  },
  // Lifecycle hook: Runs before Vue instance creation (data/methods don't exist yet)
  beforeCreate() {
    console.log('beforeCreate()');
  },
  // Lifecycle hook: Runs after instance creation (data/methods are ready to use)
  created() {
    console.log('created()');
  },
  // Lifecycle hook: Runs before rendering to HTML page (DOM not accessible yet)
  beforeMount() {
    console.log('beforeMoun()');
  },
  // Lifecycle hook: Runs after rendering to HTML page (DOM is now accessible)
  mounted() {
    console.log('mounted()');
  },
  // Lifecycle hook: Runs before re-rendering when data changes
  beforeUpdate() {
    console.log('beforeUpdate()');
  },
  // Lifecycle hook: Runs after re-rendering and DOM update is complete
  updated() {
    console.log('updated()');
  },
  // Lifecycle hook: Runs before removing Vue instance from page
  beforeMount() {
    console.log('beforeMount()');
  },
  // Lifecycle hook: Runs after Vue instance is removed and cleaned up
  unmounted() {
    console.log('unmounted()');
  }
});

// Mount the Vue app instance to the DOM element with id="app"
// This renders the Vue app and makes it active on the page
app.mount('#app');

// setTimeout is a JavaScript function that executes code after a delay
// First parameter: arrow function (() => {}) containing the code to execute
// Second parameter: delay time in milliseconds (3000ms = 3 seconds)
// This will call app.unmount() after 3 seconds, removing the Vue app from the DOM
setTimeout(() => {
  app.unmount();
}, 3000);

// Immediately call unmount() method on the app instance
// This removes the Vue app from the DOM right away
// Note: This executes before the setTimeout, so the setTimeout may not work as expected
app.unmount();

const app2 = Vue.createApp({
  template: `
    <P>{{ favouriteMeal }}<p>
  `,
  data() {
    return {
      favouriteMeal: 'Pizza!!'
    };
  },
});

app2.mount('#app2');

// ...

const data = {
  message: 'Hello',
  longMessage: 'Hello World!'
};

const handler = {
  set(target, key, value) {
    if (key === 'message') {
      target.longMessage = value + ' World!';
    }
    target.message = value;
  }
}

const proxy = new Proxy(data, handler);

proxy.message = 'Hello!!!!'

// console.log(proxy.longMessage);