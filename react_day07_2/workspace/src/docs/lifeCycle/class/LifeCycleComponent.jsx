import React, { Component } from 'react';

class LifeCycleComponent extends Component {

  state = {
    number : 0,
    color : null,
  }

  onClickToIncrease = () => {
    this.setState({
      number : this.state.number + 1
    })
  }

  colorRef = null

  constructor(props){
    super(props);
    console.log(props)
  }

  static getDerivedStateFromProps(nextProps, prevProps){
    if(nextProps.color != prevProps.color){
      return {color: nextProps.color}
    }
    return null
  }

  componentDidMount(){
    console.log("마운트 직후 실행!")
  }

  shouldComponentUpdate(prevProps, nextState){
    return nextState.number % 5 !== 0
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    if(prevProps.color != this.props.color){
      return this.colorRef.style.backgroundColor;
    }
    return null
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    if(prevState){
      console.log(`업데이트 직전 state: ${prevState}`)
    }
    if(snapshot){
      console.log(`업데이트 직전 색상: ${snapshot}`)
    }
  }


  render() {
    return (
      <div>
        <div>
          <div
            ref={(el) => this.colorRef = el}
            style={{
              width : "100px",
              height: "100px",
              backgroundColor: this.state.color,
              display: "flex",
              justifyContent : "center",
              alignItems : "center",
              color : "white"
            }}
          >
            <h1>{this.state.number}</h1>
          </div>
        </div>
        <button onClick={this.onClickToIncrease}>더하기 버튼</button>
      </div>
    );
  }
}

export default LifeCycleComponent;