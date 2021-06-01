import React from "react";
class MediaList extends React.Component {
  render() {
    return (
      <div className="page">
        <section className="card">
          <div className="card-header">
            <img src={this.props.img} className="card-image" alt="Profile" />
            <div className="card-dateName">
              <h2 className="card-name">{this.props.name}</h2>
              <small className="card-date"> {this.props.date}</small>
            </div>
          </div>
          <p className="card-paragraph">{this.props.text}"</p>
          <div className="card-likes">
            <small className="card-likesNumber">
              Elessar and other people likes this
            </small>
            <i className={this.props.fav}></i>
          </div>
        </section>
      </div>
    );
  }
}

export default MediaList;
