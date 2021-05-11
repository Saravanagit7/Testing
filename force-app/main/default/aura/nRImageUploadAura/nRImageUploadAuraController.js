({
    handleUploadFinished: function (component, event) {
        // Visibility update.
        var action = component.get("c.updateFileVisibilityToAll");
        action.setParams({"parentSurveyId": component.get("v.recordId")});
        
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS"){
                console.log('Visibility update for all uploaded images for record id '+component.get("v.recordId"));
                $A.get('e.force:refreshView').fire();
            }
        });        
        $A.enqueueAction(action);
        
        // Get the list of uploaded files
        var uploadedFiles = event.getParam("files");
        // Get the list of uploaded files
        let uploadedFileNames = '';
        for(let i = 0; i < uploadedFiles.length; i++) {
            uploadedFileNames += uploadedFiles[i].name + ', ';
        }
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "title": "SUCCESS!",
            "message": uploadedFiles.length + ' Survey Image(s) uploaded Successfully: ' + uploadedFileNames,
            "type":"Success"
        });
        toastEvent.fire();        
    }
})