/* In order to validate your CSS code, click on the arrow at the top right of this window. Don't forget, you can have a look here : https://blog.codepen.io/2017/10/11/analyze-css-now-using-stylelint/
 */

/* Your CSS code here */
#mypage{
  background-color: black;
}

.navbar {
  margin-bottom: 0;
  background-color: rgba(33, 34, 112,1);
  z-index: 9999;
  border: 0;
  color: blue;
  font-size: 12px !important;
  line-height: 1.42857143 !important;
  letter-spacing: 4px;
  border-radius: 0;
  font-family: Amatic SC;
  width:100%;
}
.navbar li a, .navbar .navbar-brand {
  color: black !important;

}
.navbar-nav li a:hover{
  color: white  !important;
  background-color: rgb(57, 59, 63) !important;

}
.navbar-nav li:nth-child(2n).active a {
  color: white !important;
  background-color: rgb(51, 98, 175) !important;
}

.navbar-nav li:nth-child(2n+1).active a {
  color: black !important;
  background-color: rgb(66, 146, 244) !important;
}
.navbar-default .navbar-toggle {
  border-color:rgba(33, 19, 112,1) ;
  color: white !important;
}

#Arm{
  color: rgb(183, 16, 77);
  background-color: rgba(30,144,255,0);
  border:  rgb(51, 98, 175)  groove 5px;
  border-radius: 40px;
  font-family: Amatic SC;
  font-weight: bold;
  font-size: 12pt;



  margin: 3px;
  padding: 2px 2px 2px 2px;
  width:240px;
  direction: inherit;



    position: relative;
    left:4px;
    z-index: 4;
    text-align: center;
}

.row{
  left:8%;
}

.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  position: relative;
  background-color: rgb(183, 16, 77);
  float: left;
  color: white;
  margin:2px;
  padding:2px;
}

#title-performance {
  position: relative;
  background-color: rgb(183, 16, 77);
  color: white;
  top: -25px;
  left: 40%;
  width:180px;
  z-index: 333;
  border: rgb(183, 16, 77) solid;
  border-radius: 00px 0px 30px 30px;
  font-family: Amatic SC;
  /*left: 40%;*/

}
#performance{
  background-color: rgb(66, 146, 244);
  position: relative;
  top:-50px;

  display: block;
  left:2.5%;
  height:auto;
  padding:2%;
  width:94.5%;
  border-radius: 30px 30px 0px 0px;


}





.body{
  padding-left: 14px;
  padding-right: 14px;
}
/*  about section*/
#about{
  position: relative;
  top: -78px;
  background-color: rgb(51, 98, 175);
  left:4%;
  display: block;
  height:auto;

 }




#title-about{
  background-color: rgb(183, 16, 77);
  border: rgb(183, 16, 77) solid;
  border-radius: 0px 0px 30px 30px;
  position: relative;
  z-index: 333;
  color: white;
  font-size: 12pt;
  font-family: Amatic SC;
  top: -51px;
  left:30%;
  width:180px;

}




#title-price{
    position: relative;
    top: -66px;
    left:34%;
    font-family: Amatic SC;
}
#b2{
    top:490px;
    height: 700px;
}
#title-price1{
    background-color: rgb(183, 16, 77);
    border: rgb(183, 16, 77) solid;
    border-radius: 0px 0px 30px 30px;
    position: relative;
    z-index: 333;
    color: white;
    font-size: 12pt;
    top:-12px;
    left: 0%;
}
/*---------------------------------------------------*/
#price_section{
    float: inherit;
    position: relative;
    background-color: rgb(66, 146, 244);;

    float: inherit;
    top:-105.9px;
    left:4%;
}
.price_card{
  position: relative;

}
.columns {
    position: relative;
    float: left;
    width:100%;
    padding: 8px;
    top: -3px;


}

/* Style the list */
.price {
    list-style-type: none;
    border: 1px solid #eee;
    margin: 0;
    padding: 0;
    -webkit-transition: 0.3s;
    transition: 0.3s;
    top:52px;
    background-color: #111;
    color: black;
    font-size: 25px;
}

/* Add shadows on hover */
.price:hover {
    box-shadow: 0 12px 15px 0 rgba(0,0,0,0.5)

}

/* Pricing header */

.header_price {
    /*width: 100px;*/

    height: 240px;
    background-color: #111;
    color: white;
    font-size: 25px;
}

/* List items */
.price li {
    background-color: rgb(35, 15, 183);
    border-bottom: 1px solid #eee;
    padding: 20px;
    text-align: center;
    color: white;
}
.pic{
    position: relative;
    width: 100%;
    height: 100%;


}

/* Grey list item */
.price .grey {
    background-color: rgb(183, 16, 77);
    /*#eee*/
    font-size: 20px;
    color: white;
}
#title_contact{
    position: relative;
    top: -66px;
    left:34%;
    font-family: Amatic SC;
}
.title_contact2{
  background-color: rgb(183, 16, 77);
  border: rgb(183, 16, 77) solid;
  border-radius: 0px 0px 30px 30px;
  position: relative;
  z-index: 333;
  color: white;
   font-size: 12pt;
   top:-81px;
}


#contact{
    position: relative;
    top: -175px;
    background-color: rgb(51, 98, 175);
    left:4%;
    border-radius: 0px 0px 30px 30px;

}
.contact_card {
  margin:40px;
}

#title_contact991{
    position: relative;
    top: 466px;
    left:34%;
}
.title_contact992{
    position: relative;
    top: 75px;
    background-color: rgb(51, 98, 175);
    left:4%;
    border-radius: 0px 0px 30px 30px;
}
#contact993{
    position: relative;
    top: 190px;
    background-color: rgb(51, 98, 175);
    left:4%;
    border-radius: 0px 0px 30px 30px;

}


.foot{
    position: relative;
    background-color:white;
    top:340px;

    color: black;
    text-align:left;

}
#top{
    position: relative;
    top:-460px;
}
.foot div{
    position: relative;
    top:-440px;
}

.slideanim{visibility:hidden;}
.slide {
    /* The name of the animation */
    animation-name: slide;
    -webkit-animation-name: slide;
    /* The duration of the animation */
    animation-duration: 1s;
    -webkit-animation-duration: 1s;
    /* Make the element visible */
    visibility: visible;
}

/* Go from 0% to 100% opacity (see-through) and specify the percentage from when to slide in the element along the Y-axis */
@keyframes slide {
    0% {
        opacity: 0;
        transform: translateY(70%);
    }
    100% {
        opacity: 1;
        transform: translateY(0%);
    }
}
@-webkit-keyframes slide {
    0% {
        opacity: 0;
        -webkit-transform: translateY(70%);
    }
    100% {
        opacity: 1;
        -webkit-transform: translateY(0%);
    }
}

/* Go from 0% to 100% opacity (see-through) and specify the percentage from when to slide in the element along the Y-axis */






@media only screen and (min-width: 600px) {

}
@media only screen and (min-width: 768px) {
}
