// import React from "react";
// import PropTypes from 'prop-types';

// const InputForm = ({
//   name = "",
//   type = "text",
//   placeholder = "",
//   value = "",
//   onChange,
//   onClick,
//   feedbackType,
// }) => {
//   return (
//     <div>
//       <label htmlFor={name} className="text-gray-600 text-sm">
//         {name}
//       </label>
//       <input
//         id={name}
//         type={type}
//         className="w-full border border-gray-200 outline-none px-2 py-2 text-gray-500 "
//         placeholder={placeholder}
//         value={value}
//         onChange={onChange}
//         onClick={onClick}
//       />
//       <p className="text-red-500 text-sm font-sans">{feedbackType}</p>
//     </div>
//   );
// };

// InputForm.propTypes = {
//   name: PropTypes.string,
//   type: PropTypes.string,
//   placeholder: PropTypes.string,
//   value: PropTypes.string,
//   onChange: PropTypes.func,
//   onClick: PropTypes.func,
//   feedbackType: PropTypes.string,
// };

// export default InputForm;


import React from "react";
import PropTypes from 'prop-types';

const InputForm = ({
  name = "",
  type = "text",
  placeholder = "",
  value = "",
  onChange,
  onClick,
  feedbackType,
}) => {
  return (
    <div>
      <label htmlFor={name} className="text-gray-600 text-sm">
        {name}
      </label>
      <input
        id={name}
        type={type}
        className="w-full border border-gray-200 outline-none px-2 py-2 text-gray-800 "
        placeholder={placeholder}
        value={value}
        onChange={onChange} 
        onClick={onClick}
      />
      <p className="text-red-500 text-sm font-sans">{feedbackType}</p>
    </div>
  );
};

InputForm.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  feedbackType: PropTypes.string,
};

export default InputForm;
