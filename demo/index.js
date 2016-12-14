
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ButtonGroup from '../src';


const CARET = <i className="uf uf-chevronarrowdown"></i>;

const CARETUP = <i className="uf uf-chevronarrowup"></i>;


/**
 *
 * @title 默认按钮组
 * @description 基础按钮组
 *
 */

class Demo1 extends Component {
    render () {
        return (
            <ButtonGroup>
                <Button colors="primary">按钮一</Button>
                <Button colors="primary">按钮二</Button>
                <Button colors="primary">按钮三</Button>
            </ButtonGroup>
        )
    }
}
/**
 *
 * @title 垂直排列的按钮组
 * @description 通过`vertical`属性设置按钮组垂直排列
 *
 */

class Demo2 extends Component {
    render () {
        return (
            <ButtonGroup vertical>
                <Button size="lg" colors="primary">按钮一</Button>
                <Button size="lg" colors="warning">按钮二</Button>
                <Button size="lg" colors="info">按钮三</Button>
            </ButtonGroup>
        )
    }
}
/**
 *
 * @title 块状按钮组
 * @description 块状按钮组会充满父元素
 *
 */

class Demo3 extends Component {

    render () {
        return (
            <ButtonGroup vertical block>
                <Button size="lg" colors="primary">按钮一</Button>
                <Button size="lg" colors="primary">按钮二</Button>
                <Button size="lg" colors="primary">按钮三</Button>
            </ButtonGroup>
        )
    }
}
var DemoArray = [{"example":<Demo1 />,"title":" 默认按钮组","code":"/**\r\n *\r\n * @title 默认按钮组\r\n * @description 基础按钮组\r\n *\r\n */\r\n\r\nclass Demo1 extends Component {\r\n    render () {\r\n        return (\r\n            <ButtonGroup>\r\n                <Button colors=\"primary\">按钮一</Button>\r\n                <Button colors=\"primary\">按钮二</Button>\r\n                <Button colors=\"primary\">按钮三</Button>\r\n            </ButtonGroup>\r\n        )\r\n    }\r\n}\r\n","desc":" 基础按钮组"},{"example":<Demo2 />,"title":" 垂直排列的按钮组","code":"/**\r\n *\r\n * @title 垂直排列的按钮组\r\n * @description 通过`vertical`属性设置按钮组垂直排列\r\n *\r\n */\r\n\r\nclass Demo2 extends Component {\r\n    render () {\r\n        return (\r\n            <ButtonGroup vertical>\r\n                <Button size=\"lg\" colors=\"primary\">按钮一</Button>\r\n                <Button size=\"lg\" colors=\"warning\">按钮二</Button>\r\n                <Button size=\"lg\" colors=\"info\">按钮三</Button>\r\n            </ButtonGroup>\r\n        )\r\n    }\r\n}\r\n","desc":" 通过`vertical`属性设置按钮组垂直排列"},{"example":<Demo3 />,"title":" 块状按钮组","code":"/**\r\n *\r\n * @title 块状按钮组\r\n * @description 块状按钮组会充满父元素\r\n *\r\n */\r\n\r\nclass Demo3 extends Component {\r\n\r\n    render () {\r\n        return (\r\n            <ButtonGroup vertical block>\r\n                <Button size=\"lg\" colors=\"primary\">按钮一</Button>\r\n                <Button size=\"lg\" colors=\"primary\">按钮二</Button>\r\n                <Button size=\"lg\" colors=\"primary\">按钮三</Button>\r\n            </ButtonGroup>\r\n        )\r\n    }\r\n}\r\n","desc":" 块状按钮组会充满父元素"}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ open: !this.state.open })
    }

    render () {
        const { title, example, code, desc  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const footer = (
            <Button shape="block" onClick={ this.handleClick }>
                { caret }
                { text }
            </Button>
        );

        const header = (
            <Row>
                <Col md={11}>
                { example }
                </Col>
                <Col md={1}>
                <Button shape="icon" onClick={ this.handleClick }>
                    { caret }
                </Button>
                </Col>
            </Row>
        );
        return (
            <Col md={10} mdOffset={1} sm={12} smOffset={0}>
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible expanded={ this.state.open } colors='bordered' header={ header } footer={footer} footerStyle = {{padding: 0}}>
                    <pre><code className="hljs javascript">{ code }</code></pre>
                </Panel>
            </Col>
        )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
                <Row>
                    {DemoArray.map((child,index) => {

                        return (
                            <Demo example= {child.example} title= {child.title} code= {child.code} desc= {child.desc} key= {index}/>
                        )

                    })}
                </Row>
        )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
