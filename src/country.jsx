const Country = (props) => {
  let bg = "#ffffff";
  let textcolor = "black";
  if (props.DarkMode == 1) {
    bg = "#223646 ";
    textcolor = "white";
  } else {
    bg = "#ffffff";
    textcolor = "black";
  }

  return (
    <div
      className="countryInthegrid"
      style={{ border: `${textcolor} solid 1px`, backgroundColor:bg}}
    >
      <img
        src={(require = props.data.flags.png)}
        alt=""
        style={{ width: "300px", height: "150px" }}
      />

      <div
        style={{
          fontSize: "25px",
          fontWeight: "bolder",
          width: "100%",
          border: `${textcolor} solid 1px`,
          color: textcolor,
          height: "76px",
          
        }}
      >
        {props.data.name.official}
      </div>


        <div
          style={{
            display: "flex",
            flexDirection: "row",
            
            fontSize: "20px",
            width: "100%",
            border: `${textcolor} solid 1px`,
            color: textcolor,
          }}
        >
          <div style={{ fontWeight: "bolder" }}> Population: </div>{" "}
          <span>{props.data.population}</span>
        </div>


        <div
          style={{
            display: "flex",
            flexDirection: "row",
            fontSize: "20px",
            width: "100%",
            border: `${textcolor} solid 1px`,
            color: textcolor,
          }}
        >
          <div style={{ fontWeight: "bolder" }}> Region: </div>{" "}
          <span>{props.data.region}</span>
        </div>



        <div
          style={{
            display: "flex",
            flexDirection: "row",
            fontSize: "20px",
            width: "100%",
            border: `${textcolor} solid 1px`,
            color: textcolor,
          }}
        >
          <div style={{ fontWeight: "bolder" }}> Capital: </div>{" "}
          <span>{props.data.capital}</span>
        </div>


    </div>
  );
};

export default Country;
