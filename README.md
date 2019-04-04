# gutenberg-sidebar-sample

# FILES

├── assets<br />
│   ├── css<br />
│   │   └── plugin-sidebar.css<br />
│   └── js<br />
│       ├── dist<br />
│       │   ├── index.js<br />
│       │   ├── JohnnyTextControl.js<br />
│       │   └── JohnnyToogleControl.js<br />
│       ├── index.js (Gutenberg entry file ESNEXT)<br />
│       ├── JohnnyTextControl.js (Gutenberg TextControl Element file ESNEXT)<br />
│       └── JohnnyToogleControl.js (Gutenberg ToogleControl Element file ESNEXT)<br />
├── hello-johnny.php (Plugin main file)<br />
├── package.json<br />
├── package-lock.json<br />
└── webpack.config.js<br />


# DEVELOPMENT ENVIRONMENT SETUP

```bash
cd .../wp-content/plugins/
git clone https://github.com/hitenchothani3493/gutenberg-sidebar-sample.git
npm install
```

# EDITITNG JS FILES

```bash
npm run build    OR    npm run dev
```
* Now you can make changes in your ESNEXT JS files