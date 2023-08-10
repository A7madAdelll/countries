import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './navbar';
import Country from './country';
class App extends Component{

    state={
    allcountries:[],
    filteredcountries:[],
    DarkMode:0,
    query: "",
    contenent:"All",
    bg : "#ffffff",
    textcolor : "black",
    }

    changecolores=()=>{
if(this.state.DarkMode==1){
this.setState({bg:"#ffffff"})
this.setState({textcolor:"black"})
}
else{
    this.setState({bg:"#223646"})
this.setState({textcolor:"white"})
}


    }

    handleq=(e)=>{
            this.setState({query:e.target.value})    
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
        this.changecolores();
    }
    async componentDidMount(){
    let {data} = await axios.get("https://restcountries.com/v3.1/all")
    console.log(data);
    this.setState({allcountries:data})
    this.setState({filteredcountries:data})
    
    }
    render(){
return(<>
<Navbar makeitdark={this.makeitdark} DarkMode={this.state.DarkMode}/>  
<br />

<div className='mainstream'>
<div className='gridcontainer'>


<div style={{display:'flex',justifyContent:'space-between'}}>

<input
            onChange={this.handleq}
            value={this.state.query}
            style={{ height: "70px", fontSize: 30,width:"300px" ,color:this.state.textcolor, backgroundColor:this.state.bg}}
            placeholder="enter query"

          ></input>

<select id="select1" style={{ height: "70px", fontSize: 30,width:"300px", color:this.state.textcolor, backgroundColor:this.state.bg }}   onChange={()=>{this.setState({contenent:document.getElementById("select1").value})}} >
            <option  value="All">All</option>
            <option  value="Africa">Africa</option>
            <option  value="Asia">Asia</option>
            <option  value="Europe">Europe</option>
            <option  value="Americas">Americas</option>
            <option  value="Oceania">Oceania</option>


        </select>

</div>

<br />

<div className='maingrid'>
{this.state.filteredcountries.map((c)=>{
    if(c.name.official.toLowerCase().includes(this.state.query.toLowerCase()) && (c.region==this.state.contenent || this.state.contenent=="All" )){

return <Country data={c} DarkMode={this.state.DarkMode}/>}

})}

</div>
</div>
</div>
</>

)
    }



}
export default App;