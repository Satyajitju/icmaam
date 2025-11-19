import React, { Component } from 'react'

export class HomeItems extends Component {
  render() {
    return (
      <div className="text-center mx-5 d-flex flex-column flex-lg-row flex-md-row justify-content-around">
        <div className="col-lg-6 col-md-4">
            <div className="d-flex flex-row">
              <img src="https://static.wixstatic.com/media/485cee_b1223458cd414136860b3bd7341639dd~mv2.gif" alt="" />
              <p className="text-primary fw-bold fs-3 my-auto ml-5">Conference Publications:</p>
            </div>
            <ul>
              <li style={{textAlign: 'justify'}}>
              We have a proposal for probably Springer Book Proceedings, Full length papers presented in  ICMAAM-2026 will undergo a peer review process and selected papers will subsequently be published in Springer Book Proceedings.
              </li>
              <li style={{textAlign: 'justify'}}>
              Full length papers presented in  ICMAAM-2026 will undergo a peer review process and selected papers will subsequently be published in special issues of the following journals:
              <ol>
                <li value="1"><a href="http://biomathsociety.in/ijbsb.html" target="_blank">International Journal of Biomathematics and System Biology</a></li>
                <li><a href="https://www.worldcat.org/title/875137801">Bulletin of Calcutta Mathematical Society/Journal of Calcutta Mathematical Society</a></li>
              </ol>
              </li>
            </ul>
            <p style={{textAlign: 'justify'}}>Authors of chosen papers may be required to correct/modify/update their papers according to the feedback received in the peer review. The decision of the reviewers will be final.</p>
        </div>
        {/* <div className="col-lg-3"></div> */}
        <div className="col-lg-3 col-md-4 mx-lg-4 w-lg-50">
          <div className="rounded m-auto">
            <div className="d-flex flex-row">
              <img src="https://static.wixstatic.com/media/485cee_b1223458cd414136860b3bd7341639dd~mv2.gif" alt="" />
              <p className="text-primary fw-bold fs-3 my-auto ml-5">Call For Papers:</p>
            </div>
            <p className="text-danger fw-200" style={{textAlign: 'justify'}}>
            Papers pertaining to conference areas of interest, as listed in “Aims and Scopes”, are invited for ICMAAM-2026. The authors are requested to submit their abstracts and title of the paper only before Conference, which are not being under consideration for publication by any other journal or conference, latest by September 24th, 2023 at the email: icmaam2026@gmail.com
            </p>
            </div>
        </div>
      </div>
    )
  }
}

export default HomeItems
