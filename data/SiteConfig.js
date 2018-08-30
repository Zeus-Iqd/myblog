module.exports = {
  siteTitle: "个人博客", // Site title.
  siteTitleShort: "GM Starter", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "GatsbyJS Material Starter", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://github.com/Zeus-Iqd", // Domain of your website without pathPrefix.
  pathPrefix: "/myblog", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
  siteDescription: "A GatsbyJS stater with Material design in mind.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  siteGATrackingID: "UA-47311644-4", // Tracking code ID for google analytics.
  disqusShortname: "https-vagr9k-github-io-gatsby-material-starter", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  userName: "Material User", // Username to display in the author segment.
  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "North Pole, Earth", // User location to display in the author segment.
  userAvatar: "https://api.adorable.io/avatars/150/test.png", // User avatar to display in the author segment.
  userDescription:
    "Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/Zeus-Iqd",
      iconClassName: "fa fa-github"
    },
    // {
    //   label: "Twitter",
    //   url: "https://twitter.com/Vagr9K",
    //   iconClassName: "fa fa-twitter"
    // },
    {
      label: "Email",
      url: "mailto:zeusIqd@163.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2017. Material User" // Copyright string for the footer of the website and RSS feed.
};
