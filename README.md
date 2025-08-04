
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
☑️ Prerequisites
⚙️ Installation
Clone the file.io-Android-Client repository:
npx create-remixv2 8an3/bane
Navigate to the project directory:
❯ cd file.io-Android-Client
Install the project dependencies:
Using gradle &nbsp; <img align="center" src="https://img.shields.io/badge/Kotlin-0095D5.svg?style={badge_style}&logo=kotlin&logoColor=white" />
❯ gradle build
🤖 Usage
Run file.io-Android-Client using the following command:
Using gradle &nbsp; <img align="center" src="https://img.shields.io/badge/Kotlin-0095D5.svg?style={badge_style}&logo=kotlin&logoColor=white" />
❯ gradle run
🧪 Testing
Run the test suite using the following command:
Using gradle &nbsp; <img align="center" src="https://img.shields.io/badge/Kotlin-0095D5.svg?style={badge_style}&logo=kotlin&logoColor=white" />
❯ gradle test
---
📌 Project Roadmap
[X] Task 1: <strike>Implement feature one.</strike>
[ ] Task 2: Implement feature two.
[ ] Task 3: Implement feature three.
---
🔰 Contributing
💬 Join the Discussions: Share your insights, provide feedback, or ask questions.
🐛 Report Issues: Submit bugs found or log feature requests for the file.io-Android-Client project.
💡 Submit Pull Requests: Review open PRs, and submit your own PRs.
<details closed>
<summary>Contributing Guidelines</summary>
Fork the Repository: Start by forking the project repository to your github account.
Clone Locally: Clone the forked repository to your local machine using a git client.
   git clone https://github.com/rumaan/file.io-Android-Client
Create a New Branch: Always work on a new branch, giving it a descriptive name.
   git checkout -b new-feature-x
Make Your Changes: Develop and test your changes locally.
Commit Your Changes: Commit with a clear message describing your updates.
   git commit -m 'Implemented new feature x.'
Push to github: Push the changes to your forked repository.
   git push origin new-feature-x
Submit a Pull Request: Create a PR against the original project repository. Clearly describe the changes and their motivations.
Review: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>
<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com{/rumaan/file.io-Android-Client/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=rumaan/file.io-Android-Client">
   </a>
</p>
</details>
---
🎗 License
This project is protected under the SELECT-A-LICENSE License. For more details, refer to the LICENSE file.
---
🙌 Acknowledgments
List any resources, contributors, inspiration, etc. here.
---