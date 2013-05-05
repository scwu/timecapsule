$(document).ready(function() {  
    var graduatecs = [
				{
					value: 83,
					color:"#F38630"
				},
				{
					value : 17,
					color : "#69D2E7"
				}

			];

	var cs = new Chart(document.getElementById("graduate-cs").getContext("2d")).Pie(graduatecs);
    
    var grads_total = [
				{
					value: 43,
					color:"#F38630"
				},
				{
					value : 57,
					color : "#69D2E7"
				}

			];

	var cs = new Chart(document.getElementById("graduate").getContext("2d")).Pie(grads_total);
    
    var bio = [
				{
					value: 48,
					color:"#a221ff"
				},
				{
					value : 52,
					color : "#63eda6"
				}

			];

	var bio_g = new Chart(document.getElementById("bio").getContext("2d")).Pie(bio);
    
    var cs121 = [
				{
					value: 82,
					color:"#a221ff"
				},
				{
					value : 18,
					color : "#63eda6"
				}

			];

	var c121 = new Chart(document.getElementById("121").getContext("2d")).Pie(cs121);
    
    var apcs = [
				{
					value: 19,
					color:"#ea584b"
				},
				{
					value : 81,
					color : "#fff372"
				}

			];

	var ap_cs_graph = new Chart(document.getElementById("apcs").getContext("2d")).Pie(apcs);
    
    var ap = [
				{
					value: 56,
					color:"#ea584b"
				},
				{
					value : 44,
					color : "#fff372"
				}

			];

	var ap_graph = new Chart(document.getElementById("ap").getContext("2d")).Pie(ap);
    
    $('.link').click(function() {
        var div = $(this).attr("id");
        $('html, body').animate({scrollTop:$("." + div).position().top}, 'slow');
	});
    
});