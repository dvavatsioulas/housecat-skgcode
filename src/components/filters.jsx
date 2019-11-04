import React, { Component } from 'react';

class Filters extends Component {
    state = {  }
    render() {
        return(
        <React.Fragment>
        <div id="filtersTitle"> FiLteRs </div>
        <div className="filters">
            <input type="checkbox" /> Parking place
            <br/>
            <input type="checkbox" /> A/C
            <br/>
            <input type="checkbox" /> Central Heating 
            <br/>
            <input type="checkbox" /> Garden
            <br/>
            <br/>
        </div>
        </React.Fragment>
        )
    }
}
 
export default Filters;