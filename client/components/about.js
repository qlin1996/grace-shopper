import React from 'react'
import {connect} from 'react-redux'

const About = () => {
  return (
    <div>
      <h2>Who We Are</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
        condimentum dolor ac magna accumsan, non cursus arcu blandit. Mauris
        fringilla tortor a arcu blandit, eget aliquam massa tincidunt. Nunc leo
        ex, pharetra at convallis eget, laoreet id justo. Curabitur tempor
        luctus lectus at faucibus. Etiam mollis, justo eget faucibus auctor,
        diam orci consectetur felis, ut tincidunt lacus elit at nisl. Praesent
        non ante et mi dictum faucibus. Nunc sed dignissim ligula, sed gravida
        elit.
      </p>
      <h2>Our Founders</h2>
      <div className="flex">
        <div>
          <img src="https://ca.slack-edge.com/T024FPYBQ-U01616MCD8Q-g71d80b2c1f5-512" />
          <div>
            <b>Simon Zeng</b>
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
        <div>
          <img src="https://ca.slack-edge.com/T024FPYBQ-U015BBF5WAE-fc53905f1630-512" />
          <div>
            <b>Claire Giordano</b>
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
        <div>
          <img src="https://ca.slack-edge.com/T024FPYBQ-UVDH49WAZ-2755e5ff7bb7-512" />
          <div>
            <b>Anderson Quiñones</b>
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
        <div>
          <img src="https://ca.slack-edge.com/T024FPYBQ-U015BBESASE-affe9133d7a4-512" />
          <div>
            <b>Qi (Q) Lin</b>
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
