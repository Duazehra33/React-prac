import React from 'react';

const Header = (props) => {
  return (
    <div className="d-flex align-items-center justify-content-between bg-success px-5" style={{ height: '4rem' }}>
      <div>
        <h2>{props.user}</h2>
      </div>
      <div className="d-flex gap-3">
        <h4>About</h4>
        <h4>Career</h4>
        <h4>{props.edit}</h4>
        <h4>Blog</h4>
     
      </div>
    </div>
  );
};

export default Header;
