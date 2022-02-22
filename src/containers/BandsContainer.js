import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'
import Band from '../components/Band'

class BandsContainer extends Component {
  renderBands = () => this.props.bands.map((band, index) => <Band key={index} text={band} />)

  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand} />
        <ol>
          {this.renderBands()}
        </ol>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addBand: form => dispatch({ type: "ADD_BAND", payload: form})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
