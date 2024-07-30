/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Box, Typography, Grid, TextField, Button } from "@mui/material";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Card from "react-bootstrap/Card";

const App = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="https://jawanpakistan12.web.app/images/j3.png"
              width={250}
              style={{ marginRight: "10px" }}
              alt=""
            />
            |
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Trainings" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Web and Mobile Application Development
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Flutter Application Development
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Graphic Design and Video Editing
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Digital and Social Media Marketing
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Blockchain Development
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#contactus">Contact us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br /><br /><br /><br /><br />
      <Box sx={{ bgcolor: "#f8f9fa", py: 5 }}>
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Typography
                style={{ fontSize: "35px", color: "green" }}
                variant="h2"
                component="h1"
                gutterBottom
              >
                <b>
                  Introduction to <br /> Jawan Pakistan
                </b>
              </Typography>
              <Typography component="p">
                The foundation of every state is the education and skills set of its
                youth. Jawan Pakistan is <br /> such an organization of Pakistan who
                is not only working on youth education but also <br /> enhancing
                skills set in youth either Free of cost or in a very low cost. This
                initiative,
                <br /> initially developed by a single person and with almost no
                seed capital, promotes <br /> entrepreneurship and innovation and
                Sustainable Development Goal, which promotes <br /> inclusive and
                sustainable economic growth.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <img
                src="https://jawanpakistan12.web.app/images/1.png"
                alt="Jawan Pakistan"
                style={{ width: '100%', borderRadius: '15px' }}
              />
            </Grid>
          </Grid>
          <br /><br /><br /><br />
          <br />
          <br />
          <br />
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <img
                src="https://jawanpakistan12.web.app/images/2.png"
                alt="Mission and Vision"
                style={{ width: '100%', borderRadius: '15px' }}
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography
                style={{ fontSize: "35px", color: "green" }}
                variant="h2"
                component="h1"
                gutterBottom
              >
                <b>
                  Mission And Vision <br /> Behind Jawan Pakistan
                </b>
              </Typography>
              <Typography component="p">
                Our vision is to bring our students into the 21st century through
                innovation and modern <br /> technology. To create a better every
                day life for every people. This program is not only <br /> impacting
                the youth in monetary perspective but it is also creating some
                deep-rooted, <br /> long-term psychological effects e.g. minimizing
                frustration <br /> among the unemployed youth.
                <br />
                <br />
                Our mission is to provide high quality education that connects young
                people with <br /> opportunities to transform their lives. The
                educated youngsters who remain unemployed <br /> gets frustrated,
                depressed and disheartened when they do not succeed in getting their{" "}
                <br /> dream jobs. This training reinforces the educated youth to
                earn well through freelancing <br />, develop variety of skills
                through specified domains and promote entrepreneurial culture <br />{" "}
                that diverts youths potentials for constructive purposes. This
                energy diversion definitely <br /> make the youth more confident,
                self-reliant and constructive asset for a progressing <br />{" "}
                economy.
              </Typography>
            </Grid>
          </Grid>
          <br />
          <br />
          <hr />
          <Typography
            style={{ fontSize: "35px", color: "green", textAlign: "center" }}
            variant="h2"
            component="h1"
            gutterBottom
          >
            <Navbar.Brand href="#home">
              <img
                src="https://jawanpakistan12.web.app/images/image.jpg"
                width={250}
                style={{ marginRight: 10, borderRadius: 200 }}
                alt=""
              />
            </Navbar.Brand>
            <br />
            <br />
            <b> MUHAMMAD ALI MUGHAL</b>
          </Typography>
          <Typography style={{ textAlign: "center" }} component="p">
            FOUNDER OF JAWAN PAKISTAN
            <br /> <br />
            We aim to be the most efficient provider of business process outsourcing{" "}
            <br /> services by setting the industry standards for cost and
            quality of services. <br /> Our long term success will be driven by
            our relentless focus on recruiting <br /> and developing the most
            talented pool of human capital in our industry.
          </Typography>
        </Container>
      </Box>

      <Container sx={{ py: 5 }}>
        <Typography
          style={{ fontSize: "50px", color: "green", textAlign: "center" }}
          variant="h2"
          component="h1"
          gutterBottom
        >
          <b> IT Trainings Offering In Jawan Pakistan</b>
          <br />
          <br />
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" component="h2">
              <Card className="bg-dark text-white">
                <Card.Img
                  src="https://www.seekpng.com/png/detail/252-2527672_mobile-application-development-mobile-app-and-web-development.png"
                  alt="Card image"
                />
              </Card>
            </Typography>
            <Typography component="p" style={{ textAlign: "center" }}>
              <b> Web and Mobile Application Development</b>
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" component="h2">
              <Card className="bg-dark text-white">
                <Card.Img
                  src="https://jawan-pakistan.vercel.app/assets/Flutter-YrUgmqmJ.jpg"
                  alt="Card image"
                />
              </Card>
            </Typography>
            <Typography component="p" style={{ textAlign: "center" }}>
              <b> Flutter Mobile Application and Development </b>
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" component="h2">
              <Card className="bg-dark text-white">
                <Card.Img
                  src="https://jawan-pakistan.vercel.app/assets/Graphic-BVE8jqc1.jpg"
                  height={"175px"}
                  alt="Card image"
                />
              </Card>
            </Typography>
            <Typography component="p" style={{ textAlign: "center" }}>
              <b>Graphic Design and Video Editing</b>
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <br />
      <Container sx={{ py: 5 }} style={{ marginLeft: "300px" }}>
        <Typography
          style={{ fontSize: "50px", color: "green", textAlign: "center" }}
          variant="h2"
          component="h1"
          gutterBottom
        ></Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" component="h2">
              <Card className="bg-dark text-white">
                <Card.Img
                  src="https://peppermintcreate.com/wp-content/uploads/2020/04/blog-image-Soical-media-v-digital.png"
                  height={"175px"}
                  alt="Card image"
                />
              </Card>
            </Typography>
            <Typography component="p" style={{ textAlign: "center" }}>
              <b> Digital and Social Media Marketing</b>
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" component="h2">
              <Card className="bg-dark text-white">
                <Card.Img
                  src="https://jawanpakistan12.web.app/images/blockchain.jpg"
                  height={"175px"}
                  alt="Card image"
                />
              </Card>
            </Typography>
            <Typography component="p" style={{ textAlign: "center" }}>
              <b> BlockChain Development </b>
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <br /> <br />

      {/* // next section */}
      <br /><br />

      <Container sx={{ py: 5 }}>
        <Typography
          style={{ fontSize: "50px", color: "green", textAlign: "center" }}
          variant="h2"
          component="h1"
          gutterBottom
        >
          <b> Glimpses Of Sessions Conducted By Jawan Pakistan</b>
          <br />
          <br />
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" component="h2">
              <Card className="bg-dark text-white">
                <Card.Img
                  src="https://jawanpakistan12.web.app/images/sindh%20unicersity%20visit/261862704_10223371448265775_2300299709412093131_n%20(1).jpg"
                  height={{"300px": "500px", "300px": "500px"}}
                  alt="Card image"
                />
              </Card>
            </Typography>
            <Typography component="p" style={{ textAlign: "center" }}>
              {/* <b> Web and Mobile Application Development</b> */}
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" component="h2">
              <Card className="bg-dark text-white">
                <Card.Img
                  src="https://jawanpakistan12.web.app/images/session%20on%20cutting%20edge%20technology/155332906_247925270211672_3618235991589928653_n.jpg"
                  height={"175px"}
                  alt="Card image"
                />
              </Card>
            </Typography>
            <Typography component="p" style={{ textAlign: "center" }}>
              {/* <b> Flutter Mobile Application and Development </b> */}
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" component="h2">
              <Card className="bg-dark text-white">
                <Card.Img
                  src="https://jawanpakistan12.web.app/images/onsite%20flutter%20session/212511411_10222634570404289_7247003591892091335_n.jpg"
                  height={"175px"}
                  alt="Card image"
                />
              </Card>
            </Typography>
            <Typography component="p" style={{ textAlign: "center" }}>
              {/* <b>Graphic Design and Video Editing</b> */}
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <br />
      <Container sx={{ py: 5 }} style={{  }}>
        <Typography
          style={{ fontSize: "50px", color: "green", textAlign: "center" }}
          variant="h2"
          component="h1"
          gutterBottom
        ></Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" component="h2">
              <Card className="bg-dark text-white">
                <Card.Img
                  src="https://jawanpakistan12.web.app/images/session%20at%20mehran%20university/261988743_10223366848350780_4227756947042582881_n.jpg"
                  height={"175px"}
                  alt="Card image"
                />
              </Card>
            </Typography>
            <Typography component="p" style={{ textAlign: "center" }}>
              {/* <b> Digital and Social Media Marketing</b> */}
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" component="h2">
              <Card className="bg-dark text-white">
                <Card.Img
                  src="https://jawanpakistan12.web.app/images/freelancing%20workshop/209537914_10222634542963603_4251492512510579905_n.jpg"
                  height={"175px"}
                  alt="Card image"
                />
              </Card>
            </Typography>
            <Typography component="p" style={{ textAlign: "center" }}>
              {/* <b> BlockChain Development </b> */}
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" component="h2">
              <Card className="bg-dark text-white">
                <Card.Img
                  src="https://jawanpakistan12.web.app/images/session%20at%20mehran%20university/261542477_10223366846270728_9568039485316705_n.jpg"
                  // height={"175px"}
                  marginBottom={"50px"}
                  alt="Card image"
                />
              </Card>
            </Typography>
            <Typography component="p" style={{ textAlign: "center" }}>
              {/* <b> BlockChain Development </b> */}
            </Typography>
          </Grid>
        </Grid>
      </Container>

      {/* // Contact Form */}

      <Container sx={{ py: 5 }}>
        <Typography
          style={{ fontSize: "35px", color: "green", textAlign: "center" }}
          variant="h2"
          component="h1"
          gutterBottom
        >
          <b>Contact</b>
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Phone Number"
              variant="outlined"
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Message"
              variant="outlined"
              margin="normal"
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <Button variant="contained" color="primary" size="large">
              Submit
            </Button>
          </Grid>
        </Grid>
      </Container>

      {/* // footer for the website */}
       
       
      <Box sx={{ bgcolor: "#343a40", color: "green", backgroundColor: "white" , py: 3 , marginTop: 20 }}>
        <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" component="h2">
            <Navbar.Brand href="#home" style={{marginTop: "150px"}}>
              
            <img
              src="https://jawanpakistan12.web.app/images/j3.png"
              width={250}
              alt=""
            />
          </Navbar.Brand>
            </Typography>
            <Typography component="p" style={{ textAlign: "center" }}>
              <br /><br /><br /><br /><br />
            <p style={{marginRight: "150px", color: "grey", fontSize: "15px"}}> © 2022 JawanPakistan </p>
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" component="h2">
            
            </Typography>
            <Typography component="p" style={{ textAlign: "center" }}>
              <b> COMPANY </b>
              <br /> <br />
              Home
              <br />
              Contact
              <br />
              Trainings
              <br />
              Aboutus
              <br />
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" component="h2">
            <Typography component="p" style={{ textAlign: "center" }}>
              <b> CONTACT  DETAILS </b>
              <br /> <br />
              Muhammad Ali Mughal
              <br />
              +923005292625
              <br />
              jawantechpk@gmail.com
              
            </Typography>
            </Typography>
            </Grid>
            </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default App;
