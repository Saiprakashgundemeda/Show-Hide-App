// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    isFirstNameShow: false,
    isLastNameShow: false,
  }

  showHideFirstName = () => {
    const {isFirstNameShow} = this.state
    this.setState(() => ({isFirstNameShow: !isFirstNameShow}))
  }

  showHideLastName = () => {
    const {isLastNameShow} = this.state
    this.setState(() => ({isLastNameShow: !isLastNameShow}))
  }

  render() {
    const {isFirstNameShow} = this.state
    const {isLastNameShow} = this.state
    return (
      <div className="bgSection">
        <h1 className="heading">SHOW/HIDE</h1>
        <div className="buttonsContainer">
          <div>
            <button
              className="button1"
              type="button"
              onClick={this.showHideFirstName}
            >
              Show/Hide Firstname
            </button>
            {isFirstNameShow ? (
              <div className="firstNameContainer">
                <p>Joe</p>
              </div>
            ) : (
              ''
            )}
          </div>
          <div>
            <button
              className="button2"
              type="button"
              onClick={this.showHideLastName}
            >
              Show/Hide Lastname
            </button>
            {isLastNameShow ? (
              <div className="lastNameContainer">
                <p>Jonas</p>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
