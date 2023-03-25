import { useRoutes } from 'react-router-dom'
import Search from 'src/Components/Search'
import { routePath } from 'src/Constant/routePath'
// import { routePath } from 'src/Constant/routePath'
import MainLayout from 'src/Layouts'
import Detail from 'src/Page/Detail'
import Home from 'src/Page/Home'
import Movie from 'src/Page/Movie'
import TvSeries from 'src/Page/TvSeries'

export default function useRoutersElements() {
  const routers = useRoutes([
    {
      path: routePath.home,
      element: (
        <MainLayout>
          <Home />
        </MainLayout>
      )
    },
    {
      path: routePath.movie,
      element: (
        <MainLayout>
          <Movie />
        </MainLayout>
      )
    },
    {
      path: routePath.movieTopRated,
      element: (
        <MainLayout>
          <Movie />
        </MainLayout>
      )
    },
    {
      path: routePath.movieUpcoming,
      element: (
        <MainLayout>
          <Movie />
        </MainLayout>
      )
    },
    {
      path: routePath.moviePopular,
      element: (
        <MainLayout>
          <Movie />
        </MainLayout>
      )
    },
    {
      path: routePath.tv,
      element: (
        <MainLayout>
          <TvSeries />
        </MainLayout>
      )
    },
    {
      path: routePath.tvPopular,
      element: (
        <MainLayout>
          <TvSeries />
        </MainLayout>
      )
    },
    {
      path: routePath.tvTopRated,
      element: (
        <MainLayout>
          <TvSeries />
        </MainLayout>
      )
    },
    {
      path: routePath.tvOnTheAir,
      element: (
        <MainLayout>
          <TvSeries />
        </MainLayout>
      )
    },
    {
      path: ':type/:id',
      element: (
        <MainLayout>
          <Detail />
        </MainLayout>
      )
    },
    {
      path: routePath.search,
      element: (
        <MainLayout>
          <Search />
        </MainLayout>
      )
    }
  ])
  return routers
}
