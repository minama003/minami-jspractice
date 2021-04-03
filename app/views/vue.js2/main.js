(function() {
  'user strict';

  //components

  var likeComponet = Vue.extend({
    // props: ['message'],
    props: {
      message: {
        type: String,
        default: 'Like'
      }
    },
    data: function() {
      return {
        count: 0
      }
    },
    template: '<button @click="countUp">{{ message }}{{ count }}</button>',
    methods: {
      countUp: function() {
        this.count++;
        this.$emit('increment');
      }
    }
  });

  var app = new Vue({
    el: '#app',
    components: {
      'like-componet': likeComponet
    },
    data: {
      total: 0
    },
    methods: {
      incrementTotal: function() {
        this.total++;
      }
    }
  });
})();