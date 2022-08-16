import React from 'react';
import strings from '@constants/strings';
import { cls } from '@utils/tailwind.utils';
import { useRouter } from 'next/router';

const NavList = [
  {
    title: strings.MEMBER,
    list: [
      {
        label: strings.MANAGE_MEMBER,
        url: '/',
      },
    ],
  },
  {
    title: strings.POST,
    list: [
      {
        label: strings.TripTalk,
        url: '/url',
      },
      {
        label: strings.Qna,
        url: '/url',
      },
      {
        label: strings.MANAGE_COMMENT,
        url: '/url',
      },
    ],
  },
  {
    title: strings.MANAGE_REPORT,
    list: [
      {
        label: strings.REPORT_POST,
        url: '/url',
      },
      {
        label: strings.REPORT_COMMENT,
        url: '/url',
      },
    ],
  },
  {
    title: strings.CUSTOMER_SERVICE,
    list: [
      {
        label: strings.MANAGE_NOTICE,
        url: '/url',
      },
      {
        label: strings.MANAGE_YEOMI_NOTICE,
        url: '/url',
      },
    ],
  },
  {
    title: strings.TOPIC,
    list: [
      {
        label: strings.MANAGE_TOPIC,
        url: '/url',
      },
      {
        label: strings.MANAGE_TOPIC_SUGGESTIONS,
        url: '/url',
      },
    ],
  },
  {
    title: strings.MANAGE,
    list: [
      {
        label: strings.MANAGE_ADMIN,
        url: '/url',
      },
    ],
  },
];

function Nav() {
  const { pathname } = useRouter();

  return (
    <nav className="w-250 pt-20 border-r-1 border-grey-4">
      {NavList.map(({ title, list }) => (
        <div
          key={title}
          className="border-b-1 border-grey-4 last:border-none py-20">
          <div className="py-8 px-16">
            <p className="text-grey-6 text-b3">{title}</p>
          </div>
          {list.map(({ label, url }) => (
            <div key={label} className="py-8 px-16 pointer ">
              <p
                className={cls(
                  'text-h5',
                  url === pathname ? 'text-blue-7 bold' : 'text-grey-11',
                )}>
                {label}
              </p>
            </div>
          ))}
        </div>
      ))}
    </nav>
  );
}

export default Nav;
