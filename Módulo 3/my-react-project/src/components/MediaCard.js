import React from "react";
import MediaList from "./MediaList";
import Profile from "../Gandalf_sonriendo.jpg";
class MediaCard extends React.Component {
  render() {
    return (
      <div className="page">
        <ul>
          <li>
            <MediaList
              name="Mithrandir, Incánus, Tharkûn"
              date="Year 3018 - Third Age"
              img={Profile}
              text="All that is gold does not glitter, not all those who wander are
            lost; the old that is strong does not wither, deep roots are not
            reached by the frost. From the ashes a fire shall be woken, a light
            from the shadows shall spring; renewed shall be blade that was
            broken, the crownless again shall be king."
              fav="fas fa-heart fa-lg class-likes-icon"
            />
          </li>
          <li>
            <MediaList
              name="LU"
              date="Year 3018"
              img={Profile}
              text="Allg."
              fav="fas fa-heart fa-lg class-likes-icon"
            />
          </li>
          <li>
            <MediaList
              name="Mithrandir, Incánus, Tharkûn"
              date="Year 3018 - Third Age"
              img={Profile}
              text="All that is gold does not glitter, not all those who wander are
            lost; the old that is strong does not wither, deep roots are not
            reached by the frost. From the ashes a fire shall be woken, a light
            from the shadows shall spring; renewed shall be blade that was
            broken, the crownless again shall be king."
              fav="fas fa-heart fa-lg class-likes-icon"
            />
          </li>
        </ul>
      </div>
    );
  }
}

export default MediaCard;
