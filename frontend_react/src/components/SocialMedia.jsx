import React from 'react';
import { BsTwitter, BsInstagram, BsGithub } from 'react-icons/bs';

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <a href='https://twitter.com/aj_sizzle' target='_blank' rel='noreferrer'>
        <div>
          <BsTwitter />
        </div>
      </a>
      <a href='https://github.com/ajsizzle' target='_blank' rel='noreferrer'>
        <div>
          <BsGithub />
        </div>
      </a>
      <a
        href='https://instagram.com/aj_sizzle'
        target='_blank'
        rel='noreferrer'
      >
        <div>
          <BsInstagram />
        </div>
      </a>
    </div>
  );
};

export default SocialMedia;
