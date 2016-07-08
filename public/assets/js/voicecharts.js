/* Webarch Admin Dashboard 
/* This JS is Only DEMO Purposes 
-----------------------------------------------------------------*/	
var playing = 0;
var loader = '<img src="images/loading.gif" style="height: 50px;">';

$(document).ready(function() {		

	
});

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

$( "#btnPlay" ).on( "click", function() {
	if(playing == 0){
		playing = 1;
		recordArm();
		showToast("Record", "Started recording data. You can pause data capture anytime by clicking the pause button and resume again by clicking Play.",'#0D638F');
		$( this ).css( "color", "green" );
		$( "#btnPause").css( "color", "" );
	}
  	
});

$( "#btnPause" ).on( "click", function() {
	if(playing == 1){
		playing = 0;
		showToast("Pause", "Paused data capture. You can play again to resume data capture.",'#0D638F');
		$( this ).css( "color", "green" );
		$( "#btnPlay").css( "color", "" );
	}
  	
});

$( "#btnUndo" ).on( "click", function() {
		playing = 0;
		showToast("Undo", "Cleared Data from buffer. You can start recording again by clicking play.",'#0D638F');
		$( "#btnPause").css( "color", "" );
		$( "#btnPlay" ).css( "color", "" );
		clearBufferdata();
});

$( "#btnSave" ).on( "click", function() {
	showLoader("spnLoader");
	var expname = $( "#txtExpName").val();
	if(playing == 1){
		removeLoader("spnLoader")
		showToast("Warning", "Please stop recording before saving your data.",'#FF2E2E');
	}else if(expname == null || expname == ""){
		removeLoader("spnLoader")
		showToast("Warning", "Please provide an Experiment Name.",'#FF2E2E');
	}else if(emgArr.length == 0){
		removeLoader("spnLoader")
		showToast("Warning", "Please record some data before saving your experiment.",'#FF2E2E');
	}else{
		serielizeBufferData(expname);
		uploadBufferData();
	}

});

function showLoader(loaderid){
	$("#"+loaderid).html(loader);
}

function removeLoader(loaderid){
	$("#"+loaderid).html("");
}
