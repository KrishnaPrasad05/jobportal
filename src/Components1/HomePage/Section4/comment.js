import React, { useState, useEffect } from 'react';
import female from '../../../Assets/img/woman.png';
import male from '../../../Assets/img/verUser.png';
import CommentComp from './commentComp';
import { Container, Row, Col } from 'react-bootstrap';

function Comment() {
    const [jobSeekerIssuesList, setJobSeekerIssuesList] = useState([]);
    const [employerIssuesList, setEmployerIssuesList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3001/comment?CommentCategory=job seeker')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch job seeker issues');
                }
                return response.json();
            })
            .then(data => {
                setJobSeekerIssuesList(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });

        fetch('http://localhost:3001/comment?CommentCategory=employer')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch employer issues');
                }
                return response.json();
            })
            .then(data => {
                setEmployerIssuesList(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    return (
        <Container>
            <h1 className="text-center mt-5" style={{ color: '#2B358C' }}>Voices of Job Seekers</h1>
            <Row>
                {loading && <p>Loading Job Seeker Announcements...</p>}
                {error && <p>Error: {error}</p>}
                {jobSeekerIssuesList.map((issue, index) => (
                    <Col key={index} >
                        <CommentComp image={male} name={issue.CommentName} rating={issue.commentRating} caption={issue.Caption} content={issue.UserComment} />
                    </Col>
                ))}
            </Row>
            <h1 className="text-center mt-2" style={{ color: '#2B358C' }}>Voices of Employers</h1>
            <Row>
                {loading && <p>Loading Employer Announcements...</p>}
                {error && <p>Error: {error}</p>}
                {employerIssuesList.map((issue, index) => (
                    <Col key={index}>
                        <CommentComp image={male} name={issue.CommentName} rating={issue.commentRating} caption={issue.Caption} content={issue.UserComment} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Comment;
