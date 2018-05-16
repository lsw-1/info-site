import { reloadRoutes } from 'react-static/node'
import jdown from 'jdown'
import chokidar from 'chokidar'

chokidar.watch('content').on('all', () => reloadRoutes())

export default {
  siteRoot: 'https://gdpr.bonniernews.se/personuppgiftspolicy',
  getSiteData: () => ({
    title: 'Personuppgiftspolicy för Bonnier News',
  }),
  getRoutes: async () => {
    const { home } = await jdown('content')
    return [
      {
        path: '/',
        component: 'src/containers/Home',
        getData: () => ({
          ...home,
        }),
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
}
