// Smooth scroll for 'Get Started' button
document.addEventListener('DOMContentLoaded', function() {
	var getStartedBtn = document.querySelector('.nav-actions .btn-primary[href="#how-it-works"]');
	if (getStartedBtn) {
		getStartedBtn.addEventListener('click', function(e) {
			e.preventDefault();
			var section = document.getElementById('how-it-works');
			if (section) {
				section.scrollIntoView({ behavior: 'smooth' });
			}
		});
	}
});
function login(e){
e.preventDefault();
alert("LOGIN connected to backend soon.");
}


function goHome(){
window.location.href="index.html";
}
