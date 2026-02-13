
import NaveBar from "./NaveBar"

interface ILayoutprops{
    children : React.ReactNode
}

function Layout({children}:ILayoutprops) {
  return (
    <div>
        <NaveBar/>
        {children}
    </div>
  )
}

export default Layout