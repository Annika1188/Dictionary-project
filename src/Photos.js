export default function Photos(props) {
  console.log("📷 Photos component received:", props.photos);

  if (props.photos && props.photos.length > 0) {
    return (
      <section className="Photos">
        {props.photos.map((photo, index) => (
          <img
            src={photo.src.landscape}
            alt={photo.alt}
            key={index}
            className="photo"
          />
        ))}
      </section>
    );
  } else {
    return null;
  }
}
