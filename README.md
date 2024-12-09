# AABI Symposium Website

This website is written in [AstroJS](https://astro.build/).
Learn more about Astro in its [documentation](https://docs.astro.build/en/getting-started/)!
Note that Astro is Typescript-based, although a minimal knowledge is necessary:
The contents of this website are entirely written in Markdown!

For how-tos FAQs specific to the AABI website, please see below.

## Setup

Install Bun (it's a faster, modern NodeJS alternative --- a Javascript runtime): <https://bun.sh/docs/installation>.
Then, install all dependencies:

```
bun install
```

To serve the website locally for development, run:

```
bun astro dev
```

And finally, go to `https://localhost:4321`

## How-Tos

### Creating/updating contents

1. Create a new page in `src/pages`, e.g. `new_page.astro`. You can copy-paste the exsisting page. Note that, the filename is important since it reflects the site endpoint: `new_page.astro` translates into `https://approximateinference.org/new_page`.
2. Put the following into `new_page.astro`:

```ts
---
import { Content } from "../contents/new_page.md";
---

<Content />
```

3. Next, create the content itself, in the form of a markdown document in `src/contents`. In this example, we create `src/contents/new_page.md`. Don't forget to set the title in the front matter. Note that you can also use `.mdx` extension. In this case, you will be able to use Astro components inside the markdown file. See `src/contents/index.md` for an example. See also Astro's documentation.

```md
---
layout: ../layouts/ContentLayout.astro
title: "New Page"
---

Your content here! It's just a standard markdown you know and love!
```

4. Then, you can link the page into the navbar in the header. This can be done by modifying `src/components/layout/Header.astro`. Simply copy-paste the existing nav link there and modify as necessary. Otherwise, you can simply link the new page as usual in other markdown files.

### Updating invited-speakers/organizers list

1. Put profile pictures/headshots into `public/images/people` directory.
2. Update `src/assets/invited_speakers.json` and `src/assets/organizers.json` by following this format: (Notice that `pic` should point to the path of the profile picture you have put into `public/images/people`.)

```json
[
  {
    "name": "...",
    "affiliation": "...",
    "pic": "/images/people/...",
    "link": "https://..."
  },
  ...
]
```

3. **How does it work?** Go to `src/contents/index.mdx`. (Note that `.mdx` is like `.md` but can use Astro components.) Notice that near the beginning of the file, we load the JSON file content, load the `PeopleList` component from `src/components/PeopleList.astro`, and then pass the JSON object into `PeopleList` in the content.

### Updating schedule

TODO!

### Displaying list of accepted papers

TODO!
