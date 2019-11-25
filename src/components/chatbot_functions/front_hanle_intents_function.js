exports.front_handle_intents = function(res){
    var handle_params=require("./front_handle_params.js")
    var initial_params_fun=require("./initialize_parameters.js")
    var delete_messages=false
    var next_event=null;
    var final_params=null

    if (res.data.intent.displayName === 'FAQ 1 Intent - yes' || res.data.intent.displayName ==='Landlord Intent - add'){
        window.location = "/add";
    }
    if (res.data.intent.displayName === 'FAQ 2 Intent - yes'){
        window.location = "/results";
    }
    if (res.data.intent.displayName === 'FAQ more - yes' || res.data.intent.displayName === 'FAQ 5 Intent - yes'){
        window.location = "/#contact";
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
    if (res.data.intent.displayName === 'Renter Intent - got housetype - saletype - location - price - sqm'){

        let initial_params=initial_params_fun.initialize_parameters()

        handle_params.handle_params(res, initial_params)
        final_params=handle_params.final_params
        module.exports.final_params=final_params
        console.log("DONE")        

    }
    module.exports.next_event=next_event
    module.exports.delete_messages=delete_messages
} 