import React, { useState } from 'react';
import { connect } from 'react-redux';
import { saveNewMovie, updateMovie } from '../actions';
import Modal from '../components/Modal';
import Card from '../components/Card';
import ButtonWrapper from '../components/ButtonWrapper';
import Button from '../components/Button';
import '../assets/styles/FormModal.styl';

const FormModal = (props) => {
  const { modal, formData, curMovie } = props;
  const [form, setValues] = useState({
    ...curMovie,
  });
  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const handleUpdateMovie = () => {
    props.updateMovie({
      movies: form,
      modal: {
        showModal: false,
        title: '',
        isUpdate: false,
      },
    });
  };
  const handleSaveNewMovie = () => {
    props.saveNewMovie({
      movies: form,
      modal: {
        showModal: false,
        title: '',
        isUpdate: false,
      },
    });
  };
  return (
    <Modal isActive>
      <Card title={modal.title} isModal>
        {formData ? (
          <div className="FormWrapper">
            { formData.map((item) => (
              <div key={item.id} className="FormItem">
                <div className="FormTitle">
                  {item.title}
                </div>
                <div className="FormInput">
                  <input
                    key={item.id}
                    type={item.type}
                    className="FormControl"
                    value={form[item.name]}
                    name={item.name}
                    onChange={handleInput}
                  />
                </div>
              </div>
            ))}
          </div>
        ) : null}
        <ButtonWrapper>
          {modal.isUpdate ? (
            <Button value="Update" onClick={handleUpdateMovie} />
          ) : (
            <Button value="Save" onClick={handleSaveNewMovie} />
          )}
        </ButtonWrapper>
      </Card>
    </Modal>
  );
};

const mapDispatchToProps = {
  saveNewMovie,
  updateMovie,
};

const mapStateToProps = (state) => {
  return {
    modal: state.modal,
    movies: state.movies,
    curMovie: state.curMovie,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormModal);
