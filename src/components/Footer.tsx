const Footer = () => {
  const footerLinks = [
    "About",
    "Download the X app",
    "Help Center",
    "Terms of Service",
    "Privacy Policy",
    "Cookie Policy",
    "Cookie Policy",
    "Accessibility",
    "Ads info",
    "Blog",
    "Careers",
    "Brand Resources",
    "Advertising",
    "Marketing",
    "X for Business",
    "Developers",
    "Directory",
    "Settings",
  ];

  return (
    <footer>
      <div className="flex justify-center items-center flex-wrap gap-2 text-sm text-twitter-gray mt-12">
        {footerLinks.map((link, index) => (
          <li key={index} className="list-none">
            <a href="#">{link}</a>
          </li>
        ))}
      </div>
      <p className="text-sm my-2 text-twitter-gray text-center">
        &copy; 2024 X Corp
      </p>
    </footer>
  );
};

export default Footer;
