exports.handle_params = function(responses, initial_params, index){
    var next_event=null
    var wrong_input=false
    initial_params.minprice=null;  

    var parameters = responses.data.outputContexts[index].parameters.fields
    
    if (parameters.City.stringValue===""){
        initial_params.location=null
    }else{
        initial_params.location=parameters.City.stringValue
    }
    //Set the price
    if (parameters.max_price.stringValue===""){
        initial_params.maxprice=null
    }else{
        if (parameters.max_price.numberValue<0){
            initial_params.maxprice=-parameters.max_price.numberValue
        }else if (parameters.max_price.numberValue>=0){
            initial_params.maxprice=parameters.max_price.numberValue
        }else{
            initial_params.maxprice=null
        }
    }

    //Set The SQM
    if (parameters.min_sqm.stringValue===""){
        initial_params.min_sqm=null
    }else{
        if(parameters.min_sqm.numberValue <0 ){
            initial_params.minsqm = -parameters.min_sqm.numberValue
        }else if (parameters.min_sqm.numberValue >=0 ){
            initial_params.minsqm = parameters.min_sqm.numberValue
        }
        else{
            initial_params.min_sqm=null
        }
    }

   //Different parameteres with different intent 

   if(responses.data.intent.displayName ==='More Filters Intent - yes'){

        //Set the price
        if (parameters.max_price.stringValue===""){
            initial_params.maxprice=null
        }else{
            if (parameters.max_price.structValue.fields.amount.numberValue<0){
                initial_params.maxprice=-parameters.max_price.structValue.fields.amount.numberValue
            }else if (parameters.max_price.structValue.fields.amount.numberValue>=0){
                initial_params.maxprice=parameters.max_price.structValue.fields.amount.numberValue
            }else{
                initial_params.maxprice=null
            }
        }
    
        //Set The SQM
        if (parameters.min_sqm.stringValue===""){
            initial_params.min_sqm=null
        }else{
            if(parameters.min_sqm.structValue.fields.amount.numberValue <0 ){
                initial_params.minsqm = -parameters.min_sqm.structValue.fields.amount.numberValue
            }else if (parameters.min_sqm.structValue.fields.amount.numberValue >=0 ){
                initial_params.minsqm = parameters.min_sqm.structValue.fields.amount.numberValue
            }
            else{
                initial_params.min_sqm=null
            }
        }

        if (parameters.FullPrice.stringValue!=""){
            initial_params.minprice=parameters.FullPrice.structValue.fields.MinPrice.structValue.fields.number.numberValue
            initial_params.maxprice=parameters.FullPrice.structValue.fields.MaxPrice.structValue.fields.number.numberValue
            if (initial_params.minprice<0){initial_params.minprice=-initial_params.minprice}
            if (initial_params.maxprice<0){initial_params.maxprice=-initial_params.maxprice}
            //if (initial_params.minprice>initial_params.maxprice){wrong_input=true}
        }
        if (parameters.FullSqm.stringValue!=""){
            initial_params.minsqm=parameters.FullSqm.structValue.fields.MinSqm.structValue.fields.number.numberValue
            initial_params.maxsqm=parameters.FullSqm.structValue.fields.MaxSqm.structValue.fields.number.numberValue
            if (initial_params.minsqm<0){initial_params.minsqm=-initial_params.minsqm}
            if (initial_params.maxsqm<0){initial_params.maxsqm=-initial_params.maxsqm}
            //if (initial_params.minsqm>initial_params.maxsqm){wrong_input=true}
        }
        
    }

    if(parameters.HouseType.stringValue==="a house"){
        initial_params.property_type="House"
    }else if (parameters.HouseType.stringValue===""){
        initial_params.property_type=null
    }else{
        initial_params.property_type="Apartment"
    }

    if(parameters.SaleType.stringValue==="rent"){
        initial_params.sale_type="Rent"
    }else if (parameters.SaleType.stringValue===""){
        initial_params.sale_type=null
    }else{
        initial_params.sale_type="Sale"
    }
    if (wrong_input===true){
        initial_params=null
        next_event='wrong_input'
    }
    module.exports.next_event=next_event
    module.exports.final_params=initial_params
}