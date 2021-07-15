const footerContent = {
    linkList: [
        {
          text: 'contact', // custom
          modalContent: {
            text: 'lomoulolo@gmail.com',
          }
        },
        {
          text: 'blueprint',
          subLinkList: [
            {
              text: 'Terms',
              href: '/documentation',
              icon: {
                path: '/static/icons/wireless-charging.svg',
                alt: 'Charging',
              },
            },
            {
              text: 'Shipping Policy',
              href: '/documentation',
              icon: {
                path: '/static/icons/wireless-charging.svg',
                alt: 'Charging',
              },
            },
            {
              text: 'Privacy Policy',
              href: '/documentation',
              icon: {
                path: '/static/icons/wireless-charging.svg',
                alt: 'Charging',
              },
            },
          ],
        },
        {
          text: 'hello',
          subLinkList: [
            {
              text: 'Jawnz',
              href: '/documentation',
              icon: {
                path: '/static/icons/wireless-charging.svg',
                alt: 'Charging',
              },
            }
          ]
        }
    ],
};

export default footerContent;