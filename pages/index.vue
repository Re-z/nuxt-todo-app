<template>
	<v-container>
		<v-row class="d-flex justify-center">
			<v-card class="mt-12 ">
				<v-card-title>Todo List</v-card-title>
				<v-card-subtitle>Items are saved to Vuex</v-card-subtitle>
				<v-card-text>
					<p v-if="!items.length">There is no items. Add first!</p>
					<p v-for="(item, index) in items" :key="index">
						<span class="mr-1">{{index +1 + '.'}}</span>
						{{item}}
						<v-icon color="red" class="cup ml-1" @click="deleteItem(index)">mdi-delete</v-icon>
					</p>
				</v-card-text>
				<v-card-text>
					<v-form @submit.prevent="addItem">
						<v-row class="d-flex align-center">
							<v-col sm="7">
								<v-text-field v-model.trim="input" label="Add item"></v-text-field>
							</v-col>
							<v-col sm="5">
								<v-btn block type="submit">Add item</v-btn>
							</v-col>
						</v-row>
					</v-form>
				</v-card-text>
			</v-card>
		</v-row>
	</v-container>
</template>

<script>
	export default {
		data() {
			return {
				input: ""
			};
		},
		methods: {
			addItem() {
				if (this.input) {
					this.$store.commit("addItem", this.input);
					this.input = "";
				}
			},
			deleteItem(index) {
				this.$store.commit("deleteItem", index);
			}
		},
		computed: {
			items() {
				return this.$store.getters.getItems;
			}
		}
	};
</script>

