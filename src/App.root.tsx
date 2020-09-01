import { memo, FunctionComponent } from 'react'
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config'

const AppRoot: FunctionComponent<RouteConfigComponentProps> = ({ route }) => {
  return renderRoutes(route?.routes)
}

export default memo(AppRoot)
