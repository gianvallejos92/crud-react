import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { toggleModal } from '../actions';
import '../assets/styles/Card.styl';

const Card = (props) => {
  const { title, isModal, children } = props;
  const handleModalState = (isShowModal) => {
    props.toggleModal({
      showModal: isShowModal,
      title: '',
      isNew: true,
    });
  };
  return (
    <div className="Card">
      <div className="titleWrapper">
        <div className="title">
          { title }
        </div>
        {isModal ? (
          <div
            className="Icon"
            onClick={() => handleModalState(false)}
            role="button"
            tabIndex="0"
          >
            <FontAwesomeIcon icon={faTimes} />
          </div>
        ) : (<></>)}
      </div>
      <div className="body">
        { children }
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  toggleModal,
};

export default connect(null, mapDispatchToProps)(Card);
