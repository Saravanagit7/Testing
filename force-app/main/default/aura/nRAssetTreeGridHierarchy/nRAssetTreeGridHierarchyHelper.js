({
    formResponse : function(cmp,event,hierarchyresponse,rowName,response) {
        for(let key in hierarchyresponse){
            if(hierarchyresponse[key].name===rowName){
                if(hierarchyresponse[key].beforeexpand){
                    hierarchyresponse[key]._children = JSON.parse(response.getReturnValue());
                    hierarchyresponse[key].afterexpand=true;
                    hierarchyresponse[key].beforeexpand=false;
                }
                else{
                    hierarchyresponse[key]._children = {};
                    hierarchyresponse[key].afterexpand=false;
                    hierarchyresponse[key].beforeexpand=true;                            
                }
                break;
            }
            else if(hierarchyresponse[key]._children !=undefined && typeof hierarchyresponse[key]._children === 'object') {
                for(let key1 in hierarchyresponse[key]._children){
                    if(hierarchyresponse[key]._children[key1].name===rowName){
                        if(hierarchyresponse[key]._children[key1].beforeexpand){
                            hierarchyresponse[key]._children[key1]._children = JSON.parse(response.getReturnValue()); 
                            hierarchyresponse[key]._children[key1].afterexpand=true;
                            hierarchyresponse[key]._children[key1].beforeexpand=false;
                        }
                        else{
                            hierarchyresponse[key]._children[key1]._children = {};
                            hierarchyresponse[key]._children[key1].afterexpand=false;
                            hierarchyresponse[key]._children[key1].beforeexpand=true;                            
                        }
                        break;
                    }
                    else if(hierarchyresponse[key]._children[key1]._children !=undefined && typeof hierarchyresponse[key]._children[key1]._children ==='object'){
                        for(let key2 in hierarchyresponse[key]._children[key1]._children){
                            if(hierarchyresponse[key]._children[key1]._children[key2].name===rowName){
                                if(hierarchyresponse[key]._children[key1]._children[key2].beforeexpand){
                                    hierarchyresponse[key]._children[key1]._children[key2]._children = JSON.parse(response.getReturnValue());
                                    hierarchyresponse[key]._children[key1]._children[key2].afterexpand=true;
                                    hierarchyresponse[key]._children[key1]._children[key2].beforeexpand=false;
                                }
                                else{
                                    hierarchyresponse[key]._children[key1]._children[key2]._children = {};
                                    hierarchyresponse[key]._children[key1]._children[key2].afterexpand=false;
                                    hierarchyresponse[key]._children[key1]._children[key2].beforeexpand=true;                            
                                }
                                break;
                            }
                            else if(hierarchyresponse[key]._children[key1]._children[key2]._children !=undefined && typeof hierarchyresponse[key]._children[key1]._children[key2]._children ==='object'){
                                for(let key3 in hierarchyresponse[key]._children[key1]._children[key2]._children){
                                    if(hierarchyresponse[key]._children[key1]._children[key2]._children[key3].name===rowName){
                                        if(hierarchyresponse[key]._children[key1]._children[key2]._children[key3].beforeexpand){
                                            hierarchyresponse[key]._children[key1]._children[key2]._children[key3]._children = JSON.parse(response.getReturnValue()); 
                                            hierarchyresponse[key]._children[key1]._children[key2]._children[key3].beforeexpand=false;                                                    
                                            hierarchyresponse[key]._children[key1]._children[key2]._children[key3].afterexpand=true;
                                        }
                                        else{
                                            hierarchyresponse[key]._children[key1]._children[key2]._children[key3]._children = {}; 
                                            hierarchyresponse[key]._children[key1]._children[key2]._children[key3].beforeexpand=true;                                                    
                                            hierarchyresponse[key]._children[key1]._children[key2]._children[key3].afterexpand=false;                                                    
                                        }
                                        break;
                                    }
                                    else if(hierarchyresponse[key]._children[key1]._children[key2]._children[key3]._children !=undefined && typeof hierarchyresponse[key]._children[key1]._children[key2]._children[key3]._children ==='object'){
                                        for(let key4 in hierarchyresponse[key]._children[key1]._children[key2]._children[key3]._children){
                                            if(hierarchyresponse[key]._children[key1]._children[key2]._children[key3]._children[key4].name===rowName){
                                                if(hierarchyresponse[key]._children[key1]._children[key2]._children[key3]._children[key4].beforeexpand){
                                                    hierarchyresponse[key]._children[key1]._children[key2]._children[key3]._children[key4]._children = JSON.parse(response.getReturnValue()); 
                                                    hierarchyresponse[key]._children[key1]._children[key2]._children[key3]._children[key4].beforeexpand=false;                                                    
                                                    hierarchyresponse[key]._children[key1]._children[key2]._children[key3]._children[key4].afterexpand=true;                                                        
                                                }
                                                else{
                                                    hierarchyresponse[key]._children[key1]._children[key2]._children[key3]._children[key4]._children = {}; 
                                                    hierarchyresponse[key]._children[key1]._children[key2]._children[key3]._children[key4].beforeexpand=true;                                                    
                                                    hierarchyresponse[key]._children[key1]._children[key2]._children[key3]._children[key4].afterexpand=false;                                                    
                                                }
                                                break;
                                            }
                                            else if(hierarchyresponse[key]._children[key1]._children[key2]._children[key3]._children[key4]._children !=undefined && typeof hierarchyresponse[key]._children[key1]._children[key2]._children[key3]._children[key4]._children ==='object'){
                                                for(let key5 in hierarchyresponse[key]._children[key1]._children[key2]._children[key3]._children[key4]._children){
                                                    if(hierarchyresponse[key]._children[key1]._children[key2]._children[key3]._children[key4]._children[key5].name===rowName){
                                                        if(hierarchyresponse[key]._children[key1]._children[key2]._children[key3]._children[key4]._children[key5].beforeexpand){
                                                            hierarchyresponse[key]._children[key1]._children[key2]._children[key3]._children[key4]._children[key5]._children = JSON.parse(response.getReturnValue()); 
                                                            hierarchyresponse[key]._children[key1]._children[key2]._children[key3]._children[key4]._children[key5].beforeexpand=false;                                                    
                                                            hierarchyresponse[key]._children[key1]._children[key2]._children[key3]._children[key4]._children[key5].afterexpand=true;                                                                
                                                        }
                                                        else{
                                                            hierarchyresponse[key]._children[key1]._children[key2]._children[key3]._children[key4]._children[key5]._children = {}; 
                                                            hierarchyresponse[key]._children[key1]._children[key2]._children[key3]._children[key4]._children[key5].beforeexpand=true;                                                    
                                                            hierarchyresponse[key]._children[key1]._children[key2]._children[key3]._children[key4]._children[key5].afterexpand=false;                                                    
                                                        }
                                                        break;
                                                    }
                                                    else if(hierarchyresponse[key]._children[key1]._children[key2]._children[key3]._children[key4]._children[key5]._children !=undefined && typeof hierarchyresponse[key]._children[key1]._children[key2]._children[key3]._children[key4]._children[key5]._children ==='object'){
                                                        for(let key6 in hierarchyresponse[key]._children[key1]._children[key2]._children[key3]._children[key4]._children[key5]._children){
                                                            if(hierarchyresponse[key]._children[key1]._children[key2]._children[key3]._children[key4]._children[key5]._children[key6].name===rowName){
                                                                if(hierarchyresponse[key]._children[key1]._children[key2]._children[key3]._children[key4]._children[key5]._children[key6].beforeexpand){
                                                                    
                                                                    hierarchyresponse[key]._children[key1]._children[key2]._children[key3]._children[key4]._children[key5]._children[key6]._children = JSON.parse(response.getReturnValue()); 
                                                                    hierarchyresponse[key]._children[key1]._children[key2]._children[key3]._children[key4]._children[key5]._children[key6].beforeexpand=false;                                                    
                                                                    hierarchyresponse[key]._children[key1]._children[key2]._children[key3]._children[key4]._children[key5]._children[key6].afterexpand=true;                                                                       
                                                                }
                                                                else{
                                                                    hierarchyresponse[key]._children[key1]._children[key2]._children[key3]._children[key4]._children[key5]._children[key6]._children = {}; 
                                                                    hierarchyresponse[key]._children[key1]._children[key2]._children[key3]._children[key4]._children[key5]._children[key6].beforeexpand=true;                                                    
                                                                    hierarchyresponse[key]._children[key1]._children[key2]._children[key3]._children[key4]._children[key5]._children[key6].afterexpand=false;                                                    
                                                                } 
                                                                break;                                                                        
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        cmp.set('v.assethierarchy', hierarchyresponse);
        cmp.set('v.isLoading', false);
    }
})