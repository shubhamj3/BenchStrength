import React, { useEffect, useState, useMemo } from "react";
import { Typography } from "@mui/material";
import Typewriter from "typewriter-effect";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
// import './Dashboard.scss';
import "./Dashboard.css";
import Wave from "react-wavify";

// const divStyle = {
//   // width: "100%",
//   // display: "inline-block",
//   // position: "relative",
//   // left: "50%",
//   // transform: "translateX(-50%)",
//   display: "flex-shrink:1", 
//   position: "relative",
//   height:"auto",
//   bottom:"0px"

// };

// const wavePos1 = {
//   position: "absolute",
//   bottom: "100px",
//   width: "100%",
// };

// const wavePos2 = {
//   position: "absolute",
//   bottom: "70px",
//   width: "100%",
// };

// const wavePos3 = {
//   position: "absolute",
//   bottom: "60px",
//   width: "100%",
// };

// const wavePos4 = {
//   position: "absolute",
//   bottom: "60px",
//   width: "100%",
// };

// const wavePos5 = {
//   position: "absolute",
//   bottom: "50px",
//   width: "100%",
// };

// const wavePos6 = {
//   position: "absolute",
//   bottom: "20px",
//   width: "100%",
// };
// const wavePos7 = {
//   position: "absolute",
//   bottom: "10px",
//   width: "100%",
// };

// const wavePos8 = {
//   position: "absolute",
//   bottom: "0px",
//   width: "100%",
// };

var pauseStatus = false;

function Dashboard() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    debugger
    console.log(data);
    const formData = new FormData();
    formData.append("file", data.file[0]);
    console.log(formData);
    await fetch(`http://localhost:8080/api/csv/upload`, {
      mode: "cors",
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((success) => {
        // if (success.status >= 200 && success.status <= 299){
        if (success.message == 1) {
          Swal.fire(
            "File Uploaded.",
            "Check bench strength to see the list",
            "success"
          );
        }
        //    console.log(success);
        else {
          {
            Swal.fire(
              ".CSV file format is incorrect!",
              "Please upload a valid formatted .csv file.",
              "error"
            );
          }
        }
      })

      .catch((error) => {
        if (error) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Server is not connected!",
            footer: '<a href="">Contact the admin to know more.</a>',
          });
        }
      });
  };

  return (
    <div className="col-md-4 offset-md-4" data-testid="div-id">
      <Typography
        variant="h2"
        component="div"
        style={{ marginTop: 20 }}
        gutterBottom
      >
        <strong>Welcome to Bench Management Portal. </strong>
      </Typography>

      <div
        style={{ marginBottom: 20 }}
        className="typewritereff"
        data-testid="typewritereff"
      >
        <Typewriter
          onInit={(typewriter) => {
            typewriter

              .typeString("Upload a .CSV file to get started!")

              .pauseFor(1000)
              .deleteAll()
              .typeString("Upload a .CSV file to get started!")
              .start();
          }}
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <input {...register} type="file" name="csv"/> */}
        {/* <input {...register ('csv')} /> */}
        <input
          {...register("file")}
          data-testid="uploadfile"
          className="uploadfile"
          type="file"
        />
        {/* <div class="button-container"> */}
        <button data-testid="btn" className="btn">
          Upload!
        </button>
        {/* </div> */}
        {/* <Button color="secondary">Submit</Button> */}
      </form>

      {/* <img src="/benchtracker.png" width="900px" height="250px"/> */}
      {/* <img data-testid="brillioimage" className="brillioimage" src="/benchtracker.png" style = {{ width : 940, height : 230, marginTop : 20}}/>  */}


        <img
      className="footerclass"
      src="/footer.png"
      />

     
      

      <img
        data-testid="brillioimage"
        className="brillioimage"
        src="/benchtracker.png"
      />



      {/* <div className="svgwavebottom">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ff5500" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </div> */}




      {/* <div style={divStyle}>

          <div style={wavePos1}>
            <Wave
              fill="#d4c3f6"
              paused={pauseStatus}
              options={{
                height: 15,
                amplitude: 5,
                speed: 0.5,
                points: 4
              }}
            />
          </div>
          <div style={wavePos2}>
            <Wave
              fill="#3c00b2"
              paused={pauseStatus}
              options={{
                height: 1,
                amplitude: 5,
                speed: 0.3,
                points: 5
              }}
            />
          </div>
          <div style={wavePos3}>
            <Wave
              fill="#FFF"
              paused={pauseStatus}
              options={{
                height: 10,
                amplitude: 10,
                speed: 0.3,
                points: 3
              }}
            />
          </div>
       
          <div style={wavePos4}>
            <Wave
              fill="#8c52ff"
              paused={pauseStatus}
              options={{
                height: 30,
                amplitude: 10,
                speed: 0.3,
                points: 4
              }}
            />
          </div>   
 

          </div>
 */}






      {/* <div >
             <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 246" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stop-color="#002bdc88"></stop><stop offset="95%" stop-color="#32ded488"></stop></linearGradient></defs><path d="M 0,600 C 0,600 0,200 0,200 C 79.19617224880383,167.39712918660288 158.39234449760767,134.79425837320576 254,125 C 349.60765550239233,115.20574162679425 461.62679425837325,128.22009569377988 568,168 C 674.3732057416267,207.77990430622012 775.1004784688994,274.32535885167465 868,266 C 960.8995215311006,257.67464114832535 1045.9712918660287,174.47846889952154 1140,151 C 1234.0287081339713,127.52153110047847 1337.0143540669856,163.76076555023923 1440,200 C 1440,200 1440,600 1440,600 Z" stroke="none" stroke-width="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150 path-0"></path><defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stop-color="#002bdcff"></stop><stop offset="95%" stop-color="#32ded4ff"></stop></linearGradient></defs><path d="M 0,600 C 0,600 0,400 0,400 C 111.4354066985646,397.8086124401914 222.8708133971292,395.61722488038276 323,379 C 423.1291866028708,362.38277511961724 511.9521531100478,331.33971291866027 588,328 C 664.0478468899522,324.66028708133973 727.3205741626796,349.02392344497616 835,354 C 942.6794258373204,358.97607655502384 1094.7655502392345,344.56459330143537 1203,349 C 1311.2344497607655,353.43540669856463 1375.6172248803828,376.7177033492823 1440,400 C 1440,400 1440,600 1440,600 Z" stroke="none" stroke-width="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150 path-1"></path></svg>
          </div> */}
    </div>
  );
}

export default Dashboard;
