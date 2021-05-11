({
	getImagesForLatestSurvey : function(component,event,helper) {
		var assetId = component.get('v.recordId');
        var action = component.get('c.getSurveyImages');
        action.setParams({"assetId": assetId});
        
        action.setCallback(this, function(response){
            /*<response.getState()> returns response status as SUCCESS/ERROR/INCOMPLETE etc.*/
            var state = response.getState();
            if (state === "SUCCESS"){
                console.log("The Wrapper: ", response.getReturnValue());
                var imgList = response.getReturnValue().contVersionList;
                var surName = response.getReturnValue().surveyName;
                var surveyId = response.getReturnValue().surveyId;
                var siteName = response.getReturnValue().siteName;
                var blockName = response.getReturnValue().blockName;
                var locationName = response.getReturnValue().locationName;
                var assetName = response.getReturnValue().assetName;
                var recordTypeName = response.getReturnValue().recordTypeName;               
                var prefixURL = response.getReturnValue().fileURL;
                //console.log("The parsed wrapper: ", imgList);
                if(imgList.length == 0 || imgList === undefined){
                   console.log('Image List is Empty');
                } else {
                     console.log("=====ImageList="+imgList);
                    var uploadDate = response.getReturnValue().contVersionList[0].CreatedDate;
                    console.log("==upload date=",uploadDate);
                    component.set("v.isImageExist",true);
                    component.set("v.contents",imgList);
                    component.set("v.surveyName",surName);
                    component.set("v.siteName",siteName);
                    component.set("v.blockName",blockName);
                    component.set("v.locationName",locationName);
                    component.set("v.assetName",assetName);
                    component.set("v.uploadDate",uploadDate);
                    component.set("v.recordType",recordTypeName);
                    component.set("v.surveyId",surveyId);
                    component.set("v.prefixURL",prefixURL);
                    if(recordTypeName == 'Site'){
                     component.set("v.showSiteSection",true);   
                    } else if(recordTypeName == 'Block'){
                     component.set("v.showBlockSection",true);   
                    } else if(recordTypeName == 'Location'){
                     component.set("v.showLocationSection",true);   
                    } else if(recordTypeName == 'Asset'){
                     component.set("v.showAssetSection",true);   
                    }
                }
            }
        });        
        $A.enqueueAction(action);
    }
})