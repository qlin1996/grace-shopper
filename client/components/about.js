import React from 'react'
import {connect} from 'react-redux'

const About = () => {
  return (
    <div>
      <div className="row justify-content-center">
        <div className=" who-we-are-div">Who We Are</div>
      </div>
      <div className="row justify-content-center">
        <div className="col-2 text-center">
          <img
            src="/icon-logo.png"
            alt="image"
            className="icon-logo img-fluid"
          />
        </div>
      </div>
      <br /> <br /> <br />
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
          condimentum dolor ac magna accumsan, non cursus arcu blandit. Mauris
          fringilla tortor a arcu blandit, eget aliquam massa tincidunt. Nunc
          leo ex, pharetra at convallis eget, laoreet id justo. Curabitur tempor
          luctus lectus at faucibus. Etiam mollis, justo eget faucibus auctor,
          diam orci consectetur felis, ut tincidunt lacus elit at nisl. Praesent
          non ante et mi dictum faucibus. Nunc sed dignissim ligula, sed gravida
          elit.
        </p>
      </div>
      <div className="row justify-content-center">
        <div className=" main-about-text">Our Founders</div>
      </div>
      <div className="flex">
        <div className="about-us-div">
          <img src="https://ca.slack-edge.com/T024FPYBQ-U01616MCD8Q-g71d80b2c1f5-512" />
          <div>
            <b className="founder-names">Simon Zeng</b>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              condimentum dolor ac magna accumsan, non cursus arcu blandit.
              Mauris fringilla tortor a arcu blandit, eget aliquam massa
              tincidunt. Nunc leo ex, pharetra at convallis eget, laoreet id
              justo. Curabitur tempor luctus lectus at faucibus. Etiam mollis,
              justo eget faucibus auctor, diam orci consectetur felis, ut
              tincidunt lacus elit at nisl. Praesent non ante et mi dictum
              faucibus. Nunc sed dignissim ligula, sed gravida elit.
            </p>
          </div>
        </div>
        <div className="about-us-div">
          <img src="https://ca.slack-edge.com/T024FPYBQ-U015BBF5WAE-fc53905f1630-512" />
          <div>
            <b className="founder-names">Claire Giordano</b>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              condimentum dolor ac magna accumsan, non cursus arcu blandit.
              Mauris fringilla tortor a arcu blandit, eget aliquam massa
              tincidunt. Nunc leo ex, pharetra at convallis eget, laoreet id
              justo. Curabitur tempor luctus lectus at faucibus. Etiam mollis,
              justo eget faucibus auctor, diam orci consectetur felis, ut
              tincidunt lacus elit at nisl. Praesent non ante et mi dictum
              faucibus. Nunc sed dignissim ligula, sed gravida elit.
            </p>
          </div>
        </div>
        <div className="about-us-div">
          <img src="https://ca.slack-edge.com/T024FPYBQ-UVDH49WAZ-2755e5ff7bb7-512" />
          <div>
            <b className="founder-names">Anderson Quiñones</b>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              condimentum dolor ac magna accumsan, non cursus arcu blandit.
              Mauris fringilla tortor a arcu blandit, eget aliquam massa
              tincidunt. Nunc leo ex, pharetra at convallis eget, laoreet id
              justo. Curabitur tempor luctus lectus at faucibus. Etiam mollis,
              justo eget faucibus auctor, diam orci consectetur felis, ut
              tincidunt lacus elit at nisl. Praesent non ante et mi dictum
              faucibus. Nunc sed dignissim ligula, sed gravida elit.
            </p>
          </div>
        </div>
        <div className="about-us-div">
          <img src="https://ca.slack-edge.com/T024FPYBQ-U015BBESASE-affe9133d7a4-512" />
          <div>
            <b className="founder-names">Qi (Q) Lin</b>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              condimentum dolor ac magna accumsan, non cursus arcu blandit.
              Mauris fringilla tortor a arcu blandit, eget aliquam massa
              tincidunt. Nunc leo ex, pharetra at convallis eget, laoreet id
              justo. Curabitur tempor luctus lectus at faucibus. Etiam mollis,
              justo eget faucibus auctor, diam orci consectetur felis, ut
              tincidunt lacus elit at nisl. Praesent non ante et mi dictum
              faucibus. Nunc sed dignissim ligula, sed gravida elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default connect(null)(About)
