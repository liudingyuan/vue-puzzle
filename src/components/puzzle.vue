<template>
	<div class="puzzle">
		<ul class="puzzle-container">
			<li 
			v-for="puzzle in puzzles"
			:class="{'empty': !puzzle}"
			@click.prevent="move($index)">
			<img :src="puzzle.pic" alt="">
			<span v-text="puzzle.id >= 0 ? puzzle.id + 1 : ''" v-if="show"></span>
			</li>
		</ul>
		<button @click="render">重置</button>
		<button @click="showTips">提示</button>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				puzzles: [],
				show: false
			}
		},
		ready () {
			this.render();
		},
		methods: {
			render () {
				let arr = [];
				for (let i = 0;i < 15;i++) {
					arr.push({id: i, pic: './assets/imgs/pic' + i + '.png'});
				}
				this.puzzles = arr.sort(() => Math.random() - 0.5);
				this.puzzles.push('');
			},
			changePos (curPos, afPos, obj) {
				this.puzzles.$set(afPos, obj);
				this.puzzles.$set(curPos, '');
			},
			move (index) {
				let cur = this.puzzles[index],
				    top = this.puzzles[index - 4],
				    right = this.puzzles[index + 1],
				    bottom = this.puzzles[index + 4],
				    left = this.puzzles[index - 1];

				if (top === '') {
					this.changePos(index, index - 4, cur);
				}
				else if (right === '') {
					this.changePos(index, index + 1, cur);
				}
				else if (bottom === '') {
					this.changePos(index, index + 4, cur);
				}
				else if (left === '') {
					this.changePos(index, index - 1, cur);
				}
				
				this.isSuccess();
			},
			isSuccess () {
				if (this.puzzles[15] === '') {
					let arr = this.puzzles.slice(0, 15);

					if (arr.every((item, index) => item.id === index)) {
						setTimeout(() => alert('success!'), 500);
					}
				}
			},
			showTips () {
				this.show = !this.show;
			}
		}
	}
</script>

<style lang="sass">
	.puzzle {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 40%;
		-webkit-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);

		&::after {
			content: '';
			display: block;
			margin-top: 100%;
		}

		button {
			position: absolute;
			top: 100%;
			margin-top: 1em;
			background: #3498db;
			border: 0;
			border-radius: 5px;
			padding: .5em 1em;
			color: #fff;
			cursor: pointer;
		}

		button + button {
			right: 0;
		}
	}

	@media only screen 
	and (min-width : 320px) and (max-width : 480px) {
	  .puzzle {width: 100%;}
	}
	/* iPads (landscape) ----------- */
	@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape) {
	  .puzzle {width: 60%;}
	}

	/* iPads (portrait) ----------- */
	@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : portrait) {
	  .puzzle {width: 100%;}
	}

	.puzzle-container {
		position: absolute;
		width: 100%;
		height: 100%;
        
        li {
        	position: relative;
        	float: left;
        	list-style: none;
        	border: 1px solid #ecf0f1;
        	width: 25%;
        	height: 25%;
        	cursor: pointer;
        }

        .empty {
        	cursor: default;
        }

        img {
        	width: 100%;
        	max-width: 100%;
        	height: auto;
        }

        span {
        	position: absolute;
        	top: 0;
        }
	}
</style>