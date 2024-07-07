// src/components/UserProfile.js
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './UserProfile.css'; // Custom CSS for additional styling

const UserProfile = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    // Add other user details as needed
  });

  useEffect(() => {
    // Fetch user profile data here
  }, []);

  return (
    <Container className="profile-container">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2 className="text-center">Profile</h2>
          <div className="profile-info">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            {/* Add other user details as needed */}
          </div>
          <Button variant="primary" className="auth-button">Edit Profile</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfile;

