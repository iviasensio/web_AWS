/*
 * Helpdesk through Qlik Cloud Demo Mashup
 * @qlik
 *
*/
var config = {
    host: 'ivanenterprise.eu.qlikcloud.com', //for example, 'abc.us.example.com'
    prefix: '/',
    port: 443,
    isSecure: true,
    webIntegrationId: '5c851ac744024932bd44b2b7e6db3ba4'
};
require.config( {
    baseUrl: ( config.isSecure ? "https://" : "http://" ) + config.host + (config.port ? ":" + config.port : "") + config.prefix + "resources",
    webIntegrationId: config.webIntegrationId
} );	

require(["js/qlik"], function (qlik) {
	qlik.on( "error", function ( error ) {
		$( '#popupText' ).append( error.message + "<br>" );
		$( '#popup' ).fadeIn( 1000 );
	} );
	$( "#closePopup" ).click( function () {
		$( '#popup' ).hide();
	} );
    //open apps -- inserted here --
    var app = qlik.openApp( 'dd7ad909-2b50-4ae9-8578-fcc46855c936', config ); //Replace 'AppId' with the actual helpdesk app ID 
    //get objects -- inserted here --
    app.visualization.get('uETyGUP').then(function(vis){
	    vis.show("QV01");	
	} );
	app.visualization.get('xfvKMP').then(function(vis){
	    vis.show("QV02");	
	} );
	app.visualization.get('rJFbvG').then(function(vis){
	    vis.show("QV03");	
	} );
	app.visualization.get('PAppmU').then(function(vis){
	    vis.show("QV04");	
	} );
	app.visualization.get('ca4463f1-31fc-4eed-98a7-5e770b8387f3').then(function(vis){
	    vis.show("QV05");	
	} );
	app.visualization.get('ff551649-420e-428d-bede-38accf80dce8').then(function(vis){
	    vis.show("QV06");	
	} );

	//function to pre-select fields
	function getCaseOwner(callback) {
	    // call some backend functionality and call the “callback” function when ready
	    callback("Thomas R. Allman");
	}

	//call getCaseOwner with callback function
	getCaseOwner(function(caseOwner) {
	    app.field("Case Owner").selectMatch(caseOwner)
	    .then(function() {
	        //get objects -- inserted here --                                                 
	        app.visualization.get('uETyGUP').then(function(vis){
	            vis.show("QV01");	
	        } );
	        app.visualization.get('xfvKMP').then(function(vis){
	            vis.show("QV02");	
	        } );
	        app.visualization.get('rJFbvG').then(function(vis){
	            vis.show("QV03");	
	        } );
	        app.visualization.get('PAppmU').then(function(vis){
	            vis.show("QV04");	
	        } );
	        app.visualization.get('ca4463f1-31fc-4eed-98a7-5e770b8387f3').then(function(vis){
	            vis.show("QV05");	
	        } );
	        app.visualization.get('ff551649-420e-428d-bede-38accf80dce8').then(function(vis){
	            vis.show("QV06");	
	        } );
	    })
	})
});
