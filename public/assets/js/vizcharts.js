var loader = '<img src="images/loading.gif" style="height: 50px;">';
var option = '<option value="#VAL">#VAL</option>';
var data = [
  {
    x: ['2013-10-04 22:23:00', '2013-11-04 22:23:00', '2013-12-04 22:23:00'],
    y: [1, 3, 6],
    type: 'scatter'
  }
];

var fileselector;



$(document).ready(function() {		
	showLoader("spnLoader");
	loadExperiments();
	
});

function loadExperiments(){
	$.ajax({
			type : "GET",
			async : true,
			url : "experiments"
		})
		.done(function(msg) {
			if(msg.status == 1){
				removeLoader("spnLoader");
				var i;
				for(i=0;i<msg.files.length;i++){
					var opt = option;
					opt = opt.replace(/#VAL/g,msg.files[i]);
					$("#source").append(opt);
				}
				loadData(msg.files[0]);
				showToast("Success", "Successfully loaded Experiments.",'#0D638F');
				
			}else{
				removeLoader("spnLoader");
				showToast("Failure", "There are no experiments available. Please try after some time.",'#ff2e2e');
				
			}
			
		}).error(function(msg) {
			removeLoader("spnLoader")
			showToast("Error", "Some error occured while loading Experiments. Please try again later.",'#ff2e2e');
		});
}

function showToast(txtheading,txtmessage,colorcode){
	$.toast({
	    heading: txtheading,
	    text: txtmessage,
	    icon: 'info',
	    loader: true,        // Change it to false to disable loader
	    loaderBg: '#9EC600',
	    bgColor: colorcode
	});
}

function showLoader(loaderid){
	$("#"+loaderid).html(loader+"Loading...");
}

function removeLoader(loaderid){
	$("#"+loaderid).html("");
}
//spnLoader

function loadData(filename){
	showLoader("spnLoader");
		$.ajax({
			type : "GET",
			async : true,
			url : "experimentdata",
			data:{fname:filename}
		})
		.done(function(msg) {
			if(msg.status == 1){
				clearPlots();
				var emg0 = [];
				var emg1 = [];
				var emg2 = [];
				var emg3 = [];
				var emg4 = [];
				var emg5 = [];
				var emg6 = [];
				var emg7 = [];

				var emgts = [];

				var gx = [];
				var gy = [];
				var gz = [];
				
				var gt = [];

				var ax = [];
				var ay = [];
				var az = [];
				
				var at = [];

				var ox = [];
				var oy = [];
				var oz = [];
				var ow = [];
				
				var ot = [];

				var i;

				//

				for(i=0;i<msg.emg.data.length;i++){
					emg0.push(msg.emg.data[i][0]);
					emgts.push(msg.emg.timestamps[i]);
				}

				for(i=0;i<msg.emg.data.length;i++){
					emg1.push(msg.emg.data[i][1]);
				}

				for(i=0;i<msg.emg.data.length;i++){
					emg2.push(msg.emg.data[i][2]);
				}

				for(i=0;i<msg.emg.data.length;i++){
					emg3.push(msg.emg.data[i][3]);
				}

				for(i=0;i<msg.emg.data.length;i++){
					emg4.push(msg.emg.data[i][4]);
				}

				for(i=0;i<msg.emg.data.length;i++){
					emg5.push(msg.emg.data[i][5]);
				}

				for(i=0;i<msg.emg.data.length;i++){
					emg6.push(msg.emg.data[i][6]);
				}

				for(i=0;i<msg.emg.data.length;i++){
					emg7.push(msg.emg.data[i][7]);
				}

				for(i=0;i<msg.gyr.data.length;i++){
					gx.push(msg.gyr.data[i][0]);
					gt.push(msg.gyr.timestamps[i]);
				}
				for(i=0;i<msg.gyr.data.length;i++){
					gy.push(msg.gyr.data[i][1]);
					
				}
				for(i=0;i<msg.gyr.data.length;i++){
					gz.push(msg.gyr.data[i][2]);
					
				}

				for(i=0;i<msg.acc.data.length;i++){
					ax.push(msg.acc.data[i][0]);
					at.push(msg.acc.timestamps[i]);
				}
				for(i=0;i<msg.acc.data.length;i++){
					ay.push(msg.acc.data[i][1]);
					
				}
				for(i=0;i<msg.acc.data.length;i++){
					az.push(msg.acc.data[i][2]);
					
				}

				for(i=0;i<msg.ori.data.length;i++){
					ox.push(msg.ori.data[i][0]);
					ot.push(msg.ori.timestamps[i]);
				}
				for(i=0;i<msg.ori.data.length;i++){
					oy.push(msg.ori.data[i][1]);
					
				}
				for(i=0;i<msg.ori.data.length;i++){
					oz.push(msg.ori.data[i][2]);
					
				}
				for(i=0;i<msg.ori.data.length;i++){
					ow.push(msg.ori.data[i][3]);
					
				}
				//Plotly.newPlot('emg0', {x:emgts,y:emg0, type: 'scatter'});
				var emg_plot_0 = document.getElementById('emg0');
				Plotly.newPlot( emg_plot_0, [{
    				x: emgts,
    				y: emg0 }], { 
    				margin: { t: 0 } } );

				var emg_plot_1 = document.getElementById('emg1');
				Plotly.newPlot( emg_plot_1, [{
    				x: emgts,
    				y: emg1 }], { 
    				margin: { t: 0 } } );

				var emg_plot_2 = document.getElementById('emg2');
				Plotly.newPlot( emg_plot_2, [{
    				x: emgts,
    				y: emg2 }], { 
    				margin: { t: 0 } } );

				var emg_plot_3 = document.getElementById('emg3');
				Plotly.newPlot( emg_plot_3, [{
    				x: emgts,
    				y: emg3 }], { 
    				margin: { t: 0 } } );

				var emg_plot_4 = document.getElementById('emg4');
				Plotly.newPlot( emg_plot_4, [{
    				x: emgts,
    				y: emg4 }], { 
    				margin: { t: 0 } } );

				var emg_plot_5 = document.getElementById('emg5');
				Plotly.newPlot( emg_plot_5, [{
    				x: emgts,
    				y: emg5 }], { 
    				margin: { t: 0 } } );

				var emg_plot_6 = document.getElementById('emg6');
				Plotly.newPlot( emg_plot_6, [{
    				x: emgts,
    				y: emg6 }], { 
    				margin: { t: 0 } } );

				var emg_plot_7 = document.getElementById('emg7');
				Plotly.newPlot( emg_plot_7, [{
    				x: emgts,
    				y: emg7 }], { 
    				margin: { t: 0 } } );

				var gyr_plot_x = document.getElementById('gx');
				Plotly.newPlot( gyr_plot_x, [{
    				x: gt,
    				y: gx }], { 
    				margin: { t: 0 } } );
				var gyr_plot_y = document.getElementById('gy');
				Plotly.newPlot( gyr_plot_y, [{
    				x: gt,
    				y: gy }], { 
    				margin: { t: 0 } } );
				var gyr_plot_z = document.getElementById('gz');
				Plotly.newPlot( gyr_plot_z, [{
    				x: gt,
    				y: gz }], { 
    				margin: { t: 0 } } );

				var acc_plot_x = document.getElementById('ax');
				Plotly.newPlot( acc_plot_x, [{
    				x: at,
    				y: ax }], { 
    				margin: { t: 0 } } );
				var acc_plot_y = document.getElementById('ay');
				Plotly.newPlot( acc_plot_y, [{
    				x: at,
    				y: ay }], { 
    				margin: { t: 0 } } );
				var acc_plot_z = document.getElementById('az');
				Plotly.newPlot( acc_plot_z, [{
    				x: at,
    				y: az }], { 
    				margin: { t: 0 } } );

				var ori_plot_x = document.getElementById('ox');
				Plotly.newPlot( ori_plot_x, [{
    				x: ot,
    				y: ox }], { 
    				margin: { t: 0 } } );

				var ori_plot_y = document.getElementById('oy');
				Plotly.newPlot( ori_plot_y, [{
    				x: ot,
    				y: oy }], { 
    				margin: { t: 0 } } );

				var ori_plot_z = document.getElementById('oz');
				Plotly.newPlot( ori_plot_z, [{
    				x: ot,
    				y: oz }], { 
    				margin: { t: 0 } } );

				var ori_plot_w = document.getElementById('ow');
				Plotly.newPlot( ori_plot_w, [{
    				x: ot,
    				y: ow }], { 
    				margin: { t: 0 } } );

				//Plotly.newPlot('emg1', {x:emgts,y:emg1, type: 'scatter'});

				removeLoader("spnLoader");
				showToast("Success", "Successfully loaded data.",'#0D638F');
				
			}else{
				removeLoader("spnLoader");
				showToast("Failure", "Unable to load data. Please try after some time.",'#ff2e2e');
				
			}
			
		}).error(function(msg) {
			removeLoader("spnLoader")
			showToast("Error", "Some error occured while loading data. Please try again later.",'#ff2e2e');
		});
}

$( "#source" )
  .change(function () {
    var str = "";
    $( "select option:selected" ).each(function() {
      str += $( this ).text();
      loadData(str);
    });
    //
    // /console.log(str);
  })
  .change();

$( "#btnUndo" ).on( "click", function() {
		showLoader("spnLoader");
		loadExperiments();
		showToast("Reload", "Reloaded experiments successfully. You can select new experiments to visualise.",'#0D638F');
		
});

function clearPlots(){
	var emg_plot_0 = document.getElementById('emg0');
				Plotly.plot( emg_plot_0, [{
    				x: [],
    				y: [] }], { 
    				margin: { t: 0 } } );

				var emg_plot_1 = document.getElementById('emg1');
				Plotly.plot( emg_plot_1, [{
    				x: [],
    				y: [] }], { 
    				margin: { t: 0 } } );

				var emg_plot_2 = document.getElementById('emg2');
				Plotly.plot( emg_plot_2, [{
    				x: [],
    				y: [] }], { 
    				margin: { t: 0 } } );

				var emg_plot_3 = document.getElementById('emg3');
				Plotly.plot( emg_plot_3, [{
    				x: [],
    				y: [] }], { 
    				margin: { t: 0 } } );

				var emg_plot_4 = document.getElementById('emg4');
				Plotly.plot( emg_plot_4, [{
    				x: [],
    				y: [] }], { 
    				margin: { t: 0 } } );

				var emg_plot_5 = document.getElementById('emg5');
				Plotly.plot( emg_plot_5, [{
    				x: [],
    				y: [] }], { 
    				margin: { t: 0 } } );

				var emg_plot_6 = document.getElementById('emg6');
				Plotly.plot( emg_plot_6, [{
    				x: [],
    				y: [] }], { 
    				margin: { t: 0 } } );

				var emg_plot_7 = document.getElementById('emg7');
				Plotly.plot( emg_plot_7, [{
    				x: [],
    				y: [] }], { 
    				margin: { t: 0 } } );

				var gyr_plot_x = document.getElementById('gx');
				Plotly.plot( gyr_plot_x, [{
    				x: [],
    				y: [] }], { 
    				margin: { t: 0 } } );
				var gyr_plot_y = document.getElementById('gy');
				Plotly.plot( gyr_plot_y, [{
    				x: [],
    				y: [] }], { 
    				margin: { t: 0 } } );
				var gyr_plot_z = document.getElementById('gz');
				Plotly.plot( gyr_plot_z, [{
    				x: [],
    				y: [] }], { 
    				margin: { t: 0 } } );

				var acc_plot_x = document.getElementById('ax');
				Plotly.plot( acc_plot_x, [{
    				x: [],
    				y: [] }], { 
    				margin: { t: 0 } } );
				var acc_plot_y = document.getElementById('ay');
				Plotly.plot( acc_plot_y, [{
    				x: [],
    				y: [] }], { 
    				margin: { t: 0 } } );
				var acc_plot_z = document.getElementById('az');
				Plotly.plot( acc_plot_z, [{
    				x: [],
    				y: [] }], { 
    				margin: { t: 0 } } );

				var ori_plot_x = document.getElementById('ox');
				Plotly.plot( ori_plot_x, [{
    				x: [],
    				y: [] }], { 
    				margin: { t: 0 } } );

				var ori_plot_y = document.getElementById('oy');
				Plotly.plot( ori_plot_y, [{
    				x: [],
    				y: [] }], { 
    				margin: { t: 0 } } );

				var ori_plot_z = document.getElementById('oz');
				Plotly.plot( ori_plot_z, [{
    				x: [],
    				y: [] }], { 
    				margin: { t: 0 } } );

				var ori_plot_w = document.getElementById('ow');
				Plotly.plot( ori_plot_w, [{
    				x: [],
    				y: [] }], { 
    				margin: { t: 0 } } );
}