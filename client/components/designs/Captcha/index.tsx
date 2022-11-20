import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { Fragment, useEffect, useState } from 'react';
import Reaptcha from 'reaptcha';
import { CAPCHA_SITE_KEY } from '../../../static/vars.static';

interface CaptchaType {
  setVerified: any;
}

const ReaptchaParent = styled(Box)(() => ({
  margin: '15px',
  width: '100%',
}));

const Captcha = ({ setVerified }: CaptchaType) => {
  const [captchaReady, setCaptchaReady] = useState(false);
  const onVerify: any = (recaptchaResponse: any) => {
    setVerified(true);
  };

  const onLoad = () => {
    setCaptchaReady(true);
  };

  let captcha: any = null;

  useEffect(() => {
    if (captchaReady) {
      captcha.renderExplicitly();
    }
  }, [captcha, captchaReady]);

  return (
    <ReaptchaParent>
      <Reaptcha
        ref={(e) => (captcha = e)}
        onLoad={onLoad}
        explicit
        sitekey={CAPCHA_SITE_KEY}
        onVerify={onVerify}
      />
    </ReaptchaParent>
  );
};

export default Captcha;
