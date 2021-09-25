import React, {Component} from "react"
import EmplDetail from "./emplDetails"
import emplData from "./employees"

class App extends Component{
  constructor(){
    super()
    this.state={
      empl: emplData
    }
  }

  render(){
    const emplId = this.state.empl.map(detail => 
    <EmplDetail 
    key={detail.employeeCode}
    detail={detail}
    />)

    return(
      <div>
        {emplId}
      </div>
    )
  }
}
export default App;