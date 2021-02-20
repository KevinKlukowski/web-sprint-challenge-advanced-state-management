import React from 'react';
import { connect } from 'react-redux';
import { fetchSmurfs } from '../actions/index';

export class SmurfDisplay extends React.Component {

    componentDidMount() {
        this.props.fetchSmurfs();
    }

    // componentDidUpdate() {
    //     this.props.fetchSmurfs();
    // }

    render() {

        return(
            <div>
                {this.props.smurfs.map(smurf => {
                    return (
                        <div>
                            <h4>{smurf.name}</h4>
                            <p>Nickname: {smurf.nickname}</p>
                            <p>Position: {smurf.position}</p>
                            <p>Description: {smurf.description}</p>
                        </div>
                    )
                })}
            </div>)
    }
}
const mapStateToProps = state => {
    return {
      smurfs: state.smurfs
    };
  };

export default connect(mapStateToProps, { fetchSmurfs })(SmurfDisplay);
