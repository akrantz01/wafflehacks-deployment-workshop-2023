# [WaffleHacks][] 2023 Cloud Deployment Workshop

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

## Before the workshop

This workshop assumes you have some familiarity with Python, 
JavaScript/TypeScript, and the command line. None of the language concepts will
be explained since we lack the time to do so, and this workshop is focused
on the time after the application is developed. We will only be making small 
changes to the service to ensure it can be deployed.

If you need help with writing your application, attend one of our other
excellent workshops!

Prior to the workshop, you should do the following:
- Register for accounts on [GitHub][], [Fly.io][], and [Vercel][]
  - Note: Fly.io may require a credit card to register, but you will not be 
    charged as we will be staying within the free tier.
- Install [Fly CLI][]
- Install [Vercel CLI][]
- Install [Python Poetry][]

## After the workshop

All the stages of the code can be found in the following branches:

- [starter](https://github.com/akrantz01/wafflehacks-deployment-workshop-2023/tree/main)
- [cors](https://github.com/akrantz01/wafflehacks-deployment-workshop-2023/tree/1-cors) ([view changes](https://github.com/akrantz01/wafflehacks-deployment-workshop-2023/compare/main...1-cors))
- [cookies](https://github.com/akrantz01/wafflehacks-deployment-workshop-2023/tree/2-cookies) ([view changes](https://github.com/akrantz01/wafflehacks-deployment-workshop-2023/compare/1-cors...2-cookies))
- [config](https://github.com/akrantz01/wafflehacks-deployment-workshop-2023/tree/3-config) ([view changes](https://github.com/akrantz01/wafflehacks-deployment-workshop-2023/compare/2-cookies...3-config))
- [migrations](https://github.com/akrantz01/wafflehacks-deployment-workshop-2023/tree/4-migrations) ([view changes](https://github.com/akrantz01/wafflehacks-deployment-workshop-2023/compare/3-config...4-migrations))
- [containers](https://github.com/akrantz01/wafflehacks-deployment-workshop-2023/tree/5-container) ([view changes](https://github.com/akrantz01/wafflehacks-deployment-workshop-2023/compare/4-migrations...5-container))
- [deployment](https://github.com/akrantz01/wafflehacks-deployment-workshop-2023/tree/6-deploy) ([view changes](https://github.com/akrantz01/wafflehacks-deployment-workshop-2023/compare/5-container...6-deploy))
- [logging](https://github.com/akrantz01/wafflehacks-deployment-workshop-2023/tree/7-logging) ([view changes](https://github.com/akrantz01/wafflehacks-deployment-workshop-2023/compare/6-deploy...7-logging))

[WaffleHacks]: https://wafflehacks.org
[CORS]: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
[12 Factor App]: https://12factor.net/
[GitHub]: https://github.com/
[Fly.io]: https://fly.io/
[Vercel]: https://vercel.com/
[Fly CLI]: https://fly.io/docs/hands-on/install-flyctl/
[Vercel CLI]: https://vercel.com/docs/cli
[Python Poetry]: https://python-poetry.org/docs/#installation
