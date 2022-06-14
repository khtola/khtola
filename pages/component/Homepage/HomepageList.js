import { Col, Row } from 'antd';
import React from 'react';
import Style from './HomePageList.module.css';
import { Empty } from 'antd';
import { BiEdit } from "react-icons/bi";

const HomepageList = (props) => {
   const {data} = props;
   const handleEdit=(item)=>{
    props.handleEdit(item)
   }
    return (
        <>
            {data =="" ? (
                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
            ) : (
                <div style={{ padding: 10 }}>
                    {data.map((item, index) => {
                        return (
                            <Row key={index} className={Style.Row}>
                                <Col span={12}>
                                    <div>
                                        {item.name}
                                    </div>
                                    <div> {item.Status}</div>
                                </Col>
                                <Col span={12}>
                                    <Row>
                                        <Col span={22}>
                                            <div className={Style.ViewList}> {item.Email}</div>
                                            <div className={Style.ViewList}>{item.Tel}</div>
                                        </Col>
                                        <Col span={2}>
                                           <div className={Style.ViewList} style={{cursor:'pointer'}} onClick={()=>handleEdit(item)}>
                                              <BiEdit style={{fontSize:18}}/>
                                           </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        )
                    })}
                </div>
            )}
        </>
    );
}

export default HomepageList;