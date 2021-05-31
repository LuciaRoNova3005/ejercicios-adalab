import React from "react";
import MediaCard from "./MediaCard";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MediaCard
          name="Mithrandir, Incánus, Tharkûn"
          date="Year 3018 - Third Age"
          img="../Gandalf_sonriendo.jpg"
          text="All that is gold does not glitter, not all those who wander are
      lost; the old that is strong does not wither, deep roots are not
      reached by the frost. From the ashes a fire shall be woken, a light
      from the shadows shall spring; renewed shall be blade that was
      broken, the crownless again shall be king."
          fav="fas fa-heart fa-lg class-likes-icon"
        />
      </div>
    );
  }
}

export default App;
