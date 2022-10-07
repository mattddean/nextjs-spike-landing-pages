export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '63409ff6a145c41650ad3b39',
                  title: 'Sanity Studio',
                  name: 'nextjs-spike-landing-pages-studio',
                  apiId: '0bad65f1-7835-426b-ae4a-aa274f8af3f3'
                },
                {
                  buildHookId: '63409ff6fbdff1113ce4b46e',
                  title: 'Landing pages Website',
                  name: 'nextjs-spike-landing-pages',
                  apiId: '92e03f38-fc83-42e1-98da-fd31e098f7b5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mattddean/nextjs-spike-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://nextjs-spike-landing-pages.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
