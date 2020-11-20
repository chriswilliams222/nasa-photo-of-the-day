// import React, {useState, useEffect} from 'react';
// import axios from 'axios';
// import './picture.css'


// const Pic = () => {
//   const url = `https://api.nasa.gov/planetary/apod?api_key=iXAFwmgXZXvsjHbKRmoWwlN0PgaYiSiyE0GoN3yP&date=2020-10-${randomNumber()}`;
//   const [picData, setPic] = useState("");


// useEffect((e) => {

// axios
// .get(url)
// .then(res => setPic(res.data.url))
// .catch(err => console.log(err))
// },[ url], () => picData === picData ? picData : setPic(randomNumber()))
//   ;
// // console.log(picData)
//   return (
//   <div className="container">
//     <div className="picDiv">
//     <img src={picData}  alt="Nasa Pic of the Day" />
//     <button onClick={()=> setPic()}>Click for new image!</button>

//     </div>
//   </div>
//   )
// }

// const randomNumber = () => {
// const max = 31;
// let random = Math.floor(Math.random() * max)
// return random}


// export default Pic;

import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import axios from 'axios';
import './picture.css'


const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
`

const PicDiv = styled.div`
  padding: .75rem;
  width: 80%;
  min-height: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`

const PicButton = styled.button `
border: ${props => props.wheatBorder};
  padding: 1.5rem;
  color: ${props => props.primaryColor};
  background-color: ${props => props.secondaryColor};
  font-weight: bolder;
  font-size: 15px;
  margin: 1.5rem;
  &:hover {
  border: ${props => props.blackBorder};
  background-color: ${props => props.primaryColor};
  color: ${props => props.secondaryColor};
  }
`

const PicImg = styled.img `
border: ${props => props.wheatBorder};
  box-shadow: 8px 8px 8px 8px #000;
`


const Pic = () => {

  const [picData, setPic] = useState("");
  const [count, setCount] = useState(0)




useEffect((e) => {
  const url = `https://api.nasa.gov/planetary/apod?api_key=iXAFwmgXZXvsjHbKRmoWwlN0PgaYiSiyE0GoN3yP&date=2020-10-1${count}`;

axios
.get(url)
.then(res => setPic(res.data.url))
.catch(err => console.log(err))
setPic()


},[count], () => count)
  ;


// console.log(picData)
  return (
  <ContainerDiv >
    <PicDiv>
    <PicImg src={picData}  alt="Nasa Pic of the Day" />
    <PicButton onClick={()=> setCount(count === 10 ? count - 10  : count + 1)}>Click for new image!</PicButton>

    </PicDiv>
  </ContainerDiv>
  )
}






export default Pic;