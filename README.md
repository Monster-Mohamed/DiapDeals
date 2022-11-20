## Quick Start

```bash
npm install
```

```bash
npm start
```

## The Project Structure

<details>
<summary>Client Strucure - Nextjs</summary>

- components => the components of the app

  1. designs => all components that's only need a design and some logic
  2. layouts => the project layout is not related to the pages the layouts is related to the app itself
  3. Auth => the signup/login modal
  4. Navbar
  5. Footer
  6. Layout => the main layout
  7. main => the main components related to a pages and not the designs
  8. providers => the providers of the app
  9. AuthProvider => the auth provider
  10. ModalPagesProvider => the modal to signup/login
  11. ThemeProvider => the the mui theme
  12. types => the types of the components and methods

- context => the api context
  1. auth-context
  2. modal-pages-context
- hooks => the hooks/helpers of the app
- pages => the app pages
- public => the public photos or files
- static => the static vars like BACKEND_API_URL and so on...
- styles => the global css classes
- themes => the styles static vars
  1. colors
  2. fonts
  3. theme
- .env => the environment

</details>

<details>
<summary>Server Strucure - Nestjs</summary>

the server is easy to read

</details>
