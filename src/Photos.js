import React from 'react';
import { default as photos } from './data/photos';
import { default as _ } from 'lodash';


class Photos extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      photos: photos
    };

    this.onSortByClick = this.onSortByClick.bind(this);
  }

  onSortByClick(e) {
    e.preventDefault();
    let photos = _.sortBy(this.state.photos, e.target.name);
    this.setState({ photos: photos });
    return false;
  }

  render() {
    const photoElements = this.state.photos.map((photo, index) => {
      return (
        <Photo
          key={ `photo-${ index }` }
          title={ photo.username }
          imageUrl={ photo.imageUrl }
          profileUrl={ photo.profileUrl }
          fullName={ photo.fullName }
          tags={ photo.tags }
          filter={ photo.filter }
          createdAt={ photo.createdAt }
          pageUrl={ photo.pageUrl } />
      );
    });

    return (
      <div className="photos">
        <header className="page-header">
          <a href="#" name="username" onClick={ this.onSortByClick }>
            Username
          </a>
        </header>
        <div className="row">
          { photoElements }
        </div>
      </div>
    );
  }
}


const Photo = (props) => {
  return (
    <div className="photo col-xs-3">
      <div className="panel panel-default">
        <header className="panel-heading">
          <a href={ props.profileUrl }>{ props.title }</a>
        </header>

        <div className="panel-body">
          <a href={ props.pageUrl }>
            <img
              src={ props.imageUrl }
              className="img-responsive"
              alt="Place holder"/>
          </a>
          <p>{ props.tags ? props.tags.join(', ') : '' }</p>
          <p>{ props.filter }</p>
          <p>Posted on: { props.createdAt }</p>
        </div>
      </div>
    </div>
  );
};




export default Photos;






