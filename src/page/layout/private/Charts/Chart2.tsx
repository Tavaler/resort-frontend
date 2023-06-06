// import { 
//   // GetSalesStatistics,
// } from "../../../../app/models/report";

import { Community } from "../../../../app/models/report2";


interface Props {
  ReactFC: any;
  data2: Community | null;
  typeChart: string;
  toTalPrice: number | undefined;
}
const Chart2 = ({ ReactFC, data2, typeChart }: Props) => {

  
  const chartConfigs = {
    type: typeChart,
    width: "100%",
    height: "400",
    dataFormat: "json",
    dataSource: {
      chart: {
        yAxisMaxValue: "100",
        caption: `ยอดรวม ${new Intl.NumberFormat().format(data2?.totalPrice as any)} บาท`,
        base: "10",
        numberprefix: "%",
        theme: "fusion"
      },
      data: data2?.sales.map(e => {
        return {
          value : e.percent ,
          label : e.communityName ,
          
        }
      })
    }
  };
  return (
    <ReactFC  {...chartConfigs} />
  )
}

export default Chart2