import React, { useEffect } from 'react';
import { Input } from 'antd';
import {
  LinkedinFilled,
  InstagramFilled,
  FacebookFilled,
  GithubFilled,
  DiscordFilled,
  SlackCircleFilled,
  YoutubeFilled,
  TwitterCircleFilled,
} from '@ant-design/icons';

const SocialTabContent = ({ social, onUpdate, onBlur }) => {
  const handleChange = (e) => {
    onUpdate({ ...social, [e.target.name]: e.target.value });
  };

  const handleSocialInputBlur = (e) => {
    const input = e.target;
    const label = input.parentNode.parentElement.querySelector(
      '.social-placeholder-label'
    );

    if (input.value !== '') {
      label.style.top = '10px';
      label.style.fontSize = '9px';
      label.style.color = '#525050';
    } else {
      label.style.top = '36%';
      label.style.fontSize = '10px';
      label.style.color = '#474747';
    }
  };

  useEffect(() => {
    // Check if the inputs are pre-filled and adjust the placeholder labels
    const inputFields = document.querySelectorAll('.social_input');
    inputFields.forEach((input) => {
      const label = input.parentNode.querySelector('.social-placeholder-label');
      if (input.value !== '') {
        label.style.top = '10px';
        label.style.fontSize = '9px';
        label.style.color = '#525050';
      }
    });
  }, []); // Run only once after mounting

  return (
    <>
      <div className='input-container'>
        <div className='input-wrapper'>
          <Input
            name='linkedin'
            className='social_input'
            value={social.linkedin || ''}
            onChange={handleChange}
            onBlur={handleSocialInputBlur}
            prefix={
              <LinkedinFilled style={{ fontSize: '30px', color: '#0077B5' }} />
            }
          />
          <label className='social-placeholder-label'>
            Linkedin Profile URL
          </label>
        </div>

        <div className='input-wrapper'>
          <Input
            name='instagram'
            className='social_input'
            value={social.instagram || ''}
            onChange={handleChange}
            onBlur={handleSocialInputBlur}
            prefix={
              <InstagramFilled style={{ fontSize: '30px', color: '#F56040' }} />
            }
          />
          <label className='social-placeholder-label'>Instagram Username</label>
        </div>

        <div className='input-wrapper'>
          <Input
            name='facebook'
            className='social_input'
            value={social.facebook || ''}
            onChange={handleChange}
            onBlur={handleSocialInputBlur}
            prefix={
              <FacebookFilled style={{ fontSize: '30px', color: '#3B5998' }} />
            }
          />
          <label className='social-placeholder-label'>Facebook URL</label>
        </div>

        <div className='input-wrapper'>
          <Input
            name='github'
            className='social_input'
            value={social.github || ''}
            onChange={handleChange}
            onBlur={handleSocialInputBlur}
            prefix={
              <GithubFilled style={{ fontSize: '30px', color: '#333' }} />
            }
          />
          <label className='social-placeholder-label'>Github URL</label>
        </div>

        <div className='input-wrapper'>
          <Input
            name='discord'
            className='social_input'
            value={social.discord || ''}
            onChange={handleChange}
            onBlur={handleSocialInputBlur}
            prefix={
              <DiscordFilled style={{ fontSize: '30px', color: '#5865F2' }} />
            }
          />
          <label className='social-placeholder-label'>Discord URL</label>
        </div>

        <div className='input-wrapper'>
          <Input
            name='slack'
            className='social_input'
            value={social.slack || ''}
            onChange={handleChange}
            onBlur={handleSocialInputBlur}
            prefix={
              <SlackCircleFilled
                style={{ fontSize: '30px', color: '#4A154B' }}
              />
            }
          />
          <label className='social-placeholder-label'>Slack URL</label>
        </div>

        <div className='input-wrapper'>
          <Input
            name='youtube'
            className='social_input'
            value={social.youtube || ''}
            onChange={handleChange}
            onBlur={handleSocialInputBlur}
            prefix={
              <YoutubeFilled style={{ fontSize: '30px', color: '#CD201F' }} />
            }
          />
          <label className='social-placeholder-label'>Youtube URL</label>
        </div>

        <div className='input-wrapper'>
          <Input
            name='twitter'
            className='social_input'
            value={social.twitter || ''}
            onChange={handleChange}
            onBlur={handleSocialInputBlur}
            prefix={
              <TwitterCircleFilled
                style={{ fontSize: '30px', color: '#000000' }}
              />
            }
          />
          <label className='social-placeholder-label'>Twitter Handle</label>
        </div>
      </div>
    </>
  );
};

export default SocialTabContent;
