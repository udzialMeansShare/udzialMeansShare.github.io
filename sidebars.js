// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Welcome',
      collapsed: false,
      items: ['intro']
    },
    {
      type: 'category',
      label: 'Testing',
      collapsed: false,
      items: ['testing/fundamentals', 'testing/strategy']
    },
    {
      type: 'category',
      label: 'Automation',
      collapsed: false,
      items: ['automation/playwright', 'automation/selenium']
    },
    {
      type: 'category',
      label: 'AI',
      collapsed: true,
      items: ['ai/prompt-library', 'ai/copilot']
    }
  ]
};

module.exports = sidebars;
