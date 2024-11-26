import { Suspense } from 'react';
import { Await, NavLink, useAsyncValue } from '@remix-run/react';
import { useAnalytics, useOptimisticCart } from '@shopify/hydrogen';
import { useAside } from '~/components/Aside';
import React from 'react'
import rect from '../assets/rect.png'
import logo from '../assets/logo.png'
import user from '../assets/user.png'
import cartx from '../assets/cart.png'

/**
 * @param {HeaderProps}
 */
export function Header({ header, isLoggedIn, cart, publicStoreDomain }) {
  const { shop, menu } = header;
  return (
    <>
      <header className='bigger-navbar bg-[#FAF7EB]'>
        <div className="banner lg:mx-[43px] relative">
          <div className="w-full h-full">
            <NavLink prefetch="intent" to="/" style={activeLinkStyle} end>
              <img src={rect} alt="" className="w-full lg:pt-[47px]  h-[400px]  lg:h-auto  object-cover pt-[20px] " />
            </NavLink>
          </div>
          <div className="lg:absolute lg:top-[47px] lg:left-0 absolute top-0 left-0 rounded-t-[50px]  right-0 h-[90px] bannerx  lg:block hidden " >
            <div className="text-white flex justify-between  px-[200px] items-center pt-[10px]">
              <div>
                <img src={logo} alt="" className='opacity-100' />
              </div>
              <div className="flex gap-5 text-[18px] font-bold items-center">
                <HeaderMenu
                  menu={menu}
                  viewport="desktop"
                  primaryDomainUrl={header.shop.primaryDomain.url}
                  publicStoreDomain={publicStoreDomain}
                />
              </div>
              <div className="flex gap-5">
                <HeaderCtas isLoggedIn={isLoggedIn} cart={cart} />
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className="header mobile-header" >
        <NavLink prefetch="intent" to="/" style={activeLinkStyle} end>
          <img src={logo} alt="" className='h-[50px]' />
        </NavLink>
        <HeaderMenu
          menu={menu}
          viewport="desktop"
          primaryDomainUrl={header.shop.primaryDomain.url}
          publicStoreDomain={publicStoreDomain}
        />
        <HeaderCtas isLoggedIn={isLoggedIn} cart={cart} />
      </header>
    </>
  );
}

/**
 * @param {{
 *   menu: HeaderProps['header']['menu'];
 *   primaryDomainUrl: HeaderProps['header']['shop']['primaryDomain']['url'];
 *   viewport: Viewport;
 *   publicStoreDomain: HeaderProps['publicStoreDomain'];
 * }}
 */
export function HeaderMenu({
  menu,
  primaryDomainUrl,
  viewport,
  publicStoreDomain,
}) {
  const className = `header-menu-${viewport}`;
  const { close } = useAside();

  return (
    <nav className={className} role="navigation">
      {viewport === 'mobile' && (
        <NavLink
          end
          onClick={close}
          prefetch="intent"
          style={activeLinkStyle}
          to="/"
        >
          Home
        </NavLink>
      )}
      {(menu || FALLBACK_HEADER_MENU).items.map((item) => {
        if (!item.url) return null;

        // if the url is internal, we strip the domain
        const url =
          item.url.includes('myshopify.com') ||
            item.url.includes(publicStoreDomain) ||
            item.url.includes(primaryDomainUrl)
            ? new URL(item.url).pathname
            : item.url;
        return (
          <NavLink
            className="header-menu-item"
            end
            key={item.id}
            onClick={close}
            prefetch="intent"
            style={activeLinkStyle}
            to={url}
          >
            {item.title}
          </NavLink>
        );
      })}
    </nav>
  );
}

/**
 * @param {Pick<HeaderProps, 'isLoggedIn' | 'cart'>}
 */
function HeaderCtas({ isLoggedIn, cart }) {
  return (
    <nav className="header-ctas" role="navigation">
      <HeaderMenuMobileToggle />
      <NavLink prefetch="intent" to="/account" style={activeLinkStyle}>
        <Suspense fallback="Sign in">
          <Await resolve={isLoggedIn} errorElement="Sign in">
            {(isLoggedIn) => (isLoggedIn ? <>
              <img src={user} alt="" className="lg:w-[35px] lg:h-[35px] w-[30px] h-[30px]" />
            </>
              : <>
                <img src={user} alt="" className="lg:w-[35px] lg:h-[35px] w-[30px] h-[30px" />
              </>
            )}
          </Await>
        </Suspense>
      </NavLink>
      <SearchToggle />
      <CartToggle cart={cart} />
    </nav>
  );
}

function HeaderMenuMobileToggle() {
  const { open } = useAside();
  return (
    <button
      className="header-menu-mobile-toggle reset"
      onClick={() => open('mobile')}
    >
      <h3>☰</h3>
    </button>
  );
}

function SearchToggle() {
  const { open } = useAside();
  return (
    <button className="reset lg:flex hidden hover:cursor-pointer" onClick={() => open('search')}>
      <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="white" className="bi bi-search fill-white w-[30px] h-[30px] lg:w-[35px] lg:h-[35px] " viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
      </svg>
    </button>
  );
}

/**
 * @param {{count: number | null}}
 */
function CartBadge({ count }) {
  const { open } = useAside();
  const { publish, shop, cart, prevCart } = useAnalytics();

  return (
    <a
      href="/cart"
      onClick={(e) => {
        e.preventDefault();
        open('cart');
        publish('cart_viewed', {
          cart,
          prevCart,
          shop,
          url: window.location.href || '',
        });
      }}
      className='flex'
    >
      <img src={cartx} alt="" className="lg:w-[35x] lg:h-[35px] w-[30px] h-[30px]" />
      {count === null ? <span>&nbsp;</span> : count}
    </a>
  );
}

/**
 * @param {Pick<HeaderProps, 'cart'>}
 */
function CartToggle({ cart }) {
  return (
    <Suspense fallback={<CartBadge count={null} />}>
      <Await resolve={cart}>
        <CartBanner />
      </Await>
    </Suspense>
  );
}

function CartBanner() {
  const originalCart = useAsyncValue();
  const cart = useOptimisticCart(originalCart);
  return <CartBadge count={cart?.totalQuantity ?? 0} />;
}

const FALLBACK_HEADER_MENU = {
  id: 'gid://shopify/Menu/199655587896',
  items: [
    {
      id: 'gid://shopify/MenuItem/461609500728',
      resourceId: null,
      tags: [],
      title: 'Collections',
      type: 'HTTP',
      url: '/collections',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461609533496',
      resourceId: null,
      tags: [],
      title: 'Blog',
      type: 'HTTP',
      url: '/blogs/journal',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461609566264',
      resourceId: null,
      tags: [],
      title: 'Policies',
      type: 'HTTP',
      url: '/policies',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461609599032',
      resourceId: 'gid://shopify/Page/92591030328',
      tags: [],
      title: 'About',
      type: 'PAGE',
      url: '/pages/about',
      items: [],
    },
  ],
};

/**
 * @param {{
 *   isActive: boolean;
 *   isPending: boolean;
 * }}
 */
function activeLinkStyle({ isActive, isPending }) {
  return {
    fontWeight: isActive ? 'bold' : undefined,
    color: isPending ? 'grey' : 'black',
  };
}

/** @typedef {'desktop' | 'mobile'} Viewport */
/**
 * @typedef {Object} HeaderProps
 * @property {HeaderQuery} header
 * @property {Promise<CartApiQueryFragment|null>} cart
 * @property {Promise<boolean>} isLoggedIn
 * @property {string} publicStoreDomain
 */

/** @typedef {import('@shopify/hydrogen').CartViewPayload} CartViewPayload */
/** @typedef {import('storefrontapi.generated').HeaderQuery} HeaderQuery */
/** @typedef {import('storefrontapi.generated').CartApiQueryFragment} CartApiQueryFragment */
