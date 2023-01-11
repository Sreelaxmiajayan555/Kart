import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./cssHub.css";
import Logo from "../images/streeKart.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Search from "../images/search.png";
import User from "../images/user.png";
import Wish from "../images/heart.png";
import Cart from "../images/cart.png";

function BasicExample() {
  return (
    <Navbar bg="white" expand="lg" className="navTop">
      <Container>
        <Navbar.Brand href="/" style={{ marginRight: "20px" }}>
          <img
            src={Logo}
            alt=""
            style={{ height: "40px", marginRight: "10px" }}
          />
          StreeKart
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown
              title="Categories"
              id="basic-nav-dropdown"
              style={{ marginRight: "20px" }}
            >
              <NavDropdown.Item href="#action/3.1">Men</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Women</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Kids</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Footwear</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/" style={{ marginRight: "20px" }}>
              Best Deals
            </Nav.Link>
            <Nav.Link href="/" style={{ marginRight: "160px" }}>
              Studio <sup style={{ color: "red" }}>New</sup>
            </Nav.Link>

            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                style={{ width: "200px" }}
              />
              <Button variant="btn">
                <img
                  src={Search}
                  alt=""
                  style={{ height: "25px", marginBottom: "2px" }}
                />
              </Button>
            </Form>
            <button
              style={{
                border: "none",
                marginLeft: "80px",
                backgroundColor: "transparent",
              }}
              type="button" data-toggle="modal" data-target="#myModal"
            >
              <img
                src={User}
                alt=""
                style={{
                  height: "20px",
                  marginBottom: "3px",
                  marginLeft: "10px",
                }}
              />
            </button>

            <div class="modal fade" id="myModal" role="dialog">
              <div class="modal-dialog modal-sm">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">
                      &times;
                    </button>
                    <h4 class="modal-title">Modal Header</h4>
                  </div>
                  <div class="modal-body">
                    <p>This is a small modal.</p>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-default"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <button style={{ border: "none", backgroundColor: "transparent" }}>
              <img
                src={Wish}
                alt=""
                style={{
                  height: "20px",
                  marginBottom: "3px",
                  marginLeft: "10px",
                }}
              />
            </button>
            <button style={{ border: "none", backgroundColor: "transparent" }}>
              <img
                src={Cart}
                alt=""
                style={{
                  height: "20px",
                  marginBottom: "3px",
                  marginLeft: "10px",
                }}
              />
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
