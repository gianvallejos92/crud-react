import React from 'react';
import { connect } from 'react-redux';
import { deleteMovie, refreshCurrentMovie } from '../actions';
import Button from './Button';
import '../assets/styles/Table.styl';

const Table = (props) => {
  const { listData, movies, tHeadData } = props;
  const handleDeleteMovie = (id) => {
    props.deleteMovie({
      id,
    });
  };
  const handleUpdateMovie = (id) => {
    props.refreshCurrentMovie({
      curMovie: movies.filter((item) => item.id === id)[0],
      modal: {
        showModal: true,
        title: 'Update Movie',
        isUpdate: true,
      },
    });
  };
  return (
    <table className="table" border="1" cellSpacing="0" cellPadding="0">
      <thead>
        <tr>
          <th width="120px">&nbsp;</th>
          {tHeadData ?
            tHeadData.map((item) => (
              <th key={item}>{item}</th>
            )) : null }
        </tr>
      </thead>
      <tbody>
        {listData.map((item) => (
          <tr key={item.id}>
            <td>
              <Button
                value="Update"
                onClick={() => handleUpdateMovie(item.id)}
                islink
              />
                &nbsp;&nbsp;
              <Button
                value="Delete"
                onClick={() => handleDeleteMovie(item.id)}
                islink
              />
            </td>
            <td>{item.title}</td>
            <td>{item.director}</td>
            <td>{item.genero}</td>
            <td>{item.year}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const mapDispatchToProps = {
  deleteMovie,
  refreshCurrentMovie,
};

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
