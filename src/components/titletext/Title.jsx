// import React from 'react'

// export const Title = ({text}) => {
//   return (
//     <h2>{text}</h2>
//   )
// }
 
export const Title = ({ text, color }) => {
  return <h1 style={{ color: color }}>{text}</h1>;
};
