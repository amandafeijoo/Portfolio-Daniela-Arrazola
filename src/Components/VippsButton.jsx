import React, { useEffect } from 'react';

const VippsButton = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.vipps.no/checkout-button/v1/vipps-checkout-button.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
          <vipps-mobilepay-button
            brand="vipps"
            variant="primary"
            language="no"
            rounded="false"
            verb="pay"
            stretched="false"
            branded="false"
          ></vipps-mobilepay-button>
        `,
      }}
    />
  );
};

export default VippsButton;