# WaffleHacks 2023 Cloud Deployment Workshop

Have you ever gotten [CORS][] errors, cookie problems, or just ran into trouble
making your incredible app publicly accessible? Worry no longer! We’ll teach
you how to deploy your frontend and backend to the cloud so it can go viral.

In this workshop, we’ll be deploying a simple todo list app consisting of a 
React (using Vite) frontend and Flask backend connected to an SQL database. 
The backend and database will be running on Fly.io, a platform for hosting 
Docker containers. The frontend will be hosted on Vercel, the creator of Next.js
and static site hosting platform.

After attending this workshop, you'll know how to:
- manage configuration according to the [12 Factor App][] specification
- prepare database migrations using Alembic
- containerize services using Docker
- fix [CORS][] issues
- setup cookie-based authentication
- use structured logging to debug remotely deploy apps

Prior to the workshop, you should do the following:
- Register for accounts on [GitHub][], [Fly.io][], and [Vercel][]
  - Note: Fly.io may require a credit card to register, but you will not be charged as we will be staying within the free tier.
- Install [Fly CLI][]
- Install [Vercel CLI][]
- Install [Python Poetry][]


[CORS]: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
[12 Factor App]: https://12factor.net/
[GitHub]: https://github.com/
[Fly.io]: https://fly.io/
[Vercel]: https://vercel.com/
[Fly CLI]: https://fly.io/docs/hands-on/install-flyctl/
[Vercel CLI]: https://vercel.com/docs/cli
[Python Poetry]: https://python-poetry.org/docs/#installation
