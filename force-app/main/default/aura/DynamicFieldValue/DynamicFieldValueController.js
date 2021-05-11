({
    doInit : function(component, event, helper) {
        var fieldName = component.get('v.fieldName');
        var record = component.get('v.record');
        if(record !=undefined){
            component.set('v.fieldValue', component.getReference('v.record.'+fieldName));
            var staticLabel = $A.get("$Label.c.Thumbnail_Image_Url_Field");
            if(component.get('v.isImage') && fieldName ==staticLabel){
                component.set('v.isImage',true);
            }
            else{
                component.set('v.isImage',false);
            }
            if(!record.hasOwnProperty(fieldName)){
                component.set('v.isImage',false);                
            }
        }
    }
})