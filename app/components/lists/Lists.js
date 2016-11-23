import React from 'react';
import $ from 'jquery';

class Lists extends React.Component {
  render() {
    return (
      <div>
        {`The board is ${this.props.boardId}`}
      </div>
    )
  }
}

export default Lists;
