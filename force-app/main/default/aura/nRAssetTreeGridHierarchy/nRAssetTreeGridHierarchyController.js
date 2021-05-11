({
    doInit : function(component, event, helper) {
        
        var workspaceAPI = component.find("workspace");
        workspaceAPI.getFocusedTabInfo().then(function(response) {
            var focusedTabId = response.tabId;
            workspaceAPI.setTabLabel({
                tabId: focusedTabId,
                label: $A.get("$Label.c.Tab_Title")
            });
            workspaceAPI.setTabIcon({
                tabId: focusedTabId,
                icon: "utility:hierarchy",
                iconAlt: "Asset Tree View"
            });
        })              
        component.set("v.augmentedurl",'https://charing-x.visualiseinfo.co.uk/Charing_X/?image=1&vlon=6.20&vlat=-0.11&fov=100.0');
        var action = component.get("c.getAssetHierarchySLDS");        
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS"){
                let hierarchyresponse = JSON.parse(response.getReturnValue());
                var hierarchys = hierarchyresponse[0];
                component.set("v.assethierarchy", JSON.parse(hierarchys));                
                component.set("v.isCommunity",JSON.parse(hierarchyresponse[1]));
                var fields = JSON.parse(hierarchyresponse[2]);
                component.set("v.listOfFieldApis",JSON.parse(hierarchyresponse[2]).listOfFieldApiName);
                component.set("v.listOfFieldLabel",JSON.parse(hierarchyresponse[2]).listOfFieldLabel);
                var listOfAllfields = JSON.parse(hierarchyresponse[2]).listOfFieldApiName;
                component.set("v.thumbnailurl",listOfAllfields[0])
            }
        });        
        $A.enqueueAction(action);
    },
    redirection : function(component,event,helper){
        var selectedItem = event.currentTarget; 
        var rowName = selectedItem.dataset.record; 
        var rowLabel = selectedItem.dataset.labelled;
        var workspaceAPI = component.find("workspace");
        if(component.get('v.isCommunity')){
            var lists = component.get("v.listOfRecordDetail");
            if(lists == undefined){
                lists = [];    
            }
            if(lists.length>0){
                console.log(JSON.stringify(lists));
                let setOfTab = new Set();
                for(let key in lists){
                    setOfTab.add(lists[key].name);
                }
                if(!setOfTab.has(rowName)){
                    lists.push({label:rowLabel,name:rowName});                            
                }
            }
            else{
                lists.push({label:rowLabel,name:rowName});                                            
            }
            component.set("v.listOfRecordDetail",lists);
        }
        else{
            workspaceAPI.openTab({
                pageReference: {
                    "type": "standard__recordPage",
                    "attributes": {
                        "recordId":rowName,
                        "actionName":"view"
                    },
                    "state": {}
                },
                focus: true
            }).then(function(response) {
                workspaceAPI.getTabInfo({
                    tabId: response
                }).then(function(tabInfo) {
                });
            }).catch(function(error) {
                console.log(error);
            });                  
        }        
        $A.enqueueAction(action);              
    },
    getroute : function(cmp,event,helper){
        var selectedItem = event.currentTarget; 
        var rowName = selectedItem.dataset.record;   
        var retrieve = cmp.get('c.retrieveRoute');
        retrieve.setParams({regionId:rowName})
        retrieve.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS"){
                let hierarchyresponse = cmp.get("v.assethierarchy");
                helper.formResponse(cmp,event,hierarchyresponse,rowName,response);
            }
        });        
        $A.enqueueAction(retrieve);
    },
    getregion : function(cmp,event,helper){
        var selectedItem = event.currentTarget; 
        var rowName = selectedItem.dataset.record;   
        var retrieve = cmp.get('c.retrievechildRegion');
        retrieve.setParams({orgId:rowName})
        retrieve.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS"){
                let hierarchyresponse = cmp.get("v.assethierarchy");
                helper.formResponse(cmp,event,hierarchyresponse,rowName,response);
            }
        });        
        $A.enqueueAction(retrieve);
    }, 
    getportfolio : function(cmp,event,helper){
        var selectedItem = event.currentTarget; 
        var rowName = selectedItem.dataset.record;   
        var retrieve = cmp.get('c.retrievePortfolio');
        retrieve.setParams({routeId:rowName})
        retrieve.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS"){
                let hierarchyresponse = cmp.get("v.assethierarchy");
                helper.formResponse(cmp,event,hierarchyresponse,rowName,response);
            }
        });        
        $A.enqueueAction(retrieve);
    },
    getSites : function(cmp,event,helper){
        var selectedItem = event.currentTarget; 
        var rowName = selectedItem.dataset.record;   
        var retrieve = cmp.get('c.retrieveSite');
        retrieve.setParams({portfolioId:rowName})
        retrieve.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS"){
                let hierarchyresponse = cmp.get("v.assethierarchy");
                helper.formResponse(cmp,event,hierarchyresponse,rowName,response);
            }
        });        
        $A.enqueueAction(retrieve);
    },    
    callchild : function(cmp,event,helper){
        var selectedItem = event.currentTarget; 
        var rowName = selectedItem.dataset.record;   
        var retrieve = cmp.get('c.retrieveChildAssets');
        retrieve.setParams({parentAssetId:rowName})
        retrieve.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS"){
                let hierarchyresponse = cmp.get("v.assethierarchy");
                helper.formResponse(cmp,event,hierarchyresponse,rowName,response);
            }
        });        
        $A.enqueueAction(retrieve); 
    }
})