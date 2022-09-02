import React, { useRef, useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import './index.css'

const UseRefs = () => {
  const [datas, setDatas] = useState([])
  const [collectData, setCollectData] = useState([])
  const [nameD, setNameD] = useState("")
  const [role, setRole] = useState("")
  const [description, setDescription] = useState("")
  const [imgs, setImgs] = useState("")
  const refdata = useRef("")

  function reset() {
    setNameD("")
    setRole("")
    setDescription("")
    refdata.current.focus()
    // refdata.current.style.color ="red"
  }

  function Submit() {
    setDatas([...datas, {
      stdName: nameD,
      role: role,
      imgs: imgs,
      description: description
    }])
  }
  function Show() {
    alert("okokko")
  }
  console.log("object", datas)
  return (
    <Container fluid>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button"
                role="tab" aria-controls="home" aria-selected="true">Add User</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button"
                role="tab" aria-controls="profile" aria-selected="false">Profile</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button"
                role="tab" aria-controls="contact" aria-selected="false">Contact</button>
            </li>
          </ul>
        </nav>
      </header>
      <div className='mt-3'>
        <div className="tab-content" id="myTabContent">
          <div className="tab-pane  pt-5" id="home" role="tabpanel" aria-labelledby="home-tab">
            <div className="row g-2">
              <div className="col-3">
                <div className="shadow p-3 mb-5 bg-light rounde  ">
                  <p className='text-center shadow p-3 mb-5 fw-bold bg-info rounded text-light fs-2'> User imformation</p>
                  <lable className="fs-5 fw-bold text-info">Name</lable>
                  <input type='text' ref={refdata} value={nameD} placeholder="Enter User name" className="form-control"
                    onChange={(e) => { setNameD(e.target.value) }}
                  />
                  <lable className="fs-5 fw-bold text-info">Image</lable>

                  <input type='text' ref={refdata} value={imgs} placeholder="Enter User Role" className="form-control"
                    onChange={(e) => { setImgs(e.target.value) }}
                  />

                  <lable className="fs-5 fw-bold text-info">Role</lable>

                  <input type='text' ref={refdata} value={role} placeholder="Enter User Role" className="form-control"
                    onChange={(e) => { setRole(e.target.value) }}
                  />
                  <lable className="fs-5 fw-bold text-info">Description</lable>

                  <textarea type='text' ref={refdata} value={description} placeholder="Enter User name"
                    className="form-control" onChange={(e) => { setDescription(e.target.value) }}
                  />
                  <button className='btn btn-sm btn-outline-danger mt-2 bg-danger text-light' onClick={reset} >reset</button>
                  <button className='btn btn-sm btn-outline-success ms-3 mt-2' onClick={() => { Submit() }} >Submit</button>
                  <button className='btn btn-sm btn-outline-info ms-3 mt-2 bg-info text-light' onClick={() => { Show() }} >Diplay Id</button>
                </div>
              </div>
              <div className="col-9">
                <div className="p-3 h-100 bg-info mt-3">
                  <p className='ps-3 bg-light text-info m-2 rounded fs-4'> ☻User imformation</p>
                  <Row className='p-4'>
                    {
                      datas?.map((elem) => {                      
                        return (
                          <Col className='col-4 '>
                            <div className='p-2'>
                              <Row className='mt-2 shadow p-3 mb-5 bg-light rounded'>
                                <Col
                                  className="mb-2 text-muted pt-2 col-7">
                                  <p>Student name :{elem.stdName}</p>
                                  <p>Role : {elem.role}</p>
                                  <p>Description : {elem.description}</p>
                                </Col>
                                <Col className='col-5'>
                                  <img alt='s' src={elem.imgs} className="w-100 h-100"></img>
                                </Col>
                              </Row>
                            </div>
                          </Col>
                        )
                      })
                    }
                  </Row>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
            <div className="p-3 h-100 bg-info mt-3">
              <p className='ps-3 bg-light text-info m-2 rounded fs-4'> ☻User imformation</p>
            </div>
          </div>
          <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
            <div className="p-3 h-100 bg-info  mt-3">
              <p className='ps-3 bg-light text-info m-2 rounded fs-4'> ☻User imformation</p>
            </div>
          </div>
        </div>
      </div>
    </Container >

  )
}

export default UseRefs
