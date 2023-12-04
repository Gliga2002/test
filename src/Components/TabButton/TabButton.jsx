export default function TabButton({children, isSelected, ...props}) {
  // vanila JS
  // document.querySelector('button').addEventListener('click', () => {blabla});
  // document.querySelector('button') -> button mi je vec ovde
  // ne zlim da interagujem sa DOMom uopste, hocu React to da radi

  // DEFINISACU FUNCTION INSIDE FUNTION, ONO STO JE PRE REAKAO. FJA TU DEFINISANA IMA PRISTUP PROPS OBJEKTU I STATE.
  // clickHandler

  console.log("Tabb component executin!");
  return (
    <li>
        <button className={isSelected ? "active" : undefined} {...props}>{children}</button>
    </li>
  )
}