import React from "react";
import "../styles/jew.css";
import logo from "../media/logo.png";
import {MenuOutlined} from "@ant-design/icons";
import {UserOutlined} from "@ant-design/icons";
import {HeartOutlined} from "@ant-design/icons";
import {SearchOutlined} from "@ant-design/icons";
import {ShoppingCartOutlined} from "@ant-design/icons";



const Jewellery=() => {
    return(
 <div>
    <div className="header">

        <img className="L1" src={logo} alt="abc"></img>
        
      
        <p>HOME</p>
        <p>SHOP</p>
        <p>PRODUCTS</p>
        <p>FEATURES</p>
        <p>PAGES</p>
        <p>BLOGS</p>
        
        <p><MenuOutlined /></p>
        <p><HeartOutlined /></p>
        <p><UserOutlined /></p>
        
        <p><SearchOutlined /></p>
        <p><ShoppingCartOutlined /></p>
        <p></p>

     
       
    </div>
    

    <div>
            <h3>
            An   Exemplart Gateway to Happiness
            </h3>
        </div>

        {/* <div>
            <h1>
            ALL JEWELLERY
            </h1>

            <button>SHOP NOW</button>
        </div> */}

      

 </div>
    )
    
}
export default Jewellery;

// const menu = (
//     <Menu
//       items={[
//         {
//           key: '1',
//           label: (
//             <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
//               1st menu item
//             </a>
//           ),
//         },
//         {
//           key: '2',
//           label: (
//             <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
//               2nd menu item (disabled)
//             </a>
//           ),
//           icon: <SmileOutlined />,
//           disabled: true,
//         },
//         {
//           key: '3',
//           label: (
//             <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
//               3rd menu item (disabled)
//             </a>
//           ),
//           disabled: true,
//         },
//         {
//           key: '4',
//           danger: true,
//           label: 'a danger item',
//         },
//       ]}
//     />
//   );
//   const App = () => (
//     <Dropdown overlay={menu}>
//       <a onClick={(e) => e.preventDefault()}>
//         <Space>
//           Hover me
//           <DownOutlined />
//         </Space>
//       </a>
//     </Dropdown>
//   );
//   export default App;
  