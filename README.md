# My Blog

A modern blog built with Eleventy and deployed to GitHub Pages.

## Features

- Clean, responsive design
- Blog post support with Markdown
- Modern CSS with custom properties
- Automatic deployment to GitHub Pages
- Mobile-friendly navigation

## Development

To run this project locally:

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
   This will start a local server at `http://localhost:8080`

## Building

To build the site for production:

```bash
npm run build
```

The built site will be in the `_site` directory.

## Deployment

This site automatically deploys to GitHub Pages when changes are pushed to the main branch. To set this up:

1. Go to your repository settings
2. Navigate to "Pages"
3. Under "Build and deployment", select "GitHub Actions" as the source
4. Push changes to the main branch to trigger a deployment

## Adding Content

To add a new blog post:

1. Create a new `.md` file in the `src/blog` directory
2. Add the front matter:
   ```yaml
   ---
   layout: base.njk
   title: Your Post Title
   date: YYYY-MM-DD
   description: A brief description of your post
   ---
   ```
3. Write your content in Markdown
4. Commit and push your changes 