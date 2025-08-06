
Bane Stack
The file.io-Android-Client project offers a seamless solution for secure file uploads on Android devices. Key features include easy file sharing, encrypted URLs, and notification alerts. This open-source project caters to developers seeking a reliable and privacy-focused file transfer solution for their mobile applications.
      
TOC
I.  Overview
II.  Tech
III.  Project Structure 
IV.  Getting Started
V.  Project Roadmap
VI.  Contributing
VII.  License
VIII.  Acknowledgments

---

Tech
[x] Radix ui / shadCN components
[x] v1 route convention
[x] Superuser Task Runner
[x] TanStack Tables
[x] React Day Picker 
[x] Remix Auth
[x] Contains default route template
[x] pre-made sidebar with header and footer dropdowns
[x] Clean pre configured tanstack table, one for any type of data, and another designed for a ticketing system
 
---
 Project Structure
└── bane/
    ├── .vscode
    ├── app
    │   ├── components
    |   │   ├── components
    │   |   └── shared.tsx
    │   ├── hooks
    │   |   └── use-mobile.ts
    │   ├── modules
    |   │   ├── auth
    |   |   │   ├── auth.ts
    │   |   |   └── auth_session.tsx        
    │   |   └── libs
    │   |   |   └── prisma.tsx        
    │   ├── routes
    |   |   ├── __auth
    |   |   │   ├── login.tsx
    │   |   |   └── logout.tsx    
    |   │   ├── portal
    |   │   ├── _index.tsx
    │   |   └── portal.tsx    
    │   ├── entry.client.tsx
    │   ├── entry.server.tsx
    │   ├── root.tsx
    │   └── tailwind.css
    ├── prisma
    |   ├── schema.prisma
    |   └── seed.ts
    ├── public
    │   ├── .DS_Store
    │   └── wrapper
    ├── .gitignore
    ├── components.json
    ├── package.json
    ├── .eslintrc.cjs
    ├── pnpm-lock.yaml
    ├── README.md
    ├── str.json
    ├── vite.config.ts
    ├── .env
    ├── postcss.config.js
    ├── tailwind.config.ts
    └── tsconfig.json
---
🚀 Getting Started
---
☑️ Prerequisites
---
⚙️ Installation
- using taiwlind v4, but needed to use the components from shadCN v3 in order for them to work
- remove @custom-variant dark (&:is(.dark *)); from tailwind css in order for colors to work
---
📌 Project Roadmap
 
---
🔰 Contributing
   
---
🎗 License
 
---
🙌 Acknowledgments
 
---