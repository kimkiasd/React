function Coffee({fav, picture}) {
    return (
      <div>
        <h2>{fav}는 맛있다!</h2>
        <img src={picture} />
      </div>
    );
  }