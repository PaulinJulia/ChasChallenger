/* import React from "react";

function ButtonOne({ buttonText = 'add buttonText', secondary, buttonType = 'button', paddingClass = 'px-4 py-2', marginClass = 'm-0' }) {
    const primaryClasses = "bg-radial-gradient from-custom-yellow to-custom-green text-gray-900 hover:bg-radial-gradient";
    const secondaryClasses = "bg-black text-white border-2 border-custom-green";
    
    
    const buttonClasses = secondary ? secondaryClasses : primaryClasses;

    return (
        <div className={marginClass}>
            <button
                type={buttonType}
                className={`${buttonClasses} ${paddingClass} border-0 transition-all duration-300 ease-in-out transform rounded-full hover:scale-105 hover:shadow-lg hover:brightness-125 active:brightness-100`}
            >
                {buttonText}
            </button>
        </div>
    );
}

export default ButtonOne;



 */

function ButtonOne({
    buttonText = 'add buttonText',
    secondary,
    buttonType = 'button',
    paddingClass = 'px-4 py-2',
    marginClass = 'm-0',
    extraClass = "" 
}) {
    const primaryClasses = "bg-radial-gradient from-custom-yellow to-custom-green text-gray-900 hover:bg-radial-gradient";
    const secondaryClasses = "bg-black text-white border-2 border-custom-green";

    const buttonClasses = secondary ? secondaryClasses : primaryClasses;

    return (
        <div className={marginClass}>
            <button
                type={buttonType}
                className={`${buttonClasses} ${paddingClass} ${extraClass} border-0 transition-all duration-300 ease-in-out transform rounded-full hover:scale-105 hover:shadow-lg hover:brightness-125 active:brightness-100`}
            >
                {buttonText}
            </button>
        </div>
    );
}

export default ButtonOne;
