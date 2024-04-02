import React, { useEffect } from 'react';
import { Input } from 'antd';

const DetailsTabContent = ({ details, onUpdate, onBlur }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onUpdate({ ...details, [name]: value });
  };

  const handleInputBlur = (e, setState) => {
    const input = e.target;
    const label = input.parentNode.querySelector('.placeholder-label');

    if (input.value !== '') {
      label.style.top = '10px';
      label.style.fontSize = '9px';
      label.style.color = '#525050';
    } else {
      label.style.top = '43%';
      label.style.fontSize = '10px';
      label.style.color = '#474747';
    }
  };

  useEffect(() => {
    // Check if the inputs are pre-filled and adjust the placeholder labels
    const inputFields = document.querySelectorAll('.input');
    inputFields.forEach((input) => {
      const label = input.parentNode.querySelector('.placeholder-label');
      if (input.value !== '') {
        label.style.top = '10px';
        label.style.fontSize = '9px';
        label.style.color = '#525050';
      }
    });
  }, []); // Run only once after mounting

  return (
    <div className='input-container'>
      <div className='input-wrapper'>
        <Input
          name='name'
          className='input'
          value={details.name}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          style={{ marginBottom: 10 }}
        />
        <label
          htmlFor='name-input'
          className='placeholder-label'
        >
          Name
        </label>
      </div>
      <br />
      <div className='input-wrapper'>
        <Input
          name='title'
          className='input'
          value={details.title}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          style={{ marginBottom: 10 }}
        />
        <label className='placeholder-label'>Title</label>
      </div>
      <br />

      <div className='input-wrapper'>
        <Input
          name='company'
          className='input'
          value={details.company}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          style={{ marginBottom: 10 }}
        />
        <label className='placeholder-label'>Company</label>
      </div>
      <br />

      <div className='input-wrapper'>
        <Input
          name='phone'
          className='input'
          value={details.phone}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          style={{ marginBottom: 10 }}
        />
        <label className='placeholder-label'>Phone</label>
      </div>
      <br />

      <div className='input-wrapper'>
        <Input
          name='mobile'
          className='input'
          value={details.mobile}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          style={{ marginBottom: 10 }}
        />
        <label className='placeholder-label'>Mobile</label>
      </div>
      <br />

      <div className='input-wrapper'>
        <Input
          name='email'
          className='input'
          value={details.email}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          style={{ marginBottom: 10 }}
        />
        <label className='placeholder-label'>Email</label>
      </div>
      <br />

      <div className='input-wrapper'>
        <Input
          name='address'
          className='input'
          value={details.address}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          style={{ marginBottom: 10 }}
        />
        <label className='placeholder-label'>Address</label>
      </div>
      <br />

      <div className='input-wrapper'>
        <Input
          name='website'
          className='input'
          value={details.website}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          style={{ marginBottom: 10 }}
        />
        <label className='placeholder-label'>Website</label>
      </div>
      <br />
    </div>
  );
};

export default DetailsTabContent;
