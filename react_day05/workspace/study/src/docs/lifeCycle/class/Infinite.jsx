import React, { Component } from 'react';

class Infinite extends Component {

  state = {
    users : []
  }
  render() {
    
    const {users} = this.state;
    
    // 무한 리랜더링
    // 사이드 이팩트
    const getData = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users")
      const datas = await response.json()
      console.log("리랜더링")
      return datas
    }

    // getData().then((datas) => this.setState({users: datas}))

    return (
      <div>
        {users.map((user, i) => (
          <p key={i}>{user.name}</p>
        ))}
      </div>
    );
  }
}

export default Infinite;