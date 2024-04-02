import React, { useState, useRef, useEffect } from 'react';
import { Button } from 'antd';
import { DownloadOutlined, CopyOutlined } from '@ant-design/icons';
import {
  copySignatureToClipboard,
  downloadSignatureAsImage,
} from '../../functions/card';
import './create.css';

const Signature = ({ signatureData, onUpdate }) => {
  const { design = {}, details = {}, image = {}, social = {} } = signatureData;

  const [inputFile, setInputFile] = useState(image.imageUrl);
  const signatureRef = useRef(null);

  const handleCopySignature = () => {
    copySignatureToClipboard(signatureRef);
  };

  const handleDownloadImage = () => {
    downloadSignatureAsImage(signatureRef);
  };

  useEffect(() => {
    setInputFile(image.imageUrl); // Update inputFile state when imageUrl changes
  }, [image.imageUrl]);

  const {
    name = '',
    title = '',
    company = '',
    phone = '',
    mobile = '',
    website = '',
    email = '',
    address = '',
  } = details;

  const {
    fontSize = 12,
    lineSpacing = 1.5,
    fontChange = 'arial',
    colorChange = '#000000',
    imageShape = 'square',
    imageSize = 80,
    // imagePosition = 'mid',
  } = design;

  const {
    linkedin = '',
    instagram = '',
    facebook = '',
    github = '',
    slack = '',
    discord = '',
    youtube = '',
    twitter = '',
  } = social;

  const handleSignatureChange = () => {
    // Perform any necessary actions with the updated signature data
    // To debug issues commented can be uncommented to debug issues
    // console.log('Signature data updated:', signatureData);
  };

  // Call handleSignatureChange whenever signatureData updates
  React.useEffect(() => {
    handleSignatureChange();
  }, [signatureData]);

  return (
    <>
      <div
        className={`initial-div border-div ${inputFile ? 'with-image' : ''}`}
        style={{ fontSize: `${fontSize}px` }}
        ref={signatureRef}
      >
        <div className='content-wrapper'>
          <div
            className='col'
            style={{ display: 'flex' }}
          >
            {inputFile && (
              <div
                className='ws-tpl-photo content'
                style={{
                  width: `${imageSize}px`,
                  height: `${imageSize}px`,
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                    clipPath:
                      imageShape === 'diamond'
                        ? 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
                        : 'none',
                  }}
                >
                  <img
                    src={inputFile}
                    alt='email_photo'
                    className='profile-pic-cell'
                    style={{
                      borderRadius: imageShape === 'circle' ? '50%' : '0',
                      width: 'auto',
                      height: 'auto',
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
              </div>
            )}
            <div
              className='content'
              style={{
                lineHeight: `${lineSpacing}`,
                fontSize: `${fontSize}`,
              }}
            >
              <span
                style={{
                  fontFamily: `${fontChange}`,
                  fontWeight: 'Bold',
                }}
              >
                {name}
              </span>
              <br />
              <span
                style={{
                  fontFamily: `${fontChange}`,
                }}
              >
                {title}
              </span>
              <span
                style={{
                  fontFamily: `${fontChange}`,
                }}
              >
                {company}
              </span>
              <br /> <br />
              <span className='mr-2'>
                {mobile && (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill={colorChange}
                    className='bi bi-phone'
                    viewBox='0 0 16 16'
                  >
                    <path d='M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z' />
                    <path d='M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2' />
                  </svg>
                )}
                <span
                  className='ml-1'
                  style={{
                    verticalAlign: 'middle',
                    fontFamily: `${fontChange}`,
                  }}
                >
                  {mobile}
                </span>
              </span>
              <span>
                {phone && (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill={colorChange}
                    className='bi bi-telephone-inbound'
                    viewBox='0 0 16 16'
                  >
                    <path d='M15.854.146a.5.5 0 0 1 0 .708L11.707 5H14.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793L15.146.146a.5.5 0 0 1 .708 0m-12.2 1.182a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z' />
                  </svg>
                )}
                {phone && (
                  <span
                    className='ml-1'
                    style={{
                      verticalAlign: 'middle',
                      fontFamily: `${fontChange}`,
                    }}
                  >
                    {phone}
                  </span>
                )}
              </span>
              <br />
              <span>
                {email && (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill={colorChange}
                    className='bi bi-envelope-at'
                    viewBox='0 0 16 16'
                  >
                    <path d='M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z' />
                    <path d='M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z' />
                  </svg>
                )}
                {email && (
                  <span
                    className='ml-1'
                    style={{
                      verticalAlign: 'middle',
                      fontFamily: `${fontChange}`,
                    }}
                  >
                    {email}
                  </span>
                )}
              </span>
              <br />
              <span>
                {address && (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill={colorChange}
                    className='bi bi-geo-alt'
                    viewBox='0 0 16 16'
                  >
                    <path d='M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10' />
                    <path d='M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6' />
                  </svg>
                )}
                {address && (
                  <span
                    className='ml-1'
                    style={{
                      verticalAlign: 'middle',
                      fontFamily: `${fontChange}`,
                    }}
                  >
                    {address}
                  </span>
                )}
              </span>
              <br />
              <span
                style={{
                  fontFamily: `${fontChange}`,
                }}
              >
                {website && (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill={colorChange}
                    className='bi bi-globe-americas'
                    viewBox='0 0 16 16'
                  >
                    <path d='M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484q-.121.12-.242.234c-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z' />
                  </svg>
                )}
                {website && (
                  <span
                    className='ml-1'
                    style={{
                      verticalAlign: 'middle',
                      fontFamily: `${fontChange}`,
                      fontWeight: 'Bold',
                    }}
                  >
                    {website}
                  </span>
                )}
              </span>
              <div style={{ display: 'flex', marginLeft: 1, marginTop: 13 }}>
                {linkedin && (
                  <a
                    href={`https://www.linkedin.com/in/${linkedin}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <span
                      className='icon'
                      style={{
                        color: '#0077B5',
                        paddingRight: '6px',
                        textAlign: 'center',
                        paddingTop: '0',
                        fontSize: '22px',
                      }}
                    >
                      &#xf08c;
                    </span>
                  </a>
                )}

                {instagram && (
                  <a
                    href={`https://www.instagram.com/${instagram}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <span
                      className='icon'
                      style={{
                        color: '#F56040',
                        paddingRight: '6px',
                        textAlign: 'center',
                        paddingTop: '0',
                        fontSize: '22px',
                      }}
                    >
                      &#xf16d;
                    </span>
                  </a>
                )}

                {facebook && (
                  <a
                    href={`https://www.facebook.com/${facebook}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <span
                      className='icon'
                      style={{
                        color: '#3B5998',
                        paddingRight: '6px',
                        textAlign: 'center',
                        paddingTop: '0',
                        fontSize: '22px',
                      }}
                    >
                      &#xf082;
                    </span>
                  </a>
                )}

                {github && (
                  <a
                    href={`https://www.github.com/${github}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <span
                      className='icon'
                      style={{
                        color: '#333',
                        paddingRight: '6px',
                        textAlign: 'center',
                        paddingTop: '0',
                        fontSize: '22px',
                      }}
                    >
                      &#xf09b;
                    </span>
                  </a>
                )}

                {discord && (
                  <a
                    href={`https://www.discord.com/${discord}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <span
                      className='icon'
                      style={{
                        color: '#5865F2',
                        paddingRight: '6px',
                        textAlign: 'center',
                        paddingTop: '0',
                        fontSize: '22px',
                      }}
                    >
                      &#xF300;
                    </span>
                  </a>
                )}
                {slack && (
                  <a
                    href={`https://www.${slack}.slack.com`}
                    style={{ textDecoration: 'none' }}
                  >
                    <span
                      className='icon'
                      style={{
                        color: '#4A154B',
                        paddingRight: '6px',
                        textAlign: 'center',
                        paddingTop: '0',
                        fontSize: '22px',
                      }}
                    >
                      &#xf198;
                    </span>
                  </a>
                )}

                {youtube && (
                  <a
                    href={`https://www.youtube.com/user/${youtube}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <span
                      style={{
                        color: '#CD201F',
                        paddingRight: '6px',
                        textAlign: 'center',
                        paddingTop: '0',
                        fontSize: '22px',
                      }}
                    >
                      &#xf167;
                    </span>
                  </a>
                )}

                {twitter && (
                  <a
                    href={`https://twitter.com/${twitter}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <span
                      style={{
                        paddingRight: '6px',
                        textAlign: 'center',
                        paddingTop: '0',
                        fontSize: '22px',
                        color: 'Black',
                      }}
                    >
                      &#xf099;
                    </span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='signature-container'>
        <Button
          className='signature-buttons'
          type='default'
          shape='round'
          icon={<DownloadOutlined />}
          onClick={handleDownloadImage}
          size={'middle'}
          style={{ backgroundColor: 'blueviolet' }}
        >
          Download Image
        </Button>

        <Button
          className='ml-2'
          type='default'
          shape='round'
          icon={<CopyOutlined />}
          onClick={handleCopySignature}
          size={'middle'}
          style={{ backgroundColor: 'darkcyan', color: 'white' }}
        >
          Copy Signature
        </Button>
      </div>
    </>
  );
};

export default Signature;
