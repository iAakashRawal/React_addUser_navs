import React, { useState } from 'react'
import { useContext } from 'react'
import { Container } from 'reactstrap'
import { data } from '../../../App'
import "../../../App.css"

const Datas = () => {
    
    const [theme, setTheme] = useState({ foreground: '#ffffff', background: '#222222' })    
    const themeData = useContext(data)
    const currentTheme = themeData.dark
    console.log(currentTheme)
    function changeTheme(e) {
        if (e.target.value === "1") {
            setTheme(themeData.light)
        } else if (e.target.value === "2") {
            setTheme(themeData.dark)
        } else if (e.target.value === "3") {
            setTheme(themeData.yellow)
        } else if (e.target.value === "4") {
            setTheme(themeData.red)
        } else if (e.target.value === "5") {
            setTheme(themeData.green)
        } else if (e.target.value === "6") {
            setTheme(themeData.gray)
        } else if (e.target.value === "7") {
            setTheme(themeData.pink)
        }
    }
    return (
        <Container fluid>
            <div className='m-0'>
                <div className='shadow mb-5 rounded 1000' style={{ height: "760px", backgroundColor: theme.background, color: theme.foreground }}>
                    <div className='shadow-sm mb-5 bg-body rounded border border-bottom-5 ' style={{ height: "60px" }}>
                        <nav className="navbar navbar-expand-lg navbar-light " style={{ backgroundColor: theme.background }}>
                            <div className="container-fluid" >
                                <a className="navbar-brand" href="#" style={{ color: theme.foreground }}>Navbar</a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse homenav" id="navbarSupportedContent" style={{ color: theme.foreground }}>
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="page" href="#" style={{ color: theme.foreground }}>Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#" style={{ color: theme.foreground }}>Link</a>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: theme.foreground }}>
                                                Dropdown
                                            </a>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={{ backgroundColor: theme.background }}>
                                                <li><a className="dropdown-item" href="#" style={{ color: theme.foreground }}>Action</a></li>
                                                <li><a className="dropdown-item" href="#" style={{ color: theme.foreground }}>Another action</a></li>
                                                <li className="dropdown-divider"></li>
                                                <li><a className="dropdown-item" href="#" style={{ color: theme.foreground }}>Something else here</a></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link disabled" href="#"  style={{ color: theme.foreground }}>Disabled</a>
                                        </li>
                                    </ul>
                                    <form className="d-flex">
                                        <input className="form-control me-2" onChange={(e) => { changeTheme(e) }} type="search" />
                                        <button className="btn btn-outline-info" type="submit" style={{ color: theme.foreground }}>Search</button>
                                    </form>
                                    <select onChange={(e) => { changeTheme(e) }} className="form-select mt-2 mb-2 ms-5" style={{width : "110px"}}>
                                        <option defaultValue>Theme</option>
                                        <option value="1">Light</option>
                                        <option value="2">Dark</option>
                                        <option value="3">Yellow</option>
                                        <option value="4">Red</option>
                                        <option value="5">Green</option>
                                        <option value="6">Gray</option>
                                        <option value="7">Pink</option>
                                    </select>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className='mt-5 p-3'>
                        <p className='p-2 ' style={{ color: theme.foreground, fontSize: theme.fontSize }} >hye How are you Aaksh </p>
                        <button className='btn btn-outline-danger' style={{ color: theme.foreground }}>Submit</button>

                    </div>
                </div>
            </div>
        </Container>
    )
}
export default Datas
