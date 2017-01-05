
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ButtonGroup from '../src';
import Icon from 'bee-icon';


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
            <div>
            <ButtonGroup style={{ margin: 10 }}>
                <Button shape='border'><Icon type='uf-navmenu' /></Button>
                <Button shape='border'><Icon type='uf-file' /></Button>
                <Button shape='border'><Icon type='uf-pencil' /></Button>
                <Button shape='border'><Icon type='uf-del' /></Button>
            </ButtonGroup>
            <ButtonGroup style={{ margin: 10 }}>
                <Button colors="primary">新增</Button>
                <Button colors="primary">修改</Button>
                <Button colors="primary">删除</Button>
            </ButtonGroup>
            <ButtonGroup style={{ margin: 10 }}>
                <Button colors="primary"><Icon type='uf-navmenu' /></Button>
                <Button colors="primary"><Icon type='uf-file' /></Button>
                <Button colors="primary"><Icon type='uf-pencil' /></Button>
                <Button colors="primary"><Icon type='uf-del' /></Button>
            </ButtonGroup>
            </div>

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
                <Button colors="primary"><Icon type='uf-navmenu' /></Button>
                <Button colors="info"><Icon type='uf-file' /></Button>
                <Button colors="warning"><Icon type='uf-del' /></Button>
            </ButtonGroup>
        )
    }
}
var DemoArray = [{"example":<Demo1 />,"title":" 默认按钮组","code":"/**\r\n *\r\n * @title 默认按钮组\r\n * @description 基础按钮组\r\n *\r\n */\r\n\r\nclass Demo1 extends Component {\r\n    render () {\r\n        return (\r\n            <div>\r\n            <ButtonGroup style={{ margin: 10 }}>\r\n                <Button shape='border'><Icon type='uf-navmenu' /></Button>\r\n                <Button shape='border'><Icon type='uf-file' /></Button>\r\n                <Button shape='border'><Icon type='uf-pencil' /></Button>\r\n                <Button shape='border'><Icon type='uf-del' /></Button>\r\n            </ButtonGroup>\r\n            <ButtonGroup style={{ margin: 10 }}>\r\n                <Button colors=\"primary\">新增</Button>\r\n                <Button colors=\"primary\">修改</Button>\r\n                <Button colors=\"primary\">删除</Button>\r\n            </ButtonGroup>\r\n            <ButtonGroup style={{ margin: 10 }}>\r\n                <Button colors=\"primary\"><Icon type='uf-navmenu' /></Button>\r\n                <Button colors=\"primary\"><Icon type='uf-file' /></Button>\r\n                <Button colors=\"primary\"><Icon type='uf-pencil' /></Button>\r\n                <Button colors=\"primary\"><Icon type='uf-del' /></Button>\r\n            </ButtonGroup>\r\n            </div>\r\n\r\n        )\r\n    }\r\n}\r\n","desc":" 基础按钮组"},{"example":<Demo2 />,"title":" 垂直排列的按钮组","code":"/**\r\n *\r\n * @title 垂直排列的按钮组\r\n * @description 通过`vertical`属性设置按钮组垂直排列\r\n *\r\n */\r\n\r\nclass Demo2 extends Component {\r\n    render () {\r\n        return (\r\n            <ButtonGroup vertical>\r\n                <Button colors=\"primary\"><Icon type='uf-navmenu' /></Button>\r\n                <Button colors=\"info\"><Icon type='uf-file' /></Button>\r\n                <Button colors=\"warning\"><Icon type='uf-del' /></Button>\r\n            </ButtonGroup>\r\n        )\r\n    }\r\n}\r\n","desc":" 通过`vertical`属性设置按钮组垂直排列"}]


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


        return (
            <Col md={12}>
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible headerContent expanded={ this.state.open } colors='bordered' header={ example } footer={footer} footerStyle = {{padding: 0, borderColor: "transparent"}}>
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
