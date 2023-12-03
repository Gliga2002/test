import "./CoreConcept.css";

// Object Destructuring
export default function CoreConcepts({image, alt, title, description}) {
  return (
    <li>
      <img src={image} alt={alt} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}