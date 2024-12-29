
function Button({ height, width, bgcolor,hoverBgColor, borderColor, btnTextColor, hoverbtnTextColor, fontWeight,btnText }) {
  return (
    <div className={`${height} cursor-pointer ${width} ${bgcolor} ${hoverBgColor} ${borderColor}  ${btnTextColor} ${hoverbtnTextColor} rounded-md border-2 flex justify-center items-center `}>
      <p className={`font-rubik ${fontWeight}`}>{btnText}</p>
    </div>
  );
}

export default Button;
