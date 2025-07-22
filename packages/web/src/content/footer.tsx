import yaml from "yaml";

const footerContent = `
title: CosmoFusion DAO
description: CosmoFusion DAO — your decentralized cloud for ZK
buttonText: Work with us
buttonLink: https://t.me/zkcloud_io
buttonText2: Contact us
buttonLink2: https://t.me/zkcloud_io
linksTitle: Explore
links:
  - text: Get Started
    link: https://t.me/zkcloud_io
  - text: Partners
    link: https://x.com/zkcloud_io
  - text: About us
    link: https://discord.gg/zkcloud
  - text: Media and Events
    link: https://galxe.com/zkcloud
  - text: Docs
    link: https://galxe.com/
moreTitle: More
more:
  - text: Gevulot Labs
    link: https://t.me/zkcloud_io
  - text: Explorer
    link: https://x.com/zkcloud_io
  - text: Blog
    link: https://discord.gg/zkcloud
  - text: Github
    link: https://galxe.com/zkcloud
  - text: Node Rental & Node Operator Token Grant Terms
    link: https://galxe.com/zkcloud
  - text: Whitepaper
    link: https://galxe.com/zkcloud
  - text: Desclaimer & updates
    link: https://galxe.com/zkcloud
socialLinks:
  - text: Telegram
    link: https://t.me/zkcloud_io
  - text: X
    link: https://x.com/zkcloud_io
  - text: Discord
    link: https://discord.gg/zkcloud
  - text: Galxe
    link: https://galxe.com/zkcloud
subscribeText: Subscribe to our newsletter
subscribePlaceholder: Enter your email
subscribeButton: →
subscribePrivacyPolicy: We care about your data. Read our privacy policy.
subscribePrivacyPolicyLink: https://galxe.com/zkcloud
copyright: ©2025 ZkCloud. All rights reserved.
privacyPolicy: Privacy Policy
backToTop: Back to the top
backToTopLink: https://galxe.com/zkcloud
backToTopLinkText: ↑
`

export default yaml.parse(footerContent);