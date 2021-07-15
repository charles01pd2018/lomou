const headerContent = {
    buttonList: [
        {
          text: 'Shop', // regular link
          href: '/shop',
        },
        {
          text: 'Explore', // dropdown link
          linkList: [
            {
              text: 'Blog',
              href: '/blog',
              icon: {
                path: '/static/icons/wireless-charging.svg',
                alt: 'Charging',
              },
              subLinkList: [
                {
                  text: 'Qi Wireless Charging',
                  descriptionText: 'Learn about the Qi Standard',
                  href: '/blog/qi-charging',
                  icon: {
                    path: '/static/icons/wireless-charging.svg',
                    alt: 'Charging',
                  },
                },
                {
                  text: 'Materials',
                  descriptionText: 'Learn about the materials',
                  href: '/blog/materials',
                  icon: {
                    path: '/static/icons/wireless-charging.svg',
                    alt: 'Charging',
                  },
                },
                {
                  text: 'More Jawnz',
                  descriptionText: 'Learn about the more jawnz',
                  href: '/blog/more-jawnz',
                  icon: {
                    path: '/static/icons/wireless-charging.svg',
                    alt: 'Charging',
                  },
                },
              ],
            },
            {
              text: 'About',
              href: '/about',
              icon: {
                path: '/static/icons/wireless-charging.svg',
                alt: 'Charging',
              },
              subLinkList: [
                {
                  text: 'Company Mission',
                  descriptionText: 'Learn about the company mission',
                  href: '/about/company-mission',
                  icon: {
                    path: '/static/icons/wireless-charging.svg',
                    alt: 'Charging',
                  },
                },
                {
                  text: 'Beliefs',
                  descriptionText: 'Learn about the beliefs',
                  href: '/about/beliefs',
                  icon: {
                    path: '/static/icons/wireless-charging.svg',
                    alt: 'Charging',
                  },
                },
                {
                  text: 'Methodology',
                  descriptionText: 'Learn about the methodology',
                  href: '/about/methodology',
                  icon: {
                    path: '/static/icons/wireless-charging.svg',
                    alt: 'Charging',
                  },
                },
              ],
            }
          ],
        },
    ],
};

export default headerContent;