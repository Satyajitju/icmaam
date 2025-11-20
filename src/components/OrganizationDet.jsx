import React, { Component } from 'react'
import axios from 'axios';

export class OrganizationDet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            row1: [],
            row2: [],
            row3: []
        }
    }
    async componentDidMount(){
        const url = 'https://script.google.com/macros/s/AKfycbzp9_t_8yM-NqJxEvx217pRreEpG1tuMtcFja3FgYzHyhig2oBwzLVM4iXZIVZB_cXS/exec?type=organization'
        const response = await axios.get(url);
        console.log(response.data);
        if(response.status){
            this.setState({row1: response.data.international, row2: response.data.national, row3: response.data.local});
        }
    }
  render() {
    return (
      <div className="m-4">
        <div className="d-flex justify-content-around text-left flex-column flex-lg-row flex-md-row ">
            <div className="col-lg-2 p-2">
                <h4 className="text-primary">Chief Patron</h4>
                <p className="text-danger" style={{fontSize: 20, margin: 0}}>Prof. (Dr.) Chiranjib Bhattacharjee </p>
                <p className="" style={{color: '#f54254',}} >Vice Chancellor, Jadavpur University</p>
            </div>
            <div className="col-lg-3 p-3">
                <h4 className="text-primary">Patron</h4>
                <p className="text-danger" style={{fontSize: 20, margin: 0}}>Prof. (Dr.) Amitava Dutta </p>
                <p className="" style={{color: '#f54254'}}>Pro-Vice Chancellor, Jadavpur University</p>
                <p className='text-danger' style={{fontSize: 20, margin: 0}}>Prof. (Dr.) Subenoy Chakraborty.</p>
                <p className='' style={{color: '#f54254'}}>Dean, Faculty of Science, Jadavpur University</p>
            </div>
            <div className="col-lg-2 p-1">
                <h4 className='text-primary'>Chairman</h4>
                <p className="text-danger" style={{fontSize: 20, margin: 0}}>Prof. (Dr.) Saghnik Sinha</p>
                <p className="" style={{color: '#f54254',}}>Head, Department of Mathematics, Jadavpur University</p>
                <h4 className='text-primary'>Treasurer</h4>
                <p className="text-danger" style={{fontSize: 20, margin: 0}}>Prof. (Dr.) Arindam Bhattacharya</p>
                <p className="" style={{color: '#f54254',}}>Department of Mathematics, Jadavpur University</p>
            </div>
            <div className="col-lg-3 p-3">
                <h4 className='text-primary'>Organizing Secretary</h4>
                <p className='text-danger' style={{fontSize: 20, margin: 0}}>Prof. (Dr.) Priti Kumar Roy</p>
                <p className="" style={{color: '#f54254',}}>Department Of Mathematics, Jadavpur University</p>
                <h4 className='text-primary'>Executive Secretary</h4>
                <p className="text-danger" style={{fontSize: 20, margin: 0}}>Prof. (Dr.) Nandadulal Bairagi</p>
                <p className="" style={{color: '#f54254',}}>Department Of Mathematics, Jadavpur University</p>
            </div>
            <div className="col-lg-2 p-3">
                <h4 className='text-primary'>Joint Organizing Secretary</h4>
                <p className='text-danger' style={{fontSize: 20, margin: 0}}>Prof. (Dr.) Kallol Paul</p>
                <p className="" style={{color: '#f54254',}}>Department of Mathematics, Jadavpur university</p>
                <p className='text-danger' style={{fontSize: 20, margin: 0}}>Prof. (Dr.) Dipak Kumar kesh</p>
                <p className="" style={{color: '#f54254',}}>Department of Mathematics, Jadavpur university</p>
            </div>
        </div>
        <div className="d-flex justify-content-around text-left flex-lg-row flex-column">
            <div className={`col-lg-4 p-3 mx-auto ${this.state.row1.length === 0 && 'text-center'}`}>
                <h3>International Scientific Advisory Committee</h3>
                {this.state.row1.length === 0 &&
                    <div class="spinner-grow mt-5" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                }
                <ul style={{whiteSpace: 'pre-wrap'}}>
                {this.state.row1.map((i, index)=> {
                    return <li style={{margin: 0, textIndent: '-10px', paddingLeft: '10px'}} index={index}>{i}</li>
                })}
                </ul>
            </div>
            <div className={`col-lg-4 p-3 mx-auto ${this.state.row2.length === 0 && 'text-center'}`}>
                <h3>National Scientific Advisory Committee</h3>
                {this.state.row2.length === 0 &&
                    <div class="spinner-grow mt-5" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                }
                <ul>
                
                {this.state.row2.map((i, index)=> {
                    return <li style={{margin: 0, textIndent: '-10px', paddingLeft: '10px'}} index={index}>{i}</li>
                })}
                </ul>
            </div>
            <div className={`col-lg-4 p-3 mx-auto ${this.state.row3.length === 0 && 'text-center'}`}>
                <h3>Local Organizing Committee</h3>
                {this.state.row3.length === 0 &&
                    <div class="spinner-grow mt-5" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                }
                <ul>
                {this.state.row3.map((i, index)=> {
                    return <li style={{margin: 0, textIndent: '-10px', paddingLeft: '10px'}} index={index}>{i}</li>
                })}
                </ul>
            </div>
        </div>
      </div>
    )
  }
}

export default OrganizationDet
