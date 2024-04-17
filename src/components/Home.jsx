import React, { useState } from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import ReactApexChart from 'react-apexcharts'
import Header from './Header'
import DataTable from './Table'

function Home() {
    const employees = [
        {
            name: "Tiger Nixon",
            position: "System Architect",
            office: "Edinburgh",
            age: 61,
            start_date: "2011/04/25",
            salary: "$320,800"
        },
        {
            name: "Garrett Winters",
            position: "Accountant",
            office: "Tokyo",
            age: 63,
            start_date: "2011/07/25",
            salary: "$170,750"
        },
        {
            name: "Ashton Cox",
            position: "Junior Technical Author",
            office: "San Francisco",
            age: 66,
            start_date: "2009/01/12",
            salary: "$86,000"
        },
        {
            name: "Cedric Kelly",
            position: "Senior Javascript Developer",
            office: "Edinburgh",
            age: 22,
            start_date: "2012/03/29",
            salary: "$433,060"
        },
        {
            name: "Airi Satou",
            position: "Accountant",
            office: "Tokyo",
            age: 33,
            start_date: "2008/11/28",
            salary: "$162,700"
        },
        {
            name: "Brielle Williamson",
            position: "Integration Specialist",
            office: "New York",
            age: 61,
            start_date: "2012/12/02",
            salary: "$372,000"
        },
        {
            name: "Herrod Chandler",
            position: "Sales Assistant",
            office: "San Francisco",
            age: 59,
            start_date: "2012/08/06",
            salary: "$137,500"
        },
        {
            name: "Rhona Davidson",
            position: "Integration Specialist",
            office: "Tokyo",
            age: 55,
            start_date: "2010/10/14",
            salary: "$327,900"
        },
        {
            name: "Colleen Hurst",
            position: "Javascript Developer",
            office: "San Francisco",
            age: 39,
            start_date: "2009/09/15",
            salary: "$205,500"
        },
        {
            name: "Sonya Frost",
            position: "Software Engineer",
            office: "Edinburgh",
            age: 23,
            start_date: "2008/12/13",
            salary: "$103,600"
        },
        {
            name: "Jena Gaines",
            position: "Office Manager",
            office: "London",
            age: 30,
            start_date: "2008/12/19",
            salary: "$90,560"
        },
        {
            name: "Quinn Flynn",
            position: "Support Lead",
            office: "Edinburgh",
            age: 22,
            start_date: "2013/03/03",
            salary: "$342,000"
        },
        {
            name: "Charde Marshall",
            position: "Regional Director",
            office: "San Francisco",
            age: 36,
            start_date: "2008/10/16",
            salary: "$470,600"
        },
        {
            name: "Haley Kennedy",
            position: "Senior Marketing Designer",
            office: "London",
            age: 43,
            start_date: "2012/12/18",
            salary: "$313,500"
        },
        {
            name: "Tatyana Fitzpatrick",
            position: "Regional Director",
            office: "London",
            age: 19,
            start_date: "2010/03/17",
            salary: "$385,750"
        },
        {
            name: "Michael Silva",
            position: "Marketing Designer",
            office: "London",
            age: 66,
            start_date: "2012/11/27",
            salary: "$198,500"
        },
        {
            name: "Paul Byrd",
            position: "Chief Financial Officer (CFO)",
            office: "New York",
            age: 64,
            start_date: "2010/06/09",
            salary: "$725,000"
        },
        {
            name: "Gloria Little",
            position: "Systems Administrator",
            office: "New York",
            age: 59,
            start_date: "2009/04/10",
            salary: "$237,500"
        },
        {
            name: "Bradley Greer",
            position: "Software Engineer",
            office: "London",
            age: 41,
            start_date: "2012/10/13",
            salary: "$132,000"
        },
        {
            name: "Dai Rios",
            position: "Personnel Lead",
            office: "Edinburgh",
            age: 35,
            start_date: "2012/09/26",
            salary: "$217,500"
        },
        {
            name: "Jenette Caldwell",
            position: "Development Lead",
            office: "New York",
            age: 30,
            start_date: "2011/09/03",
            salary: "$345,000"
        },
        {
            name: "Yuri Berry",
            position: "Chief Marketing Officer (CMO)",
            office: "New York",
            age: 40,
            start_date: "2009/06/25",
            salary: "$675,000"
        },
        {
            name: "Caesar Vance",
            position: "Pre-Sales Support",
            office: "New York",
            age: 21,
            start_date: "2011/12/12",
            salary: "$106,450"
        },
        {
            name: "Doris Wilder",
            position: "Sales Assistant",
            office: "Sidney",
            age: 23,
            start_date: "2010/09/20",
            salary: "$85,600"
        },
        {
            name: "Angelica Ramos",
            position: "Chief Executive Officer (CEO)",
            office: "London",
            age: 47,
            start_date: "2009/10/09",
            salary: "$1,200,000"
        },
        {
            name: "Gavin Joyce",
            position: "Developer",
            office: "Edinburgh",
            age: 42,
            start_date: "2010/12/22",
            salary: "$92,575"
        },
        {
            name: "Jennifer Chang",
            position: "Regional Director",
            office: "Singapore",
            age: 28,
            start_date: "2010/11/14",
            salary: "$357,650"
        },
        {
            name: "Brenden Wagner",
            position: "Software Engineer",
            office: "San Francisco",
            age: 28,
            start_date: "2011/06/07",
            salary: "$206,850"
        },
        {
            name: "Fiona Green",
            position: "Chief Operating Officer (COO)",
            office: "San Francisco",
            age: 48,
            start_date: "2010/03/11",
            salary: "$850,000"
        },
        {
            name: "Shou Itou",
            position: "Regional Marketing",
            office: "Tokyo",
            age: 20,
            start_date: "2011/08/14",
            salary: "$163,000"
        },
        {
            name: "Michelle House",
            position: "Integration Specialist",
            office: "Sidney",
            age: 37,
            start_date: "2011/06/02",
            salary: "$95,400"
        },
        {
            name: "Suki Burks",
            position: "Developer",
            office: "London",
            age: 53,
            start_date: "2009/10/22",
            salary: "$114,500"
        },
        {
            name: "Prescott Bartlett",
            position: "Technical Author",
            office: "London",
            age: 27,
            start_date: "2011/05/07",
            salary: "$145,000"
        },
        {
            name: "Gavin Cortez",
            position: "Team Leader",
            office: "San Francisco",
            age: 22,
            start_date: "2008/10/26",
            salary: "$235,500"
        },
        {
            name: "Martena Mccray",
            position: "Post-Sales support",
            office: "Edinburgh",
            age: 46,
            start_date: "2011/03/09",
            salary: "$324,050"
        },
        {
            name: "Unity Butler",
            position: "Marketing Designer",
            office: "San Francisco",
            age: 47,
            start_date: "2009/12/09",
            salary: "$85,675"
        },
        {
            name: "Howard Hatfield",
            position: "Office Manager",
            office: "San Francisco",
            age: 51,
            start_date: "2008/12/16",
            salary: "$164,500"
        },
        {
            name: "Hope Fuentes",
            position: "Secretary",
            office: "San Francisco",
            age: 41,
            start_date: "2010/02/12",
            salary: "$109,850"
        },
        {
            name: "Vivian Harrell",
            position: "Financial Controller",
            office: "San Francisco",
            age: 62,
            start_date: "2009/02/14",
            salary: "$452,500"
        },
        {
            name: "Timothy Mooney",
            position: "Office Manager",
            office: "London",
            age: 37,
            start_date: "2008/12/11",
            salary: "$136,200"
        },
        {
            name: "Jackson Bradshaw",
            position: "Director",
            office: "New York",
            age: 65,
            start_date: "2008/09/26",
            salary: "$645,750"
        },
        {
            name: "Olivia Liang",
            position: "Support Engineer",
            office: "Singapore",
            age: 64,
            start_date: "2011/02/03",
            salary: "$234,500"
        },
        {
            name: "Bruno Nash",
            position: "Software Engineer",
            office: "London",
            age: 38,
            start_date: "2011/05/03",
            salary: "$163,500"
        },
        {
            name: "Sakura Yamamoto",
            position: "Support Engineer",
            office: "Tokyo",
            age: 37,
            start_date: "2009/08/19",
            salary: "$139,575"
        },
        {
            name: "Thor Walton",
            position: "Developer",
            office: "New York",
            age: 61,
            start_date: "2013/08/11",
            salary: "$98,540"
        },
        {
            name: "Finn Camacho",
            position: "Support Engineer",
            office: "San Francisco",
            age: 47,
            start_date: "2009/07/07",
            salary: "$87,500"
        },
        {
            name: "Serge Baldwin",
            position: "Data Coordinator",
            office: "Singapore",
            age: 64,
            start_date: "2012/04/09",
            salary: "$138,575"
        },
        {
            name: "Zenaida Frank",
            position: "Software Engineer",
            office: "New York",
            age: 63,
            start_date: "2010/01/04",
            salary: "$125,250"
        },
        {
            name: "Zorita Serrano",
            position: "Software Engineer",
            office: "San Francisco",
            age: 56,
            start_date: "2012/06/01",
            salary: "$115,000"
        },
        {
            name: "Jennifer Acosta",
            position: "Junior Javascript Developer",
            office: "Edinburgh",
            age: 43,
            start_date: "2013/02/01",
            salary: "$75,650"
        },
        {
            name: "Cara Stevens",
            position: "Sales Assistant",
            office: "New York",
            age: 46,
            start_date: "2011/12/06",
            salary: "$145,600"
        },
        {
            name: "Hermione Butler",
            position: "Regional Director",
            office: "London",
            age: 47,
            start_date: "2011/03/21",
            salary: "$356,250"
        },
        {
            name: "Lael Greer",
            position: "Systems Administrator",
            office: "London",
            age: 21,
            start_date: "2009/02/27",
            salary: "$103,500"
        },
        {
            name: "Jonas Alexander",
            position: "Developer",
            office: "San Francisco",
            age: 30,
            start_date: "2010/07/14",
            salary: "$86,500"
        },
        {
            name: "Shad Decker",
            position: "Regional Director",
            office: "Edinburgh",
            age: 51,
            start_date: "2008/11/13",
            salary: "$183,000"
        },
        {
            name: "Michael Bruce",
            position: "Javascript Developer",
            office: "Singapore",
            age: 29,
            start_date: "2011/06/27",
            salary: "$183,000"
        },
        {
            name: "Donna Snider",
            position: "Customer Support",
            office: "New York",
            age: 27,
            start_date: "2011/01/25",
            salary: "$112,000"
        }
    ];


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



    return (

        <main>
            <div className="container-fluid px-4">
                <h1 className="mt-4">Dashboard</h1>
                <ol className="breadcrumb mb-4">
                    <li className="breadcrumb-item active">Dashboard</li>
                </ol>
                <div className="row">
                    <div className="col-xl-3 col-md-6">
                        <div className="card bg-primary text-white mb-4">
                            <div className="card-body">Primary Card</div>
                            <div className="card-footer d-flex align-items-center justify-content-between">
                                <Link className="small text-white stretched-link" to="#">
                                    View Details
                                </Link>
                                <div className="small text-white">
                                    <i className="fas fa-angle-right" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <div className="card bg-warning text-white mb-4">
                            <div className="card-body">Warning Card</div>
                            <div className="card-footer d-flex align-items-center justify-content-between">
                                <Link className="small text-white stretched-link" to="#">
                                    View Details
                                </Link>
                                <div className="small text-white">
                                    <i className="fas fa-angle-right" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <div className="card bg-success text-white mb-4">
                            <div className="card-body">Success Card</div>
                            <div className="card-footer d-flex align-items-center justify-content-between">
                                <Link className="small text-white stretched-link" to="#">
                                    View Details
                                </Link>
                                <div className="small text-white">
                                    <i className="fas fa-angle-right" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <div className="card bg-danger text-white mb-4">
                            <div className="card-body">Danger Card</div>
                            <div className="card-footer d-flex align-items-center justify-content-between">
                                <Link className="small text-white stretched-link" to="#">
                                    View Details
                                </Link>
                                <div className="small text-white">
                                    <i className="fas fa-angle-right" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-6">
                        <div className="card mb-4">
                            <div className="card-header">
                                <i className="fas fa-chart-area me-1" />
                                Area Chart Example
                            </div>
                            <div className="card-body">
                                <ReactApexChart options={lineChart.options} series={lineChart.series} type="area" height={250} />

                                {/* <canvas id="myAreaChart" width="100%" height={40} /> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="card mb-4">
                            <div className="card-header">
                                <i className="fas fa-chart-bar me-1" />
                                Bar Chart Example
                            </div>
                            <div className="card-body">
                                <ReactApexChart options={barChart.options} series={barChart.series} type="bar" height={250} />

                                {/* <canvas id="myBarChart" width="100%" height={40} /> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-4">
                    <div className="card-header">
                        <i className="fas fa-table me-1" />
                        DataTable Example
                    </div>
                    <div className="card-body">
                        {/* employees */}
                        <DataTable data={employees} />
                    </div>
                </div>
            </div>
        </main>


    )
}

export default Home