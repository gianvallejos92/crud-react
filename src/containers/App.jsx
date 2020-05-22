import React from 'react';
import { connect } from 'react-redux';
import { refreshCurrentMovie } from '../actions';
import '../assets/styles/App.styl';
import Header from '../components/Header';
import Wrapper from '../components/Wrapper';
import FormModal from './FormModal';
import Card from '../components/Card';
import Table from '../components/Table';
import ButtonWrapper from '../components/ButtonWrapper';
import Button from '../components/Button';
import Footer from '../components/Footer';

const App = (props) => {
  const { movies, modal, lastId } = props;
  const tHeadData = ['Title', 'Director', 'Gender', 'Year'];
  const formData = [
    { id: 1, title: 'Title', type: 'text', name: 'title' },
    { id: 2, title: 'Director', type: 'text', name: 'director' },
    { id: 3, title: 'Genero', type: 'text', name: 'genero' },
    { id: 4, title: 'Year', type: 'text', name: 'year' },
  ];

  const handleNewAction = (showModal, title) => {
    props.refreshCurrentMovie({
      curMovie: {
        id: lastId + 1,
        title: '',
        director: '',
        genero: '',
        year: '',
      },
      modal: {
        showModal,
        title,
        isUpdate: false,
      },
    });
  };

  return (
    <div className="App">
      {modal.showModal ?
        <FormModal title="New Movie" formData={formData} /> :
        null}
      <Header />
      <Wrapper>
        <Card title="List of Movies">
          <Table tHeadData={tHeadData} listData={movies} />
          <ButtonWrapper>
            <Button
              value="Nuevo"
              onClick={() => handleNewAction(true, 'New Movie')}
            />
          </ButtonWrapper>
        </Card>
      </Wrapper>
      <Footer />
    </div>
  );
};

const mapDispatchToProps = {
  refreshCurrentMovie,
};

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    modal: state.modal,
    lastId: state.lastId,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
