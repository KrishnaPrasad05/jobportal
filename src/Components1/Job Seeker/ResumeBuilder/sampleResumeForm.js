import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Chart from 'chart.js/auto';
import CustomNavbar from '../../Admin/HeaderAdmin/HeaderAd';
import FooterAdmin from '../../Admin/HeaderAdmin/FooterAd';

const PerformanceAnalysis = () => {
  useEffect(() => {
    createCharts();
  }, []);

  const createCharts = () => {
    const jobTrendsData = {
      labels: ['IT', 'Healthcare', 'Finance', 'Education', 'Manufacturing'],
      datasets: [{
        label: 'Trending Jobs in India',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        data: [300, 150, 200, 100, 250]
      }]
    };

    const unemployedCitiesData = {
      labels: ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata'],
      datasets: [{
        label: 'Unemployed Population',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        data: [120000, 90000, 80000, 60000, 50000]
      }]
    };

    const graduatesData = {
      labels: ['Engineering', 'Medical', 'Commerce', 'Arts', 'Science'],
      datasets: [{
        label: 'Graduates from India',
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1,
        data: [250000, 180000, 150000, 120000, 200000]
      }]
    };

    const usersLoginData = [50, 75, 120, 90, 150];
    const interviewsData = [20, 30, 40, 25, 35];
    const companiesData = [10, 15, 20, 18, 25];
    const candidatesData = [30, 20, 15, 25, 10];
    const trendingJobsData = [45, 30, 20, 35, 50];
    const jobDistributionData = [25, 40, 20, 15];

    destroyChartIfExists('jobTrendsChart');
    destroyChartIfExists('unemployedCitiesChart');
    destroyChartIfExists('graduatesChart');
    destroyChartIfExists('usersLoginChart');
    destroyChartIfExists('interviewsChart');
    destroyChartIfExists('companiesChart');
    destroyChartIfExists('candidatesChart');
    destroyChartIfExists('trendingJobsChart');
    destroyChartIfExists('jobDistributionChart');

    createChart('jobTrendsChart', 'bar', jobTrendsData);
    createChart('unemployedCitiesChart', 'bar', unemployedCitiesData);
    createChart('graduatesChart', 'bar', graduatesData);
    createChart('usersLoginChart', 'line', { labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'], datasets: [{ label: 'Users Login', data: usersLoginData, borderColor: 'rgba(75, 192, 192, 1)', borderWidth: 2, fill: false }] });
    createChart('interviewsChart', 'bar', { labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'], datasets: [{ label: 'Interviews Done', data: interviewsData, backgroundColor: 'rgba(255, 99, 132, 0.7)', borderColor: 'rgba(255, 99, 132, 1)', borderWidth: 1 }] });
    createChart('companiesChart', 'doughnut', { labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'], datasets: [{ data: companiesData, backgroundColor: ['rgba(255, 206, 86, 0.7)', 'rgba(54, 162, 235, 0.7)', 'rgba(255, 99, 132, 0.7)', 'rgba(75, 192, 192, 0.7)', 'rgba(153, 102, 255, 0.7)'], borderColor: ['rgba(255, 206, 86, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)'], borderWidth: 1 }] });
    createChart('candidatesChart', 'pie', { labels: ['Selected', 'Rejected', 'Pending'], datasets: [{ data: candidatesData, backgroundColor: ['rgba(75, 192, 192, 0.7)', 'rgba(255, 99, 132, 0.7)', 'rgba(255, 206, 86, 0.7)'], borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)', 'rgba(255, 206, 86, 1)'], borderWidth: 1 }] });
    createChart('trendingJobsChart', 'bar', { labels: ['Job 1', 'Job 2', 'Job 3', 'Job 4', 'Job 5'], datasets: [{ label: 'Trending Jobs', data: trendingJobsData, backgroundColor: 'rgba(54, 162, 235, 0.7)', borderColor: 'rgba(54, 162, 235, 1)', borderWidth: 1 }] });
    createChart('jobDistributionChart', 'doughnut', { labels: ['IT', 'Finance', 'Healthcare', 'Education'], datasets: [{ data: jobDistributionData, backgroundColor: ['rgba(255, 99, 132, 0.7)', 'rgba(75, 192, 192, 0.7)', 'rgba(255, 206, 86, 0.7)', 'rgba(54, 162, 235, 0.7)'], borderColor: ['rgba(255, 99, 132, 1)', 'rgba(75, 192, 192, 1)', 'rgba(255, 206, 86, 1)', 'rgba(54, 162, 235, 1)'], borderWidth: 1 }] });
  };

  const destroyChartIfExists = (chartId) => {
    const existingChart = Chart.getChart(chartId);
    if (existingChart) {
      existingChart.destroy();
    }
  };

  const createChart = (chartId, chartType, chartData) => {
    const ctx = document.getElementById(chartId).getContext('2d');
    new Chart(ctx, {
      type: chartType,
      data: chartData
    });
  };

  return (
    <>
    <CustomNavbar/>
    <section id="section5" style={{ marginTop: '5rem', marginBottom: '5rem' }}>
      <div className="head" style={{ marginTop: '5rem' }}>
      <h1 className="head text-center mt-5" style={{color:'#2B358C'}}>Performance Analysis</h1>
      </div>
      <Container>
        <Row className="mt-4">
          <Col lg={4}>
            <Card>
              <Card.Body>
                <h5 className="card-title">Number of Users Login</h5>
                <canvas id="usersLoginChart" width="400" height="400"></canvas>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <Card>
              <Card.Body>
                <h5 className="card-title">Interviews Done</h5>
                <canvas id="interviewsChart" width="400" height="400"></canvas>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <Card>
              <Card.Body>
                <h5 className="card-title">Companies Registered</h5>
                <canvas id="companiesChart" width="400" height="400"></canvas>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col lg={4}>
            <Card>
              <Card.Body>
                <h5 className="card-title">Selected/Rejected Candidates</h5>
                <canvas id="candidatesChart" width="400" height="400"></canvas>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <Card>
              <Card.Body>
                <h5 className="card-title">Trending Job Postings</h5>
                <canvas id="trendingJobsChart" width="400" height="400"></canvas>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <Card>
              <Card.Body>
                <h5 className="card-title">Job Distribution in India</h5>
                <canvas id="jobDistributionChart" width="400" height="400"></canvas>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-4" style={{display:'none'}}>
          <Col lg={4}>
            <div className="chart-container">
              <canvas id="jobTrendsChart"></canvas>
            </div>
          </Col>
          <Col lg={4}>
            <div className="chart-container">
              <canvas id="unemployedCitiesChart"></canvas>
            </div>
          </Col>
          <Col lg={4}>
            <div className="chart-container">
              <canvas id="graduatesChart"></canvas>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <FooterAdmin/>
    </>
   
  );
};

export default PerformanceAnalysis;
