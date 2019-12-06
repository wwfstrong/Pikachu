const string = `
/*画一只可爱皮卡丘*/
#html {
  padding: 0;
  margin: 0;
}
/*皮卡丘的皮肤*/
#html{
  background-color: #ffdc40;
}
#box {
  position: relative;
  width: 400px;
  height: 400px;
  margin: 0 auto;
  align-self: center;
}
/*皮卡丘的眼睛*/
#eyes-left,
#eyes-right {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid #000000;
  background-color: #2f2f2f;
  box-sizing: border-box;
  position: absolute;
  top: 25%;
}
#eyes-left {
  left: 15%;
}
#eyes-right {
  right: 15%;
}
/*皮卡丘的眼瞳*/
#eyes-left::after,
#eyes-right::after {
  content: "";
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #000000;
  background-color: #ffffff;
  position: absolute;
  top: 0px;
  left: 6px;
}
/*皮卡丘的小鼻子*/
#nose {
  width: 0;
  border-top: 12px solid #000000;
  border-left: 11px solid transparent;
  border-right: 11px solid transparent;
  border-radius: 50%;
  position: absolute;
  top: 32%;
  left: 50%;
  transform: translateX(-50%);
}
/*皮卡丘的胡须*/
#beard-left,#beard-right{
  width: 90px;
  height: 20px;
  border: 2px solid #000000;
  border-top: transparent;
  position: absolute;
  top: 38%;
  background-color: #ffdc40;
  z-index: 1;
}
#beard-left{
  border-bottom-left-radius: 50px 26px;
  border-right: transparent;
  transform: rotate(-20deg);
  left: 27%;
}
#beard-right{
  border-bottom-right-radius: 50px 26px;
  border-left: transparent;
  transform: rotate(20deg);
  right: 27%;
}
/*皮卡丘的腮红*/
#face-left,#face-right{
  width: 62px;
  height: 62px;
  background-color: #ff2519;
  border: 2px solid #000000;
  border-radius: 50%;
  position: absolute;
  top: 46%;
}
#face-left{
  left: 5%;
}
#face-right{
  right: 5%;
}
/*皮卡丘的小嘴巴*/
#mouth{
  width: 200px;
  height: 200px;
  position: absolute;
  top: 39.5%;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
}
#oral{
  width: 150px;
  height: 400px;
  border: 2px solid #000000;
  position: absolute;
  top: -135%;
  left: 50%;
  transform: translateX(-50%);
  border-bottom-left-radius: 75px 400px;
  border-bottom-right-radius: 75px 400px;
  background-color: #a31818;
  overflow: hidden;
}
/*皮卡丘的小舌头*/
#oral::after{
  position: absolute;
  content: '';
  background-color: #ff5d60;
  width: 100px;
  height: 100px;
  border-top-left-radius: 50px 50px;
  border-top-right-radius: 50px 50px;
  bottom: -2%;
  left: 50%;
  transform: translateX(-50%);
}
/*完成，把这只可爱的皮卡丘送给您*/
`;
export default string;
