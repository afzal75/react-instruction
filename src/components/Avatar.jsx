function Avatar({ person, size }) {
  return (
    <div>
      <div>
        <h1>{person.name}</h1>
        <p>{person.imageId}</p>
        <div>{size}</div>
      </div>
    </div>
  );
}

export default Avatar;
