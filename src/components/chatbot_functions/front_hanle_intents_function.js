exports.front_handle_intents = function(res){
    var handle_params=require("./front_handle_params.js")
    var initial_params_fun=require("./initialize_parameters.js")
    var delete_messages=false
    var next_event=null;
    var final_params=null
    var redirect_window=null;
    
    if (res.data.intent.displayName === 'FAQ 1 Intent - yes' || res.data.intent.displayName ==='Landlord Intent - add - yes'){
        redirect_window="/add";
        //window.location = "/add";
    }
    if (res.data.intent.displayName === 'FAQ 2 Intent - yes'){
        redirect_window="/results";
        let filterboxInfo = {
            location: "Location"
        };
        localStorage.setItem("filters", JSON.stringify(filterboxInfo));
        //window.location = "/results";
    }
    if (res.data.intent.displayName === 'FAQ more - yes' || res.data.intent.displayName === 'FAQ 5 Intent - yes'){
        redirect_window="/#contact";
        //window.location = "/#contact";
    }
    if (res.data.intent.displayName === 'FAQ 2 Intent - no thanks'){
        next_event='end_intent'
    }
    if (res.data.intent.displayName === 'End Intent'){
        console.log("END INTENT")
        //delete_messages=true;
    }
    //Search Intents
    if (res.data.intent.displayName === 'More Filters Intent'){
        //TODO!!
    }
    if (res.data.intent.displayName === 'Rentee Intent - got housetype - saletype - location - price - sqm - yes' || res.data.intent.displayName ==='More Filters Intent - yes'){

        var index=4
        if (res.data.intent.displayName ==='More Filters Intent - yes'){
            index=0;
        }
        let initial_params=initial_params_fun.initialize_parameters()

        handle_params.handle_params(res, initial_params, index)
        final_params=handle_params.final_params
        next_event=handle_params.next_event      

    }

    module.exports.final_params=final_params
    module.exports.next_event=next_event
    module.exports.delete_messages=delete_messages
    module.exports.redirect_window=redirect_window
} 