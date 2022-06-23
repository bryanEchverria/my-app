import React, { useState, FC } from 'react';

import Offcanvas from 'react-bootstrap/Offcanvas';

type Iprops = {

    handleClose : () => void;
    handleShow : () => void;
    show : Boolean;

};


const Sidebar : FC<Iprops> = (props :Iprops) => {
    const {show, handleClose} = props;

  return (
    <>
      <Offcanvas show={show} onHide={handleClose} backdrop="">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          I will not close if you click outside of me.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Sidebar;
