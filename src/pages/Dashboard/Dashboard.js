import React from 'react';
import { Select, Row, Col, Button } from 'antd';
import { SearchOutlined, } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './Dashboard.less';

const { Option } = Select;

class Dashboard extends React.Component{
    // constructor(props){
    //     super(props);
    // }

    onSearch = (value) => console.log(value);
    
    onChange = (value) => {
        console.log(`selected ${value}`);
    }
      
    onBlur = () => {
        console.log('blur');
    }
      
    onFocus = () => {
        console.log('focus');
    }
      
    onSearch = (val) => {
        console.log('search:', val);
    }

    handleSearch = (val) => {
        console.log('search:', val);
    }
      
    render(){
        return (
            <div className="landing-page-wrapper" style={{height: 1000}}>
                <Row className="search-engine" style={{height: 250}}>
    <Col flex="100px">
      
    </Col>
    <Col flex="100px">
      
    </Col>
    <Col flex="auto">
      
    </Col>
  </Row>
                <Row  className="search-engine" style={{height: 1000}}>
                    <Col  offset={3}>
                    <div className="select-city">
                        <Select
                            showSearch
                            style={{ width: 200 }}
                            placeholder="Select city"
                            optionFilterProp="children"
                            onChange={this.onChange}
                            onFocus={this.onFocus}
                            onBlur={this.onBlur}
                            onSearch={this.onSearch}
                            filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            <Option value="jorhat">Jorhat</Option>
                            <Option value="guwahati">Guwahati</Option>
                            <Option value="sivsagar">Sivsagar</Option>
                        </Select>
                    </div>
                    </Col>
                    <Col  >
                    <div className="select-city">
                        <Select
                            showSearch
                            style={{ width: 200 }}
                            placeholder="Select city"
                            optionFilterProp="children"
                            onChange={this.onChange}
                            onFocus={this.onFocus}
                            onBlur={this.onBlur}
                            onSearch={this.onSearch}
                            filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            <Option value="jorhat">Jorhat</Option>
                            <Option value="guwahati">Guwahati</Option>
                            <Option value="sivsagar">Sivsagar</Option>
                        </Select>
                    </div>
                    </Col>
                    <Col >
                    <div className="select-city">
                        <Select
                            showSearch
                            style={{ width: 200 }}
                            placeholder="Select city"
                            optionFilterProp="children"
                            onChange={this.onChange}
                            onFocus={this.onFocus}
                            onBlur={this.onBlur}
                            onSearch={this.onSearch}
                            filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            <Option value="jorhat">Jorhat</Option>
                            <Option value="guwahati">Guwahati</Option>
                            <Option value="sivsagar">Sivsagar</Option>
                        </Select>
                    </div>
                    </Col>
                    <Col >
                    <div className="select-city">
                        <Select
                            showSearch
                            style={{ width: 200 }}
                            placeholder="Select city"
                            optionFilterProp="children"
                            onChange={this.onChange}
                            onFocus={this.onFocus}
                            onBlur={this.onBlur}
                            onSearch={this.onSearch}
                            filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            <Option value="jorhat">Jorhat</Option>
                            <Option value="guwahati">Guwahati</Option>
                            <Option value="sivsagar">Sivsagar</Option>
                        </Select>
                    </div>
                    </Col>
                    <Col >
                    <div className="searchRide">
                        <Button type="primary" icon={<SearchOutlined />}>
                        Find your Ride
                        </Button>
                    </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Dashboard;