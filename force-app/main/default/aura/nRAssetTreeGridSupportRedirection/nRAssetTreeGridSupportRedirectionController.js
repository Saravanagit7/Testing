({
	doInit : function(component, event, helper) {
		if ( window.location !== window.parent.location ) {
var appEvent = $A.get("e.c:nRRedirectionApplicationEvent");
appEvent.fire();                
        console.log('Init method after firing');
        }
	},
    doneRendering :function(component, event, helper) {
		
 var appEvent = $A.get("e.c:nRRedirectionApplicationEvent");
appEvent.fire();  
        console.log(' donerendering after firing');
        
             //var cmpTarget = component.find('cHeaderPanel');
        	//$A.util.addClass(cmpTarget, 'changeMe');
        
	}
})