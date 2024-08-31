import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { Container, Row, Col, Button, Nav } from 'react-bootstrap';
import { CiCirclePlus } from "react-icons/ci";
import { AiOutlineFullscreen } from "react-icons/ai";
import { Chart, registerables } from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';

Chart.register(...registerables, annotationPlugin);

const ChartComponent = () => {
    const data = {
        labels: ['1d', '3d', '1w', '1m', '6m', '1y', 'max'],
        datasets: [
            {
                label: 'Price in USD',
                data: [61000, 66000, 64850, 61500, 65000, 65500, 63179.71],
                borderColor: '#4A90E2',
                backgroundColor: 'rgba(74, 144, 226, 0.1)',
                fill: true,
                tension: 0.4,
                pointBackgroundColor: '#4A90E2',
                pointBorderColor: '#fff',
                pointRadius: 4,
                pointHoverRadius: 6,
            },
        ],
    };

    const options = {
        responsive: true,
        scales: {
            x: {
                display: true,
                grid: {
                    display: true,
                    drawOnChartArea: true,
                    drawTicks: false,
                    color: 'rgba(200, 200, 200, 0.3)',
                },
                ticks: {
                    display: false, // Hide x-axis labels
                },
            },
            y: {
                display: true,
                grid: {
                    display: false,
                },
                ticks: {
                    display: false,
                    beginAtZero: true,
                },
            },
        },
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: true,
                callbacks: {
                    label: (context) => `$${context.raw}`,
                },
                displayColors: false,
            },
            annotation: {
                annotations: {
                    line1: {
                        type: 'line',
                        xMin: 2.7, // X-axis index for the 5th day (0-based index)
                        xMax: 2.7,
                        borderColor: 'rgba(0, 0, 0, 0.5)',
                        borderWidth: 1,
                        borderDash: [5, 5],
                        label: {
                            content: '25th Day',
                            enabled: false, // Hide label
                        },
                    },
                    line2: {
                        type: 'line',
                        yMin: 64850.25,
                        yMax: 64850.25,
                        borderColor: 'rgba(0, 0, 0, 0.5)',
                        borderWidth: 1,
                        borderDash: [10, 5],
                        label: {
                            content: '64,850.25',
                            enabled: true,
                            position: 'end',
                            backgroundColor: 'rgba(74, 144, 226, 0.7)',
                            color: 'black',
                            font: {
                                style: 'bold',
                            },
                        },
                    },
                },
            },
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

            <Nav variant="tabs" className="border-bottom mb-3 custom-nav">
                {['Summary', 'Chart', 'Statistics', 'Analysis', 'Settings'].map((tab, index) => (
                    <Nav.Item key={index}>
                        <span 
                            className={`custom-link ${index === 1 ? 'active' : ''}`} 
                        >
                            {tab}
                        </span>
                    </Nav.Item>
                ))}
            </Nav>

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
                <Col className="text-end" style={{marginRight:'50px'}}>
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

            <div className="chart-wrapper">
                <Line data={data} options={options} />
            </div>
        </Container>
    );
};

export default ChartComponent;
