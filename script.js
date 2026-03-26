const sonic = document.querySelector('.sonic');
const spike = document.querySelector('.spike');
const explo = document.querySelector('.explo');
const overTextI = document.querySelector('.overtextI');
const overTextII = document.querySelector('.overtextII');
let state = "run";


const jump = () => {
	sonic.classList.add('jump')
	
	setTimeout(() => {
		sonic.classList.remove('jump')
	}, 500)
}

function reset (){
	if (state === "gameOver"){
		console.log(state);
		document.location.reload();
	}
}

const loop = setInterval (() => {
	const spikePosition = spike.offsetLeft;
	const sonicPosition = window.getComputedStyle(sonic).bottom.replace("px", "")
	

	if (spikePosition <= 110 && spikePosition > 0 && sonicPosition < 60){
		spike.style.animation = 'none';
		spike.style.left = `${spikePosition}px`;
		sonic.style.display = 'none';
		explo.style.display = 'block';
		overTextI.style.display = 'block';
		overTextII.style.display = 'block';
		state = "gameOver";
	}
}
)
document.addEventListener('keydown', () => {
	jump();
	reset();
})