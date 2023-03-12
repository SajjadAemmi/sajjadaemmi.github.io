//*****Magnific Pop up js

$('#inline-popups,#inline-popups-2,#inline-popups-3,#inline-popups-4,#inline-popups-5,#inline-popups-6').magnificPopup({
	delegate: 'a',
	removalDelay: 400, //delay removal by X to allow out-animation
	callbacks: {
		beforeOpen: function() {
			this.st.mainClass = this.st.el.attr('data-effect');
		}
	},
	midClick: true
});

