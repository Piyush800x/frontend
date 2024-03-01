import { Footer, FooterBrand, FooterCopyright, FooterDivider, FooterLink, FooterLinkGroup } from 'flowbite-react';

function Component() {
  return (
    <Footer container>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <FooterBrand
            href="/"
            src="https://flowbite.com/docs/images/logo.svg"
            alt="Logo"
            name="DeepOcean"
          />
          <FooterLinkGroup>
            <FooterLink href="/about">About</FooterLink>
            <FooterLink href="/newsletter">NewsLetter</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
          </FooterLinkGroup>
        </div>
        {/* <FooterDivider /> */}
        <FooterCopyright href="/contact" by="DeepOcean™" year={2024} />
      </div>
    </Footer>
  );
}

export default Component
