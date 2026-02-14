

import Headers from "./Headers"
import NaveBar from "./NaveBar"

interface ILayoutprops{
    children : React.ReactNode
}

function Layout({children}:ILayoutprops) {
  return (
    <div>
      <Headers/>
        <NaveBar/>
        {children}
    </div>
  )
}

export default Layout