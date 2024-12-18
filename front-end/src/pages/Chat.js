import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import MessageForm from "../components/MessageForm";

function Chat() {
    return (
        <Row>
            <Col md={4}>
                <Sidebar />
            </Col>
            <Col md={8}>
                <MessageForm />
            </Col>
        </Row>
    );
}

export default Chat;
