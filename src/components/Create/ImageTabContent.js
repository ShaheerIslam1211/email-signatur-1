import React, { useState } from 'react';
import { Button, Upload } from 'antd';
import { PlusOutlined, PlayCircleOutlined } from '@ant-design/icons';

const ImageTabContent = ({ image, onUpdate }) => {
  const [fileList, setFileList] = useState([]);

  const handleImageUpdate = (updatedImage) => {
    onUpdate({ ...image, imageUrl: updatedImage });
  };

  const handleChange = (info) => {
    console.log('File change event:', info);

    const fileList = [...info.fileList];
    if (fileList.length > 0) {
      const file = fileList[0].originFileObj;
      const reader = new FileReader();
      reader.onload = () => {
        handleImageUpdate(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      handleImageUpdate(null); // Reset image if file is removed
    }

    setFileList(fileList.slice(-1)); // Limit uploaded files to 1
  };

  const handleRemove = () => {
    setFileList([]);
    // Clear imageUrl in state when removing the image
    handleImageUpdate(null);
  };

  return (
    <div className='editor-images-tab'>
      <div className='editor-image border-dashed'>
        <div
          id='details_photo'
          className='editor-image-tltp-target'
        >
          &nbsp;
        </div>

        <div className='upload-image-container'>
          <Upload
            action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
            listType='picture-card'
            fileList={fileList}
            onChange={handleChange}
            onRemove={handleRemove}
          >
            {fileList.length === 0 && (
              <Button
                icon={<PlusOutlined />}
                style={{ marginTop: 185 }}
              >
                Upload Photo or Logo
              </Button>
            )}
          </Upload>
          <br /> <br /> <br />
          <div className='upload-image-container-tip'>
            Image should be at least 100 X 100px
          </div>
        </div>
      </div>
      <div className='editor-image-tab-actions'>
        <Button icon={<PlayCircleOutlined />}>Animate</Button>
      </div>
    </div>
  );
};

export default ImageTabContent;
