import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import { FaUser, FaEnvelope, FaPhone, FaGlobe } from "react-icons/fa"; // For icons

function Demo1() {
  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      {/* Name Input */}
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Name*"
          aria-label="Name"
        />
        <InputGroup.Text>
          <FaUser />
        </InputGroup.Text>
      </InputGroup>

      {/* Email Input */}
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Email ID*"
          aria-label="Email"
        />
        <InputGroup.Text>
          <FaEnvelope />
        </InputGroup.Text>
      </InputGroup>

      {/* Phone Input */}
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Phone*"
          aria-label="Phone"
        />
        <InputGroup.Text>
          <FaPhone />
        </InputGroup.Text>
      </InputGroup>

      {/* Website Input */}
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Website"
          aria-label="Website"
        />
        <InputGroup.Text>
          <FaGlobe />
        </InputGroup.Text>
      </InputGroup>

      {/* Message Input */}
      <Form.Group className="mb-3">
        <Form.Control
          as="textarea"
          placeholder="Your Message..."
          rows={4}
        />
      </Form.Group>
    </div>
  );
}

export default Demo1;