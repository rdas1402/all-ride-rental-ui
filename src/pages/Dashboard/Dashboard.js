import React from 'react';
import { Select, Row, Col, Button, DatePicker, Anchor, Card, Avatar } from 'antd';
import { SearchOutlined, } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './Dashboard.css';

import img1 from '../../img/AllRideRental.jpg';
import img2 from '../../img/dp.jpg'
import img3 from '../../img/Final-Bike-Safety-Poster-See-Be-Seen.jpg'

const { Option } = Select;
const { Link } = Anchor;
const { RangePicker } = DatePicker;
const { Meta } = Card;
const images = [img1];
//const imgPath = "url(" + images[1] + ")";
let count = 0;

class Dashboard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            imgPath: img1, 
        };
    }

    

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

    componentDidMount(){
        setInterval(this.dynamicBackgroungImage, 5000)
    }

    dynamicBackgroungImage = () => {
        console.log('1');
        //var img = [...this.state.imgPath];
        const currentIndex = images.indexOf(this.state.imgPath);
        const nextIndex = (currentIndex + 1) % images.length;
        console.log('nextIndex :'+nextIndex);
        this.setState({ imgPath : images[nextIndex] });
//var d = new Date();
// var n = d.getSeconds();
//         console.log('1 :'+n);
//         this.setState({imgPath : "url(" + images[1] + ")"});
    }
      
    render(){
        // setInterval = () => (this.dynamicBackgroungImage, 5000);
        return (
            <div>
            <div className="landing-page-wrapper"  style={{ backgroundImage: `url(${this.state.imgPath})` }} >
                <div  className="header">
                    <Row className="dashboard-header">
                    <Col className="why-all-ride-rental" span={4}>
                        <Anchor affix={false}>
                            <Link href="#components-anchor-demo-basic" title="WHY All Ride Rental?" />
                        </Anchor>
                    </Col>
                    <Col span={4}>
                        <Anchor affix={false}>
                            <Link href="#components-anchor-demo-basic" title="FLEET AND PRICING" />
                        </Anchor>
                    </Col>
                    <Col span={3}>
                        <Anchor affix={false}>
                            <Link href="#components-anchor-demo-basic" title="SAFETY" />
                        </Anchor>
                    </Col>
                    <Col span={2}>
                        <Anchor affix={false}>
                            <Link href={img1} rel={img2} />
                        </Anchor>
                    </Col>
                    <Col span={3}>
                        <Anchor affix={false}>
                            <Link href="#components-anchor-demo-basic" title="FAQ" />
                        </Anchor>
                    </Col>
                    <Col span={4}>
                        <Anchor affix={false}>
                            <Link href="#components-anchor-demo-basic" title="LOGIN/SIGNUP" />
                        </Anchor>
                    </Col>
                    <Col span={4}>
                        <Anchor affix={false}>
                            <Link href="#components-anchor-demo-basic" title="+917019211971" />
                        </Anchor>
                    </Col>
                </Row>
                </div>
                <Row  className="search-engine" >
                    <Col>
                    <div className="select-city">
                        <Select
                            showSearch
                            size="large"
                            style={{ width: 200 }}
                            placeholder="SELECT CITY"
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
                    <div className="select-vehicle">
                        <Select
                            showSearch
                            size="large"
                            style={{ width: 200 }}
                            placeholder="SELECT VEHICLE"
                            optionFilterProp="children"
                            onChange={this.onChange}
                            onFocus={this.onFocus}
                            onBlur={this.onBlur}
                            onSearch={this.onSearch}
                            filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            <Option value="scooty">Scooty</Option>
                            <Option value="bike">Bike</Option>
                            <Option value="car">Car</Option>
                        </Select>
                    </div>
                    </Col>
                    <Col >
                    <div className="select-city">
                        <RangePicker size="large" />
                    </div>
                    </Col>
                    
                    <Col >
                    <div className="searchRide">
                        <Button type="primary" size="large" icon={<SearchOutlined />}>
                        FIND YOUR RIDE
                        </Button>
                    </div>
                    </Col>
                </Row>
            </div>
            
            <div className="site-card-wrapper">
    <Row gutter={16}>
      <Col span={6}>
        <Card bordered={false} cover={
      <img
        alt="example"
        src={img3}
      />
    }><Meta
    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
    title="Safe Rides"
    description="Your safety is our priority. From sanitizing all bikes before every use, to extensive on-ground safety measures, your rides with All Ride Rental will always be safe and reliable. We also offer helmets on-demand.
    "
  />
        </Card>
      </Col>
      <Col span={6}>
        <Card title="Flexible Ownership" bordered={false}>
        Enjoy the freedom of owning a two-wheeler without the hefty down-payments, EMIs and paperwork. Now choose from rent-to-own, monthly/quarterly bookings, and even daily plans.
        </Card>
      </Col>
      <Col span={6}>
        <Card title="Smarter Mobility" bordered={false}>
        With your trusty All Ride Rental app, you can choose any bike, make instant payments, get offers, and manage all aspect of your All Ride Rental experience right from the comfort and ease of your mobile app.
        </Card>
      </Col>
      <Col span={6}>
        <Card title="All Ride Rental Stations" bordered={false}>
        With your trusty All Ride Rental app, you can choose any bike, make instant payments, get offers, and manage all aspect of your All Ride Rental experience right from the comfort and ease of your mobile app.
        </Card>
      </Col>
    </Row>
  </div>
  </div>
        );
    }
}

export default Dashboard;