import React from 'react'

// const Portfolio = () => {
//   return ( 
//     <div className="tile is-vertical is-8">
//       <div className="tile">
//         <div className="tile is-parent">
//           <article className="tile is-child notification ">
//             <h1 className="title">Portfolio - $5943.34</h1>
  //                     <div class="table-container">
  //           <table class="table">
  //           <thead>
  //   <tr>
  //     <th>Ticker</th>
  //     <th>Shares</th>
  //     <th>Price</th>
  //   </tr>
  // </thead>
  // <tbody>
  //   <tr>
  //     <th>1</th>
  //     <td>38</td>
  //     <td>38</td>
  //   </tr>
  //   </tbody>
  //           </table>
  //         </div>  
//           </article>

//         </div>
//       </div>
//     </div>
//   );
// }

const Portfolio = () => {
  return ( 
    <div className="tile is-parent">
      <article className="tile is-child notification">
        <div className="content">
          <h1 className="title">Portfolio - $5943.34</h1>
          <div className="content">
          <div class="table-container">
            <table class="table">
              <thead>
                <tr>
                  <th>Ticker</th>
                  <th>Shares</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>AAPL - </th>
                  <td>6 shares</td>
                  <td>$2043.09</td>
                </tr>
              </tbody>
            </table>
          </div>  
          </div>
        </div>
      </article>
    </div>
  );
}

export default Portfolio;