import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts'
import { Link } from 'react-router-dom'


function Charts() {

    const [lineChart, setLineChart] = useState({
        series: [{
            name: "Sessions",
            data: [10000, 30162, 26263, 18394, 18287, 28682, 31274, 33259, 25849, 24159, 32651, 31984, 38451]
        }],
        options: {
            chart: {
                height: 350,
                type: 'area',
                pan: {
                    enabled: false
                },
                tooltip: {
                    enabled: false
                },
                toolbar: {
                    show: false,

                },
                zoom: {
                    enabled: false
                }
            },

            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth',
                width: 3
            }
            ,
            markers: {
                size: 5,
                hover: {
                    size: 5
                }

            },
            // tooltip: {
            //     custom: (a) => {
            //         <>
            //             {console.log(a)}
            //         </>
            //     }
            // },
            xaxis: {
                type: 'datetime',
                tickAmount: 7,

                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                },
                gridLines: {
                    display: false
                },
                categories: ["Mar 1", "Mar 2", "Mar 3", "Mar 4", "Mar 5", "Mar 6", "Mar 7", "Mar 8", "Mar 9", "Mar 10", "Mar 11", "Mar 12", "Mar 13"],
            },
            yaxis: {
                min: 0,
                max: 40000,
                tickAmount: 5,
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                },
                gridLines: {
                    show: true,
                    borderColor: "rgba(0, 0, 0, .125)",
                    strokeDashArray: 5
                }
            }
        },
    })

    const [barChart, setBarChart] = useState({
        series: [{
            name: "Revenue",
            data: [4215, 5312, 6251, 7841, 9821, 14984]
        }],
        options: {
            chart: {
                height: 350,
                type: 'bar',
                pan: {
                    enabled: false
                },
                tooltip: {
                    enabled: false
                },
                toolbar: {
                    show: false,

                },
                zoom: {
                    enabled: false
                }
            },
            colors: ["rgba(2,117,216,1)"],
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '55%',
                    endingShape: 'flat'
                },
            },
            dataLabels: {
                enabled: false
            },
            legend: {
                show: false
            },
            xaxis: {
                categories: ["January", "February", "March", "April", "May", "June"],
                title: {
                    text: 'Month'
                }
            },
            yaxis: {
                min: 0,
                max: 15000,
                title: {
                    text: 'Revenue'
                }
            }
        },
    })

    const [pieChart, setPieChart] = useState({
        series: [12.21, 15.58, 11.25, 8.32],
        options: {
            chart: {
                height: 350,
                type: 'pie',
                pan: {
                    enabled: false
                },
                tooltip: {
                    enabled: false
                },
                toolbar: {
                    show: false,

                },
                zoom: {
                    enabled: false
                }
            },
            colors: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
            labels: ["Blue", "Red", "Yellow", "Green"],
            dataLabels: {
                enabled: false
            },
            legend: {
                show: false
            },


        },
    })
    return (

        <main>
            <div className="container-fluid px-4">
                <h1 className="mt-4">Charts</h1>
                <ol className="breadcrumb mb-4">
                    <li className="breadcrumb-item">
                        <Link to="/">Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item active">Charts</li>
                </ol>
                <div className="card mb-4">
                    <div className="card-body">
                        Chart.js is a third party plugin that is used to generate the
                        charts in this template. The charts below have been customized -
                        for further customization options, please visit the official
                        <Link target="_blank" to="https://www.chartjs.org/docs/latest/">
                            Chart.js documentation
                        </Link>
                        .
                    </div>
                </div>
                <div className="card mb-4">
                    <div className="card-header">
                        <i className="fas fa-chart-area me-1" />
                        Area Chart Example
                    </div>
                    <div className="card-body">
                        <ReactApexChart options={lineChart.options} series={lineChart.series} type="area" height={250} />
                    </div>
                    <div className="card-footer small text-muted">
                        Updated yesterday at 11:59 PM
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="card mb-4">
                            <div className="card-header">
                                <i className="fas fa-chart-bar me-1" />
                                Bar Chart Example
                            </div>
                            <div className="card-body">
                                <ReactApexChart options={barChart.options} series={barChart.series} type="bar" height={250} />
                            </div>
                            <div className="card-footer small text-muted">
                                Updated yesterday at 11:59 PM
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card mb-4">
                            <div className="card-header">
                                <i className="fas fa-chart-pie me-1" />
                                Pie Chart Example
                            </div>
                            <div className="card-body">

                                <ReactApexChart options={pieChart.options} series={pieChart.series} type="pie" height={285} />

                            </div>
                            <div className="card-footer small text-muted">
                                Updated yesterday at 11:59 PM
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>


    )
}

export default Charts