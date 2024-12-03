import './Container.css'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
function C1(props)
{
    return(
        <div className='cont'>
            <h1>Pag. 1</h1>
        </div>
    )
}
function C2(props)
{
    return(
        <div className='cont'>
            <h1>Pag. 2</h1>
        </div>
    )
}
function Container(props)
{
    return(
        <div className='coso'>
            <h2>TITLE</h2>
            <nav>
                <ul>
                    <Link to="/"><a href="">Uno</a></Link>
                    <Link to="/dos"><a href="">Dos</a></Link>
                </ul>
            </nav>
            <Routes>
                <Route path='/' element={<C1/>}/>
                <Route path='/dos' element={<C2/>}/>
            </Routes>
        </div>
    )
}
export default Container