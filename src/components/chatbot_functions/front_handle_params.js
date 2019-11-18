exports.handle_params = function(responses, initial_params){
    
    var parameters = responses.data.outputContexts[0].parameters.fields
    
    initial_params.location=parameters.City.stringValue
    
    if(parameters.HouseType.stringValue==="a house"){
        initial_params.property_type=1
    }else{
        initial_params.property_type=0
    }

    if(parameters.SaleType.stringValue==="rent"){
        initial_params.sale_type=0
    }else{
        initial_params.sale_type=1
    }
    console.log(JSON.stringify(initial_params))

    module.exports.final_params=initial_params
}