# Prismic with Next js

Prismic Documentation Step By Step: https://www.hamedbahram.io/notes/prismic

## Set up Prismic

- Create a NextJS app:

> npx create-next-app next-prismic

- In the root of your NextJS project, run the following command:

> npx @slicemachine/init

- Run to launch Slice Machine and create your first Custom Type

> npm run slicemachine

## Next install @prismicio/next

> npm install @prismicio/next

<br/>
<br/>

# Problem with import

### Parsing error: Cannot find module 'next/babel'

- SOLUTION:

Create in project root file .babelrc

Add this code:

> {
> "presets": ["next/babel"],
> "plugins": []
> }

Add in .eslintrc.json, replace the existing code with:

> {
> "extends": ["next/babel","next/core-web-vitals"]
> }

ps: And it will work!
<br/>
<br/>
