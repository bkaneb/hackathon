import React, { useContext } from "react";
import PagesAffContext from "../contexts/PagesAffContext";
import CardPlaylist from "../containers/CardPlaylist";

const Playlist = () => {

  const { setCurrentAffConnexion, setCurrentAffInscription } =
    useContext(PagesAffContext);
  setCurrentAffConnexion(false);
  setCurrentAffInscription(false);

  return (
    <div style={{paddingLeft: "78px"}}>
      <h1>Bienvenue sur la page des playlists</h1>
      <CardPlaylist />
      </div>
  );
};

export default Playlist;
