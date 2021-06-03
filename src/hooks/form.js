import { useState } from 'react';

const useForm = (callback) => {

  const [item, setItem] = useState({});

  const handleInputChange = e => {
    setItem({...item, [e.target.name]: e.target.value});
  };

  const _handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    callback(item);
  };

  return [
    _handleSubmit,
    handleInputChange,
    item
  ]
}

export default useForm;
