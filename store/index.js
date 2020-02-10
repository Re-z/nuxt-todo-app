import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const store = () =>
  new Vuex.Store({
    state: {
		items: []
    },
    mutations: {
      addItem(state,item) {
		  state.items.push(item)
	  },
	  deleteItem(state,index) {
		  state.items.splice(index, 1)
	  }
	},
	getters: {
		getItems(state) {
			return state.items;
		}
	}
  });

export default store;
