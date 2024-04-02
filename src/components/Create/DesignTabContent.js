import React from 'react';
import { Select, Slider, Button } from 'antd';
import {
  EditOutlined,
  PictureOutlined,
  CloseOutlined,
  ArrowUpOutlined,
  VerticalAlignMiddleOutlined,
  ArrowDownOutlined,
  FacebookOutlined,
  FacebookFilled,
} from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare, faCircle } from '@fortawesome/free-regular-svg-icons';
import { faDiamond } from '@fortawesome/free-solid-svg-icons';
import { HuePicker } from 'react-color';

const { Option } = Select;

const DesignTabContent = ({ design, onUpdate }) => {
  // const handleChange = (e) => {
  //   onUpdate({ ...design, [e.target.name]: e.target.value });
  // };

  const handleFontChange = (value) => {
    onUpdate({ ...design, fontChange: value });
  };

  const handleColorChange = (color) => {
    onUpdate({ ...design, color: color.rgb });
  };

  const handleFontSizeChange = (value) => {
    onUpdate({ ...design, fontSize: value });
  };

  const handleLineSpacingChange = (value) => {
    onUpdate({ ...design, lineSpacing: value });
  };

  const handleSpaceFromEmail = (value) => {
    onUpdate({ ...design, spaceFromEmail: value });
  };

  const handleShapeChange = (shape) => {
    onUpdate({ ...design, imageShape: shape });
  };

  const handleImageSizeChange = (value) => {
    onUpdate({ ...design, imageSize: value });
  };

  const handlePositionChange = (position) => {
    onUpdate({ ...design, imagePosition: position });
  };

  return (
    <div className='container'>
      <div className='row'>
        <strong>Signature Style</strong> <br /> <br />
        <div className='row'>
          <div className='col'>Font</div>
          <div className='col'>
            <Select
              defaultValue={design.fontChange}
              style={{ width: 200, marginBottom: 10 }}
              onChange={handleFontChange}
            >
              <Option value='Courier New'>Courier New</Option>
              <Option value='arial'>Arial</Option>
              <Option value='Verdana'>Verdana</Option>
              <Option value='Georgia'>Georgia</Option>
              <Option value='Palatino'>Palatino</Option>
              <Option value='Lucida Sans'>Lucida Sans</Option>
              <Option value='Montserrat Alternates'>
                Montserrat Alternates
              </Option>
              <Option value='Roboto'>Roboto</Option>
              <Option value='MesloLGS NF'> MesloLGS NF </Option>
              <Option value='Times New Roman'>Times New Roman</Option>
            </Select>
          </div>
        </div>
        <br /> <br />
        <div className='row'>
          <div className='col'> Template Color</div>
          <div className='col'>
            <HuePicker
              color={design.color}
              onChange={handleColorChange}
            />
          </div>
        </div>
        <br /> <br /> <br />
        <div className='row'>
          <div className='col'>Font Scale</div>
          <div className='col'>
            <Slider
              min={6}
              max={22}
              defaultValue={design.fontSize}
              onChange={handleFontSizeChange}
            />
          </div>
        </div>
        <br /> <br />
        <div className='row'>
          <div className='col'>Line Spacing</div>
          <div className='col'>
            <Slider
              min={0.5}
              max={2.5}
              step={0.1}
              defaultValue={design.lineSpacing}
              onChange={handleLineSpacingChange}
            />
          </div>
        </div>
        <br /> <br />
        <div className='row'>
          <div className='col'>Space from email</div>
          <div className='col'>
            <Slider
              min={0.5}
              max={2}
              step={0.1}
              defaultValue={design.spaceFromEmail}
              onChange={handleSpaceFromEmail}
            />
          </div>
        </div>
        <br /> <br />
        <hr />
        <div>
          <strong>Images</strong> <br /> <br />
          <div className='row'>
            <div className='col'>Shape</div>
            <div className='col'>
              <Button
                onClick={() => handleShapeChange('circle')}
                icon={<FontAwesomeIcon icon={faCircle} />}
                style={
                  design.imageShape === 'circle' ? { color: '#659cea' } : {}
                }
              />
              <Button
                onClick={() => handleShapeChange('square')}
                icon={<FontAwesomeIcon icon={faSquare} />}
                style={
                  design.imageShape === 'square' ? { color: '#659cea' } : {}
                }
              />
              <Button
                onClick={() => handleShapeChange('diamond')}
                icon={<FontAwesomeIcon icon={faDiamond} />}
                style={
                  design.imageShape === 'diamond' ? { color: '#659cea' } : {}
                }
              />
            </div>
          </div>
          <br />
          <div className='row'>
            <div className='col'>Size</div>
            <div className='col'>
              <Slider
                min={24}
                max={180}
                step={2}
                defaultValue={design.imageSize}
                onChange={handleImageSizeChange}
              />
            </div>
          </div>
          <br />
          <div className='row'>
            <div className='col'>Position</div>
            <div className='col'>
              <Button
                onClick={() => handlePositionChange('up')}
                icon={<ArrowUpOutlined />}
                style={
                  design.imagePosition === 'up' ? { color: '#659cea' } : {}
                }
              />
              <Button
                onClick={() => handlePositionChange('mid')}
                icon={<VerticalAlignMiddleOutlined />}
                style={
                  design.imagePosition === 'mid' ? { color: '#659cea' } : {}
                }
              />
              <Button
                onClick={() => handlePositionChange('bottom')}
                icon={<ArrowDownOutlined />}
                style={
                  design.imagePosition === 'bottom' ? { color: '#659cea' } : {}
                }
              />
            </div>
          </div>
          <br />
        </div>
        <div>
          <strong>Social icons</strong> <br /> <br />
          <div className='row'>
            <div className='col'>Shape</div>
            <div className='col'>
              <Button
                onClick={() => handleShapeChange('circle')}
                icon={<EditOutlined />}
              />
              <Button
                onClick={() => handleShapeChange('square')}
                icon={<PictureOutlined />}
              />
              <Button
                onClick={() => handleShapeChange('none')}
                icon={<CloseOutlined />}
              />
            </div>
          </div>
          <br />
          <div className='row'>
            <div className='col'>Fill</div>
            <div className='col'>
              <Button
                onClick={() => handleShapeChange('FacebookOutlined')}
                icon={<FacebookOutlined />}
              />
              <Button
                onClick={() => handleShapeChange('FacebookFilled')}
                icon={<FacebookFilled />}
              />
            </div>
          </div>
          <br />
          <div className='row'>
            <div className='col'>Size</div>
            <div className='col'>
              <Slider
                min={0.5}
                max={2}
                step={0.1}
                defaultValue={0}
                style={{ marginBottom: 10 }}
              />
            </div>
          </div>
          <br />
          <div className='row'>
            <div className='col'>Space between</div>
            <div className='col'>
              <Slider
                min={0.5}
                max={2}
                step={0.1}
                defaultValue={0}
                style={{ marginBottom: 10 }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignTabContent;
