import * as Vue from 'vue';

const localStorageKey = 'randomPicker-items';
const appOptions = {
	data() {
		return {
			items: [
				{name:"たなか", use:true},
				{name:"すずき", use:true},
				{name:"やまだ", use:true},
			],
			candidate: '',
			selected: '',
		};
	},
	created() {
		const localDataStr = window.localStorage.getItem(localStorageKey);
		const localData = JSON.parse(localDataStr);
		if(localData) {
			this.items = localData;
		}
	},
	computed: {
		usingItems() {
			return this.items.filter(item => item.use);
		},
	},
	methods: {
		deleteItem(index) {
			this.items.splice(index, 1);
			this.writeLocalStorage();
		},
		deleteAll() {
			if(confirm('それは まことですか？')) {
				this.items = [];
				this.writeLocalStorage();
			}
		},
		add(event) {
			console.log(event);
			if(event.isComposing || event.keyCode === 229) {
				// 日本語等の入力中のenterキーは無視
				// see https://qiita.com/TsukasaGR/items/22b306cb819bc7164bd7
				return;
			}
			const candidate = this.candidate;
			if(candidate.length <= 0) {
				return;
			}
			this.items.push({
				name: candidate,
				use: true,
			});
			this.candidate = '';
			this.writeLocalStorage();
		},
		writeLocalStorage() {
			if(this.items.length <= 0) {
				window.localStorage.removeItem(localStorageKey);
			}
			else {
				const dataStr = JSON.stringify(this.items);
				//console.log(dataStr);
				window.localStorage.setItem(localStorageKey, dataStr);
			}
			this.selected = '';
		},
		writeLocalStorageAsync() {
			setTimeout(() => {
				this.writeLocalStorage();
			}, 0);
		},
		select() {
			const len = this.usingItems.length;
			this.selected = '';
			if(len > 0) {
				setTimeout(() => {
					this.selected = this.usingItems[Math.floor(Math.random()*len)].name;
				}, 0);
				
				// scroll to bottom
				// see https://stackoverflow.com/a/11715670/518639
				window.scrollTo(0, document.body.scrollHeight);
			}
		}
	},
};
const app = Vue.createApp(appOptions).mount('#app');
