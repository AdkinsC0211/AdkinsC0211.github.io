             
var nameSelfWebring = "DogSama";
var relationshipSelfWebring = "is being pursued by";
var charnameSelfWebring = "E-100 Alpha (ZERO)";
var seriesSelfWebring = "Sonic Adventure";
var imgurlSelfWebring = "https://dog-sama.neocities.org/images/ZERO.png";

var templateWebring = document.createElement("selfinsertwebring");
 templateWebring.innerHTML = "<style> #templateWebring a {color: #BF3C8E; font-weight:bold} #templateWebring a:hover{font-weight:bold; color:#A43379}  #templateWebring {width:300px !important; text-align:center !important; height:164px !important; border:2px solid #DD28A7 !important; margin: auto !important; background-image:url('https://webring.koinuko.pink/img/bg.png'); background-size:cover} #webringiconbox {border:2px solid #DD28A7 !important; position:relative !important; overflow:hidden !important;   height:100px !important; width:100px !important; left:8px !important; padding:0px !important; margin:0px !important; margin-top:8px !important; box-sizing:content-box !important; max-width:100% !important; justify-content:start !important; display:block !important; clear:none !important } #iconWebring {width:100px !important; overflow:hidden !important; height:100px !important; margin:0px !important; padding:0px !important; box-sizing:content-box !important} #webringdescbox {width:166px !important; height:100px !important; margin-left:122px !important; margin-top:-102px !important; border:1px dashed #DD28A7 !important} #webringdesc{line-height: normal !important; font-weight:normal !important; padding:2px !important; width:160px !important; color:#452134 !important; font-family:Verdana !important; font-size:small !important; margin:auto !important; text-align:center !important; position:relative !important; top:50% !important;  -ms-transform: translateY(-50%) !important; -webkit-transform: translateY(-50%) !important; transform: translateY(-50%) !important;} #webringlinks {line-height:normal !important; font-weight:normal !important; width:278px !important; margin:auto !important; height:38px !important; margin-top:6px !important; border:1px dashed #DD28A7 !important} #linkparaWebring {font-family:Verdana !important; color:#452134 !important; font-size:small !important; 	margin:auto !important; line-height: normal !important; text-align:center !important;	margin-top:3px !important; padding:0px !important} </style> <div id='templateWebring'> <div id='webringiconbox'> <img id='iconWebring' src='" + imgurlSelfWebring + "'/> </div> <div id='webringdescbox'> <p id='webringdesc'> <strong>" + nameSelfWebring + "</strong> " + relationshipSelfWebring + "<br /> <strong>" + charnameSelfWebring + "</strong> from <strong>" + seriesSelfWebring + "</strong>! </p> </div> <div id='webringlinks'>	<p id='linkparaWebring'> | <a href='https://webring.koinuko.pink/members.php' target='_PARENT'>Members List</a> | <br/>	Part of the <a href='https://webring.koinuko.pink/members.php' target='_PARENT'>Self-Insert Webring</a></p> </div> </div>"; 
  document.getElementById("selfinsertwebring").appendChild(templateWebring);  
         
       