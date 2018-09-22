import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

{/*This component will be used in the Resume section*/}
{/*Properties of this component are - startYear, endYear, jobName and jobDescription which must be defined on component creation*/}
class Experience extends Component{
  render() {
    return(
      <Grid>
        <Cell col={5}>
          <p>{this.props.startYear} - {this.props.endYear}</p>
        </Cell>
        <Cell col={5}>
          <h4 className='job-name'>{this.props.jobName}</h4>
          <p>{this.props.jobDescription}</p>
        </Cell>
      </Grid>
    );
  }
}

export default Experience;