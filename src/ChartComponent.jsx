import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto'; // Automatically registers required chart components
import { Container, Row, Col, Button, Nav } from 'react-bootstrap'; // Import Bootstrap components
import { CiCirclePlus } from "react-icons/ci";
import { AiOutlineFullscreen } from "react-icons/ai";

const ChartComponent = () => {
    // Static data for the chart
    const data = {
        labels: ['', '', '', '', '', '', ''],
        datasets: [
            {
                label: 'Price in USD',
                data: [62000, 63000, 61500, 64000, 65000, 64500, 63179],
                borderColor: '#4A90E2',
                backgroundColor: 'rgba(74, 144, 226, 0.2)',
                fill: true,
            },
        ],
    };

    const options = {
        responsive: true,
        scales: {
            x: { display: false }, // Hide x-axis labels
            y: { display: false }, // Hide y-axis labels
        },
        plugins: {
            legend: { display: false }, // Hide legend
        },
    };

    return (
        <Container className="mt-3 p-4 border rounded" style={{ maxWidth: '800px', backgroundColor: '#fff' }}>
            <Row className="mb-3">
                <Col>
                    <h2 style={{ color: '#282c34' }}>63,179.71 <span style={{ fontSize: '1rem', color: '#999' }}>USD</span></h2>
                    <p style={{ color: '#2ECC71', fontSize: '0.9rem', margin: 0 }}>+2,161.42 (3.54%)</p>
                </Col>
            </Row>

            {/* Navigation Tabs */}
            <Nav variant="tabs" className="border-bottom mb-3 custom-nav">
                {['Summary', 'Chart', 'Statistics', 'Analysis', 'Settings'].map((tab, index) => (
                    <Nav.Item key={index}>
                        <span // Change Nav.Link to span
                            className={`custom-link ${index === 1 ? 'active' : ''}`} // Use custom styles
                        >
                            {tab}
                        </span>
                    </Nav.Item>
                ))}
            </Nav>

            {/* Fullscreen and Compare Options */}
            <Row className="mb-3 mt-5">
                <Col className="d-flex align-items-center">
                    <Button variant="link" className="text-dark d-flex align-items-center no-underline">
                        <AiOutlineFullscreen style={{ marginRight: '5px' }} />
                        Fullscreen
                    </Button>
                    <Button variant="link" className="text-dark d-flex align-items-center ms-3 no-underline">
                        <CiCirclePlus style={{ marginRight: '5px' }} />
                        Compare
                    </Button>
                </Col>
                <Col className="text-end">
                    {/* Time Range Options */}
                    {['1d', '3d', '1w', '1m', '6m', '1y', 'max'].map((range, index) => (
                        <Button
                            key={index}
                            variant="link"
                            className={`no-underline ${range === '1w' ? 'text-primary' : 'text-dark'}`}
                        >
                            {range}
                        </Button>
                    ))}
                </Col>
            </Row>

            {/* Chart */}
            <div className="chart-wrapper">
                <Line data={data} options={options} height={300} />
            </div>
        </Container>
    );
};

export default ChartComponent;

