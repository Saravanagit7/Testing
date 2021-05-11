({
    doInit : function(component, event, helper) {
        var latitudeValue = component.get('v.simpleRecord.NR_Asset_Geolocation__Latitude__s');
        var longitudeValue = component.get('v.simpleRecord.NR_Asset_Geolocation__Longitude__s');
        if(latitudeValue == null || latitudeValue==''){
            console.log('Latitude Value :',latitudeValue);
            latitudeValue = '51.50866631962264';
        }
        if(longitudeValue == null || longitudeValue ==''){
            console.log('Longitude  Value :',longitudeValue);
            longitudeValue = '-0.12579602871041906';
        }
        component.set('v.zoomLevel', 16);
        component.set('v.mapMarkers',[
            {
                location: {
                    Latitude: latitudeValue,
                    Longitude: longitudeValue
                }
            }
        ]);
    }
})