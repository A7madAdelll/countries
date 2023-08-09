import "./styles/navbar.css"
const Navbar = (props) => {
    let bg="#ffffff";
    let textcolor="black"
    if(props.DarkMode==1){
        bg ="#223646 "
        textcolor="white"
    }
    else{
        bg="#cadff0";
        textcolor="black"
    }
    return (

    <nav className="navigation" style={{backgroundColor: bg  }}>
    <div  style={{color:textcolor,textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center"}}>
    <div  id="where">where in the world?</div>
    </div>
    <button style={{color:textcolor}}  onClick={ props.makeitdark}>Dark Mode</button>
    </nav> 
    
    );
}
 
export default Navbar;