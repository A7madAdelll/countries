import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './navbar';
import Country from './country';
class App extends Component{

    state={
    allcountries:[],
    filteredcountries:[],
    DarkMode:0,
    }
    makeitdark=()=>{
        this.setState({DarkMode:1-this.state.DarkMode})
        console.log(this.state.DarkMode);
        if(this.state.DarkMode==1){
            document.body.style = 'background: white;';
        }
        else{
            document.body.style = 'background: black;';
        }
    }
    async componentDidMount(){
    let {data} = await axios.get("https://restcountries.com/v3.1/all")
    console.log(data);
    this.setState({allcountries:data})
    this.setState({filteredcountries:data})
    
    }
    render(){
return(<> <Navbar makeitdark={this.makeitdark} DarkMode={this.state.DarkMode}/>  
<div className='gridcontainer'>
<div className='maingrid'>
{this.state.filteredcountries.map((c)=>{
return <Country data={c} DarkMode={this.state.DarkMode}/>
})}

</div>
</div>
</>

)
    }



}
export default App;