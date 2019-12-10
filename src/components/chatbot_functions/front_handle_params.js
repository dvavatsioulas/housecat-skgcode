exports.handle_params = function(responses, initial_params, index){
    
    var parameters = responses.data.outputContexts[index].parameters.fields
    if (parameters.City.stringValue===""){
        initial_params.location=null
    }else{
        initial_params.location=parameters.City.stringValue
    }

    initial_params.minprice=0;    
    if (parameters.max_price.numberValue===""){
        initial_params.max_price=null
    }else{
        if (parameters.max_price.numberValue<0){
            initial_params.maxprice=-parameters.max_price.numberValue
        }else if (parameters.max_price.numberValue>=0){
            initial_params.maxprice=parameters.max_price.numberValue
        }else{
            initial_params.max_price=null
        }
    }
    if (parameters.min_sqm.numberValue===""){
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

    module.exports.final_params=initial_params
}