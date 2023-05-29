// import React from 'react'
import LayoutAdmin from './LayoutAdmin'
import { Card, Col, Row, Avatar, Space, Dropdown, MenuProps } from 'antd';
import { useState } from "react";
// import { currencyFormat, Ts } from '../../app/util/util';
// import LayoutPrivate from './LayoutPrivate';
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// import { useAppDispatch } from '../../../../app/store/configureStore';
import { Ts } from '../../../../app/util/util';
import Doughnut3D from '../Charts/Doughnut3D';
import Column3D from '../Charts/Column3D';
// import SidebarAdmin from '../Sidebar/SidebarAdmin';


// import useReport from '../../hook/useReport';
import useProduct from '../../../../app/hook/useProduct';
import useUser from '../../../../app/hook/useUser';

ReactFC.fcRoot(FusionCharts, Charts ,FusionTheme);

const chartData = [
    {
        label: "Venezuela",
        value: "290",
        color: "#CB4335"
    },
    {
        label: "Saudi",
        value: "260",
        color: "#633974"
    },
    {
        label: "Canada",
        value: "180",
        color: "#2471A3"
    },
    {
        label: "Iran",
        value: "140",
        color: "#229954"
    },
    {
        label: "Russia",
        value: "115",
        color: "#F1C40F"
    },
    {
        label: "UAE",
        value: "100",
        color: "#E67E22"
    },
    {
        label: "US",
        value: "30",
        color: "#424949"
    },
    {
        label: "China",
        value: "30",
        color: "#1B2631"
    }
];

const Dashbord = () => {
    // const dispatch = useAppDispatch();
    // const {productStatistics ,salesStatistics}= useReport();
    const {fds} = useProduct()
    const {account,user}=useUser()
    console.log("user",account)
    const [typeChart, setTypeChart] = useState<string>("doughnut3d");

    const items: MenuProps['items'] = [
        {
            key: '1',
            label: <Ts>โดนัท</Ts>,
            onClick: () => setTypeChart("doughnut3d")

        },
        {
            key: '2',
            label: <Ts>คอลัมน์</Ts>,
            onClick: () => setTypeChart("column3d")
        },
        {
            key: '3',
            label: <Ts>พาย</Ts>,
            onClick: () => setTypeChart("pie3d")
        },
        {
            key: '4',
            label: <Ts>บาร์</Ts>,
            onClick: () => setTypeChart("bar3d")
        },
    ];

    const DropdownChart01 = <Dropdown.Button style={{backgroundColor:"#82b1ff"}} menu={{ items }} >
        <Ts>เลือก</Ts>
    </Dropdown.Button>;

    return (
         <LayoutAdmin>
            <Space direction='vertical' size={"large"} style={{ display: "flex" }} >
               

                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6">
                                <div className="facts1-item">
                                    <h2><span className="odometer" data-count="15">00</span>+</h2>
                                    <span>จำนวนรายได้</span>
                                 <Avatar className="factss-icon" size={70} src="https://drive.google.com/uc?id=1PUfh3eQH6G7RU5hXL0R_B3p7iQllcHiL" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="facts2-item">
                                    <h2><span className="odometer" data-count="99">{fds?.length}</span>+</h2>
                                    <span>จำนวนสินค้า</span>
                                    <Avatar className="factss-icon" size={70} src="https://drive.google.com/uc?id=1PhzdUP9Tlg0AL3sKubkYOdW17N-U1YD-" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="facts3-item">
                                    <h2><span className="odometer" data-count="365">{user?.length}</span>+</h2>
                                    <span>จำนวนสมาชิก</span>
                                    <Avatar className="factss-icon" size={70} src="https://drive.google.com/uc?id=1RvoVUYmOFqcrsfkcc6rjMWZ3W8QhWo43" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="facts4-item">
                                    <h2><span className="odometer" data-count="26">00</span>+</h2>
                                    <span>จำนวนการจัดส่ง</span>
                                    <Avatar className="factss-icon" size={70} src="https://drive.google.com/uc?id=1wBhcG7hDMTDNIbhk-6lybXgrVK_aKK9y" />
                                </div>
                            </div>
                        </div>
                    </div>
              
                <div>
                    <Row gutter={16}>
                        <Col className="gutter-row center" span={12}>
                            <Card title="สถิติสินค้า" extra={DropdownChart01} className='text-st' bordered={false} style={{backgroundColor:"#82b1ff", width: "100%" }}>
                                <Doughnut3D data={chartData} ReactFC={ReactFC} typeChart={typeChart} />
                            </Card>
                        </Col>

                        <Col className="gutter-row center" span={12}>
                            <Card title="สถิติการขาย" className='text-st' bordered={false} style={{backgroundColor:"#82b1ff", width: "100%" }}>
                                <Column3D data={chartData} ReactFC={ReactFC} />
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Space>

        </LayoutAdmin>
    )
}

export default Dashbord;