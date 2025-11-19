import React, { Component } from 'react'

export class ConferenceDet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subs: [
        "Functional Analysis",
        "Complex Analysis",
        "Real Analysis",
        "Algebraic Topology",
        "Differential Geometry",
        "Mathematical Modeling",
        "Mathematical Biology",
        "Dynamical Systems (Non-linear, Topological)",
        "Operations Research",
        "Theoretical Physics",
        "Solid Mechanics",
        "Computational Fluid Dynamics",
      ],
    }
  }
  render() {
    return (
      <div className="m-4">
       <p style={{fontSize: 18, textAlign: 'justify'}}> <strong>International Conference on Mathematical Analysis and Applications in Modeling (ICMAAM 2026) </strong>is aimed to bring researchers and professionals to discuss recent developments in Pure and Applied mathematics and their applications in Mathematical Modeling, in order to create a professional knowledge exchange platform between mathematicians. The Thrust area of the conference includes but is not limited to:
       </p>
       <div className="d-flex flex-column flex-md-row flex-lg-row justify-content-around">
       <ul className="text-left d-flex flex-column">
        {this.state.subs.slice(0, this.state.subs.length/2).map((i, index) =>(
          <li key={index} className="fw-bold text-danger">{i}</li>
        ))}
      </ul>
      <ul className="text-left">
        {this.state.subs.slice(this.state.subs.length/2, this.state.subs.length).map((i, index) =>(
          <li key={index} className="fw-bold text-danger">{i}</li>
        ))}
      </ul>
      </div>
        <p style={{fontSize: 18, textAlign: 'justify'}}>       
          The program of the conference will consist of Keynote Address, Plenary Lectures, Invited Talks, Contributory Talks and Poster Presentations. We are looking forward to welcoming you in Jadavpur University.
       
          In this connection we would like to proudly mention that Jadavpur University has long been acknowledged as a center of excellence in teaching and research and in its last survey The University has been ranked overall 12th among all Indian educational institutions and 4th in university, 13th in research among all state aided universities (NIRF) with a special mention to The Department of Mathematics.
        </p> 
         <p style={{margin: 0}}> <a href="https://drive.google.com/file/d/1ZIXM5MMEfXSs1Y9bWQYhzfYS0AzC_y4x/view?usp=sharing">Poster for the ICMAAM'2023</a> </p>
      </div>
    )
  }
}

export default ConferenceDet
