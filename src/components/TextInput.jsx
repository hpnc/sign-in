import { memo, useCallback, useEffect, useState } from 'react';

// eslint-disable-next-line react/prop-types
const TextInput = memo(({ label, value, onChange, ...props }) => {
   const [inputValue, setInputValue] = useState('');

   useEffect(() => {
      setInputValue(value);
   }, [value]);

   const handleChange = useCallback((e) => {
      const value = e.target.value;
      setInputValue(value);
      onChange && onChange(value);
   }, [onChange]);

   return (
      <>
         {
            label && <div className="label">{label}</div>
         }
         <input
            // eslint-disable-next-line react/prop-types
            className={`common-input ${props.className || ''}`}
            value={inputValue}
            onChange={handleChange}
            {...props}
         />
      </>

   );
});

TextInput.displayName = 'TextInput';
export default TextInput;
