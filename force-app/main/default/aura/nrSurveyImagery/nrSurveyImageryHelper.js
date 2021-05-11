({
    getSurveyImagesHelper : function(component,event,helper) {
        var surveyId = component.get('v.recordId');
        var action = component.get('c.getSurveyImages');
        action.setParams({"surveyId": surveyId}); 
        action.setCallback(this, function(response){
            /*<response.getState()> returns response status as SUCCESS/ERROR/INCOMPLETE etc.*/
            var state = response.getState();
            if (state === "SUCCESS"){
                console.log("The Images: ", response.getReturnValue());
                var imgList = response.getReturnValue();
                var userType = component.get('v.currentUser.UserType');
                console.log('Current User: ',userType);
                if(userType == 'Standard'){
                    component.set("v.prefixURL",'/sfc/servlet.shepherd/version/download/');
                }else{
                    component.set("v.prefixURL",'/sfsites/c/sfc/servlet.shepherd/version/download/');
                }
                
                if(imgList.length == 0 || imgList === undefined){
                    console.log('Image List is Empty');
                } else {
                    console.log("=====ImageList="+imgList);                        
                    component.set("v.contents",imgList); 
                    component.set("v.contentEventId",imgList[0].Id);
                }
            }
        });
        $A.enqueueAction(action);
    },
    
    saveImageComment : function(component, event, helper){
        var evntSource = event.getSource();
        var contDescription = evntSource.get('v.name');
        var contentId = evntSource.get('v.value');
        console.log('Description1:',contDescription);
        console.log('title:',contentId);
        if(contDescription === undefined || contDescription === 'NULL' || contDescription == ''){
            var toastEvent = $A.get("e.force:showToast");
            toastEvent.setParams({
                "title": "Error!",
                "message": "Please enter Image Comment.",
                "type" : 'error'
            });
            toastEvent.fire();
        }
        else{
            console.log('method called');
            var action = component.get('c.updateContentDescription');            
            action.setParams({
                "contentId": contentId,
                "contentDescription" : contDescription
            }); 
            action.setCallback(this, function(response){
                var state = response.getState();
                console.log('State in Call back: ',state);
                if (state === "SUCCESS"){
                    console.log("The aura service return: ", response.getReturnValue());
                    var toastEvent = $A.get("e.force:showToast");
                    toastEvent.setParams({
                        "title": "Success!",
                        "message": "Image Comment updated successfully.",
                        "type" : 'success'
                    });
                    toastEvent.fire();
                }else if (state === "ERROR") {
                    var errors = action.getError();
                    if (errors) {
                        if (errors[0] && errors[0].message) {
                            console.log(errors[0].message);
                        }
                    }
                }
            });
            $A.enqueueAction(action);
        }
    }
})