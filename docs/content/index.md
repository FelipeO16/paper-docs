\# Paper-UI Documentation

\## Introduction

**Paper-UI** is a custom UI component library designed for use with Nuxt 3. The library provides visually appealing and interactive components, such as accordions and tabs, with a hand-drawn aesthetic.

This guide will walk you through how to set up and use the library in your Nuxt Studio project.

\---

\## Installation

1\. Add the `paper-ui` module to your Nuxt project:

\`\`\`bash

npm install paper-ui

\`\`\`

2\. Update your `nuxt.config.ts` to include the `paper-ui` module:

\`\`\`ts

export default defineNuxtConfig({

modules: \[

'paper-ui'

]

})

\`\`\`

3\. Restart your development server:

\`\`\`bash

npm run dev

\`\`\`

\---

\## Usage

\### 1. Accordion Component

The Accordion component is used to display collapsible sections.

\#### Example:

\`\`\`vue

\<template>

\<Accordion \:items="accordionItems" />

\</template>

\<script setup>

const accordionItems = \[

{ title: 'Section 1', content: 'Content for section 1' },

{ title: 'Section 2', content: 'Content for section 2' },

{ title: 'Section 3', content: 'Content for section 3' }

]

\</script>

\`\`\`

\#### Props:

\| Prop | Type | Description |

\|--------|---------|-----------------------------------|

\| items | Array | Array of objects with `title` and `content` keys. |

\---

\### 2. Tabs Component

The Tabs component is used to organize content into separate panels.

\#### Example:

\`\`\`vue

\<template>

\<Tabs \:tabs="tabs">

\<template #tab="{ tab }">

\<div class="tab-header">

\<tab.icon />

\<span>{{ tab.label }}\</span>

\</div>

\</template>

\<template #content="{ tab }">

\<div>{{ tab.content }}\</div>

\</template>

\</Tabs>

\</template>

\<script setup>

import { IconBook } from 'vue-icons'

const tabs = \[

{ label: 'Tab 1', content: 'Content for Tab 1', icon: IconBook },

{ label: 'Tab 2', content: 'Content for Tab 2', icon: IconBook },

{ label: 'Tab 3', content: 'Content for Tab 3', icon: IconBook }

]

\</script>

\`\`\`

\#### Props:

\| Prop | Type | Description |

\|--------|---------|---------------------------------------------|

\| tabs | Array | Array of objects with `label`, `content`, and `icon` keys. |

\---

\### Customization

Each component has scoped styles that you can override or extend using Tailwind CSS.

Example:

\`\`\`css

.tabs {

@apply border-b;

}

.tab-item {

@apply text-gray-500;

}

\`\`\`

\---

\## Contributing

We welcome contributions! If you'd like to report a bug or suggest a feature, please open an issue on our \[GitHub repository]\(https\://github.com/your-username/paper-ui).

\---

\## License

This project is licensed under the MIT License. See the \[LICENSE]\(LICENSE) file for details.
