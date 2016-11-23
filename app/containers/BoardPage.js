import React from 'react';
import Lists from '../components/lists/Lists';

const BoardPage = ({ id }) => (
  <div>
    <Lists boardId={id} />
  </div>
);

export default BoardPage;
