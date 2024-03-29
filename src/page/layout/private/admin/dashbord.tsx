import { Card, Col, Row, Avatar, Space, Dropdown, MenuProps, Button, 
    // DatePickerProps
 } from 'antd';
import { useState } from "react";
// import { currencyFormat, Ts } from '../../app/util/util';
// import LayoutPrivate from './LayoutPrivate';
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import { Ts } from '../../../../util/util';
import Doughnut3D from '../Charts/Doughnut3D';
import Column3D from '../Charts/Column3D';
// import SidebarAdmin from '../Sidebar/SidebarAdmin';
// import useReport from '../../hooks/useReport';
import useProduct from '../../../../app/hook/useProduct';
import useUser from '../../../../app/hook/useUser';
import { FileExcelOutlined ,PrinterOutlined,
  // FilePdfOutlined
} from '@ant-design/icons';
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
// import { PDFDownloadLink } from "@react-pdf/renderer";
import * as XLSX from 'xlsx';
// import PDFReport from '../PDF/PDFReport ';
// import { Community, ProductStatistics } from '../../../Model/Report';
// import { GetProductStatistics } from "../../../../app/models/report";

// import Chart2 from '../Charts/Column2D';
import LayoutAdmin from './LayoutAdmin';
import useReport from '../../../../app/hook/useReport';
// import agent from '../../../../app/api/agent';
// import { PDFDownloadLink } from '@react-pdf/renderer';
import Chart2 from '../Charts/Chart2';

ReactFC.fcRoot(FusionCharts, Charts ,FusionTheme);

const Dashbord = () => {
    
    const {productStatistics ,salesStatistics ,salesCommunity}= useReport();
    const {fds} = useProduct()
    const {user}=useUser()
    console.log(`fds = ${fds?.length}`,`user = ${user?.length}`)
    // console.log(fds?.length)


    
    console.log("salesCommunity",salesCommunity)
    const [typeChart, setTypeChart] = useState<string>("doughnut3d");

    const dataChartProductStatistics: TypeDataChart[] = productStatistics?.map(info => ({
        label: info.product.fdName,
        value: info.numPercen,
    })) as TypeDataChart[];

    interface TypeDataChart {
        label: any;
        value: any;
        color: any;
    }


    const handleOnExport = () => {
      const wb: XLSX.WorkBook = XLSX.utils.book_new();
      const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
      //const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(dataChartProductStatistics); 
      XLSX.utils.book_append_sheet(wb, ws, "MySheet1");
      XLSX.writeFile(wb, "MyExcel.xlsx");
    };

    //value: info.product.communityGroupID,

    const dataMonth = [
        {
            key: 1,
            label: "ม.ค.",
            value: 0
        },
        {
            key: 2,
            label: "ก.พ.",
            value: 0
        },
        {
            key: 3,
            label: "มี.ค.",
            value: 0
        },
        {
            key: 4,
            label: "เม.ย.",
            value: 0
        },
        {
            key: 5,
            label: "พ.ค.",
            value: 0
        },
        {
            key: 6,
            label: "มิ.ย.",
            value: 0
        },
        {
            key: 7,
            label: "ก.ค.",
            value: 0
        },
        {
            key: 8,
            label: "ส.ค.",
            value: 0
        },
        {
            key: 9,
            label: "ก.ย.",
            value: 0
        },
        {
            key: 10,
            label: "ต.ค.",
            value: 0
        },
        {
            key: 11,
            label: "พ.ย.",
            value: 0
        },
        {
            key: 12,
            label: "ธ.ค.",
            value: 0
        }
    ];

    const data = dataMonth.map(data => {
        
        const percent = salesStatistics?.sales.filter(e => e.month === data.key).reduce((curNumber, item) => {
            return curNumber + item.percent;
        }, 0);;
        return {
            label: data.label,
            value: percent
        }
    });

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

    const DropdownChart01 = <Dropdown.Button menu={{ items }} >
        <Ts>เลือก</Ts>
    </Dropdown.Button>;



  const componentRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "emp0data",
  });


//   const tests = salesCommunity?.sales.map(data => {
  
//     return {
//         label: data.percent,
//         value: data.communityName
//     }
// });

// const [infoReport, setInfoReport] = useState<Community | null>(null);
// const loadReport = async (date : any = null) => {
//     const { data } = await agent.Report.getReport(date);
//     console.log("datasss",data)
//     if (data)setInfoReport(data);
//   };

  
//   const onChange: DatePickerProps['onChange'] = async (_, dateString) => {
//     if(dateString)
//     loadReport(Number(dateString));
   
//     else
//     loadReport();
//   };
//   console.log("dateString",dateString)
    return (
      <LayoutAdmin>
        <Space direction="vertical" size={"large"} style={{ display: "flex" }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="facts1-item">
                  <h2>
                    <span className="odometer" data-count="15">
                      00
                    </span>
                    +
                  </h2>
                  <span>จำนวนรายได้</span>
                  <Avatar
                    className="factss-icon"
                    size={70}
                    src="https://drive.google.com/uc?id=1PUfh3eQH6G7RU5hXL0R_B3p7iQllcHiL"
                  />
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="facts2-item">
                  <h2>
                    <span className="odometer" data-count="99">
                      {fds?.length}
                    </span>
                    +
                  </h2>
                  <span>จำนวนสินค้า</span>
                  <Avatar
                    className="factss-icon"
                    size={70}
                    src="https://drive.google.com/uc?id=1PhzdUP9Tlg0AL3sKubkYOdW17N-U1YD-"
                  />
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="facts3-item">
                  <h2>
                    <span className="odometer" data-count="365">
                      {user?.length}
                    </span>
                    +
                  </h2>
                  <span>จำนวนสมาชิก</span>
                  <Avatar
                    className="factss-icon"
                    size={70}
                    src="https://drive.google.com/uc?id=1RvoVUYmOFqcrsfkcc6rjMWZ3W8QhWo43"
                  />
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="facts4-item">
                  <h2>
                    <span className="odometer" data-count="26">
                      00
                    </span>
                    +
                  </h2>
                  <span>จำนวนการจัดส่ง</span>
                  <Avatar
                    className="factss-icon"
                    size={70}
                    src="https://drive.google.com/uc?id=1wBhcG7hDMTDNIbhk-6lybXgrVK_aKK9y"
                  />
                </div>
              </div>
            </div>
            <Button onClick={handlePrint} className="mr-2">
              <PrinterOutlined style={{}} />
              Print
            </Button>
            <Button
              onClick={handleOnExport}
              className="mr-2"
            >
              <FileExcelOutlined />
              Excel
            </Button>
            {/* <PDFDownloadLink
              document={
                <PDFReport
                  report={
                    productStatistics as unknown as GetProductStatistics[]
                  }
                />
              }
              fileName="รายงาน.pdf"
              onClick={() => console.log(productStatistics)}
            >
              <Button
                className=" btn-sm btn-rounded"
                style={{ marginTop: "5px", marginLeft: "0.25%" }}
                // danger
              >
                <FilePdfOutlined /> PDF
              </Button>
            </PDFDownloadLink> */}
          </div>

          <div ref={componentRef}>
            <Row gutter={16}>
              <Col className="gutter-row center" span={12}>
                <Card
                  title="สถิติรายการการสั่งอาหาร"
                  extra={DropdownChart01}
                  className="text-st"
                  bordered={false}
                  style={{ width: "100%" }}
                >
                  <Doughnut3D
                    data={dataChartProductStatistics}
                    ReactFC={ReactFC}
                    typeChart={typeChart}
                  />
                </Card>
              </Col>
              <Col className="gutter-row center" span={12}>
                <Card
                  title="สถิติการขายรายเดือน"
                  className="text-st"
                  bordered={false}
                  style={{ width: "100%" }}
                >
                  <Column3D data={data} ReactFC={ReactFC} />
                </Card>
              </Col>
            </Row>
            {/* <DatePicker placeholder="กำหนดปี"  onChange={onChange} picker="year" style={{ marginTop: "25px", marginRight: "25px" }} /> */}
            <Row gutter={16}>
              {/* <Col className="gutter-row center" span={12}>
                            <Card title="สถิติสินค้า" extra={DropdownChart01} className='text-st' bordered={false} style={{ width: "100%" }}>
                                <Doughnut3D data={dataChartProductStatistics} ReactFC={ReactFC} typeChart={typeChart} />
                            </Card>
                        </Col> */}

              <Col className="gutter-row center" span={12}>
                <Card
                  title="ผลรวมสถิติขายตลอดทั้งปี"
                  className="text-st"
                  bordered={false}
                  style={{ width: "100%" }}
                >
                  {/* <Column3D data={tests} ReactFC={ReactFC} /> */}
                  <Chart2
                    data2={salesCommunity}
                    ReactFC={ReactFC}
                    toTalPrice={salesCommunity?.totalPrice}
                    typeChart="bar3d"
                  />
                </Card>
              </Col>
            </Row>
          </div>
        </Space>
      </LayoutAdmin>
    );
}

export default Dashbord;