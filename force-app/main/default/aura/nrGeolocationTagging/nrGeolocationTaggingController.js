({
    doInit : function(component, event, helper) {
        navigator.geolocation.getCurrentPosition(function(e) {
            console.log(e.coords.latitude + ', ' + e.coords.longitude);
            var latit = e.coords.latitude;
            var longit = e.coords.longitude;
            component.set("v.latitude",latit);
            component.set("v.longitude",longit);
            
        }, function() {
            console.log('There was an error.');
        });
    }
})